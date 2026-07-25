#!/usr/bin/env python3
"""Refresh the APY snapshot used by the Solana passive-income article."""

from __future__ import annotations

import argparse
import json
import os
import re
import sys
import urllib.error
import urllib.request
from datetime import datetime, timezone
from pathlib import Path
from typing import Any


SOLANA_RPC = os.environ.get(
    "SOLANA_RPC_URL", "https://api.mainnet-beta.solana.com"
)
JITO_STATS_URL = (
    "https://kobe.mainnet.jito.network/api/v1/stake_pool_stats"
)
JUPITER_EARN_URL = "https://api.jup.ag/lend/v1/earn/tokens"
JUPITER_BORROW_URL = "https://api.jup.ag/lend/v1/borrow/vaults"
KAMINO_JLP_MARKET = "DxXdAyU3kCjnyggvHmY5nAwg5cRbbmdyX3npfDMjjMek"
KAMINO_JLP_URL = (
    "https://api.kamino.finance/kamino-market/"
    f"{KAMINO_JLP_MARKET}/reserves/metrics"
)

JLP_MINT = "27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4"
JUICED_MINT = "7GxATsNMnaC88vdwd2t3mwrFuQwwGvmYPrUQ4D6FotXk"
USDC_MINT = "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"
USDT_MINT = "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"

REQUIRED_KEYS = (
    "native_sol_staking",
    "jito_sol",
    "jlp",
    "juiced",
    "jupiter_jlp_usdc",
    "kamino_jlp_usdc",
    "juiced_usdt",
)


def utc_now() -> datetime:
    return datetime.now(timezone.utc).replace(microsecond=0)


def isoformat_z(value: datetime) -> str:
    return value.isoformat().replace("+00:00", "Z")


def parse_time(value: str | None) -> datetime | None:
    if not value:
        return None
    try:
        return datetime.fromisoformat(value.replace("Z", "+00:00"))
    except ValueError:
        return None


def older_than_48_hours(value: str | None, now: datetime) -> bool:
    observed = parse_time(value)
    if not observed:
        return True
    return (now - observed).total_seconds() > 48 * 3600


def fetch_json(
    url: str,
    *,
    method: str = "GET",
    payload: Any | None = None,
    headers: dict[str, str] | None = None,
) -> Any:
    request_headers = {
        "Accept": "application/json",
        "User-Agent": "kliment-dukovski-yield-updater/1.0",
    }
    if headers:
        request_headers.update(headers)
    body = None
    if payload is not None:
        body = json.dumps(payload).encode("utf-8")
        request_headers["Content-Type"] = "application/json"
    request = urllib.request.Request(
        url,
        data=body,
        headers=request_headers,
        method=method,
    )
    with urllib.request.urlopen(request, timeout=45) as response:
        return json.load(response)


def solana_rpc(method: str, params: list[Any]) -> Any:
    response = fetch_json(
        SOLANA_RPC,
        method="POST",
        payload={
            "jsonrpc": "2.0",
            "id": method,
            "method": method,
            "params": params,
        },
    )
    if "error" in response:
        raise RuntimeError(f"{method}: {response['error']}")
    return response["result"]


def percent_from_bps(value: Any) -> float:
    return round(float(value) / 100, 2)


def percent_from_decimal(value: Any) -> float:
    return round(float(value) * 100, 2)


def token_address(token: dict[str, Any]) -> str:
    return str(token.get("address") or "")


def find_vault(
    vaults: list[dict[str, Any]],
    supply_mint: str,
    borrow_mint: str,
) -> dict[str, Any]:
    for vault in vaults:
        supply = vault.get("supplyToken") or {}
        borrow = vault.get("borrowToken") or {}
        if (
            token_address(supply) == supply_mint
            and token_address(borrow) == borrow_mint
        ):
            return vault
    raise LookupError(
        f"Jupiter vault not found for {supply_mint}/{borrow_mint}"
    )


def native_sol_snapshot(now: datetime) -> dict[str, Any]:
    inflation = solana_rpc("getInflationRate", [])
    supply = solana_rpc("getSupply", [{"commitment": "finalized"}])
    votes = solana_rpc(
        "getVoteAccounts",
        [{"commitment": "finalized", "keepUnstakedDelinquents": False}],
    )

    total_supply = float(supply["value"]["total"])
    active_stake = sum(
        float(account["activatedStake"]) for account in votes["current"]
    )
    if active_stake <= 0:
        raise ValueError("Solana returned zero active stake")

    gross = (
        float(inflation["validator"]) * total_supply / active_stake * 100
    )
    return {
        "gross_apy": round(gross, 2),
        "net_10pct_apy": round(gross * 0.90, 2),
        "assumed_validator_commission_pct": 10,
        "updated_at": isoformat_z(now),
        "stale": False,
        "source": "Solana mainnet JSON-RPC",
        "source_url": "https://solana.com/docs/rpc",
        "method": (
            "Estimated from validator inflation, total SOL supply, "
            "and active delegated stake"
        ),
    }


def jito_snapshot(now: datetime) -> dict[str, Any]:
    stats = fetch_json(JITO_STATS_URL)
    points = stats.get("apy") or []
    if not points:
        raise ValueError("Jito returned no APY observations")
    latest = max(points, key=lambda point: point.get("date", ""))
    updated_at = latest.get("date") or isoformat_z(now)
    return {
        "apy": percent_from_decimal(latest["data"]),
        "updated_at": updated_at,
        "stale": older_than_48_hours(updated_at, now),
        "source": "Jito Stake Pool API",
        "source_url": JITO_STATS_URL,
    }


def jupiter_snapshots(now: datetime) -> dict[str, dict[str, Any]]:
    headers: dict[str, str] = {}
    api_key = os.environ.get("JUPITER_API_KEY")
    if api_key:
        headers["x-api-key"] = api_key

    earn_tokens = fetch_json(JUPITER_EARN_URL, headers=headers)
    borrow_vaults = fetch_json(JUPITER_BORROW_URL, headers=headers)

    juiced_token = next(
        (
            token
            for token in earn_tokens
            if token.get("address") == JUICED_MINT
            or token.get("uiSymbol") == "JUICED"
        ),
        None,
    )
    if not juiced_token:
        raise LookupError("JUICED was not found in Jupiter Earn")

    jlp_usdc = find_vault(borrow_vaults, JLP_MINT, USDC_MINT)
    juiced_usdt = find_vault(borrow_vaults, JUICED_MINT, USDT_MINT)

    jlp_apy = percent_from_bps(
        jlp_usdc["supplyToken"]["stakingApr"]
    )
    juiced_apy = percent_from_bps(juiced_token["totalRate"])
    jlp_borrow_apy = percent_from_bps(jlp_usdc["borrowRate"])
    juiced_borrow_apy = percent_from_bps(juiced_usdt["borrowRate"])
    juiced_net_apy = round(
        juiced_apy * 9 - juiced_borrow_apy * 8,
        2,
    )

    updated_at = (
        jlp_usdc.get("supplyToken", {}).get("updatedAt")
        or isoformat_z(now)
    )
    juiced_updated_at = (
        juiced_token.get("asset", {}).get("updatedAt")
        or juiced_usdt.get("supplyToken", {}).get("updatedAt")
        or isoformat_z(now)
    )

    return {
        "jlp": {
            "apy": jlp_apy,
            "updated_at": updated_at,
            "stale": older_than_48_hours(updated_at, now),
            "source": "Jupiter Lend",
            "source_url": JUPITER_BORROW_URL,
        },
        "juiced": {
            "apy": juiced_apy,
            "base_apy": percent_from_bps(juiced_token["supplyRate"]),
            "rewards_apy": percent_from_bps(
                juiced_token.get("rewardsRate", 0)
            ),
            "updated_at": juiced_updated_at,
            "stale": older_than_48_hours(juiced_updated_at, now),
            "source": "Jupiter Earn",
            "source_url": JUPITER_EARN_URL,
        },
        "jupiter_jlp_usdc": {
            "borrow_apy": jlp_borrow_apy,
            "liquidation_threshold_pct": (
                float(jlp_usdc["liquidationThreshold"]) / 10
            ),
            "updated_at": updated_at,
            "stale": older_than_48_hours(updated_at, now),
            "source": "Jupiter Lend",
            "source_url": JUPITER_BORROW_URL,
        },
        "juiced_usdt": {
            "net_apy": juiced_net_apy,
            "underlying_apy": juiced_apy,
            "borrow_apy": juiced_borrow_apy,
            "assumed_leverage": 9,
            "updated_at": juiced_updated_at,
            "stale": older_than_48_hours(juiced_updated_at, now),
            "source": "Jupiter Lend",
            "source_url": JUPITER_BORROW_URL,
            "method": (
                "(JUICED APY × 9) − (USDT borrow APY × 8); "
                "excludes transaction costs"
            ),
        },
    }


def kamino_snapshot(now: datetime) -> dict[str, Any]:
    reserves = fetch_json(KAMINO_JLP_URL)
    usdc = next(
        (
            reserve
            for reserve in reserves
            if reserve.get("liquidityTokenMint") == USDC_MINT
            or reserve.get("liquidityToken") == "USDC"
        ),
        None,
    )
    if not usdc:
        raise LookupError("USDC reserve was not found in Kamino JLP market")
    return {
        "borrow_apy": percent_from_decimal(usdc["borrowApy"]),
        "updated_at": isoformat_z(now),
        "stale": False,
        "source": "Kamino JLP Market API",
        "source_url": KAMINO_JLP_URL,
    }


def display_snapshot(data: dict[str, Any]) -> dict[str, Any]:
    paths = {
        "native_gross": ("native_sol_staking", "gross_apy"),
        "native_net_10": ("native_sol_staking", "net_10pct_apy"),
        "jito": ("jito_sol", "apy"),
        "jlp": ("jlp", "apy"),
        "juiced": ("juiced", "apy"),
        "jupiter_jlp_borrow": ("jupiter_jlp_usdc", "borrow_apy"),
        "kamino_jlp_borrow": ("kamino_jlp_usdc", "borrow_apy"),
        "juiced_usdt": ("juiced_usdt", "net_apy"),
    }
    snapshot: dict[str, Any] = {}
    for label, (section, field) in paths.items():
        snapshot[label] = (data.get(section) or {}).get(field)
    return snapshot


def mark_stale(
    section: dict[str, Any],
    now: datetime,
    error: Exception,
) -> dict[str, Any]:
    preserved = dict(section)
    observed = parse_time(preserved.get("updated_at"))
    age_hours = (
        (now - observed).total_seconds() / 3600 if observed else float("inf")
    )
    preserved["stale"] = age_hours > 48
    preserved["last_error"] = str(error)
    return preserved


def common_checked_date(data: dict[str, Any]) -> str:
    dates: list[datetime] = []
    for key in REQUIRED_KEYS:
        observed = parse_time((data.get(key) or {}).get("updated_at"))
        if not observed:
            raise ValueError(f"{key} has no valid updated_at timestamp")
        dates.append(observed)
    return min(dates).date().isoformat()


def update_front_matter(article_path: Path, date_value: str) -> None:
    if not article_path.exists():
        return
    text = article_path.read_text(encoding="utf-8")
    updated, count = re.subn(
        r"(?m)^last_modified_at:\s*\d{4}-\d{2}-\d{2}\s*$",
        f"last_modified_at: {date_value}",
        text,
        count=1,
    )
    if count != 1:
        raise ValueError(
            f"Could not update last_modified_at in {article_path}"
        )
    article_path.write_text(updated, encoding="utf-8")


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--data",
        default="_data/yields.json",
        help="Path to the Jekyll data file",
    )
    parser.add_argument(
        "--article",
        default=(
            "_posts/2026-07-24-best-solana-passive-income.md"
        ),
        help="Article whose last_modified_at field should be updated",
    )
    args = parser.parse_args()

    data_path = Path(args.data)
    article_path = Path(args.article)
    old_data: dict[str, Any] = {}
    if data_path.exists():
        old_data = json.loads(data_path.read_text(encoding="utf-8"))

    data = dict(old_data)
    now = utc_now()
    errors: list[str] = []

    try:
        data["native_sol_staking"] = native_sol_snapshot(now)
    except Exception as error:  # noqa: BLE001
        errors.append(f"native_sol_staking: {error}")
        data["native_sol_staking"] = mark_stale(
            old_data.get("native_sol_staking", {}), now, error
        )

    try:
        data["jito_sol"] = jito_snapshot(now)
    except Exception as error:  # noqa: BLE001
        errors.append(f"jito_sol: {error}")
        data["jito_sol"] = mark_stale(
            old_data.get("jito_sol", {}), now, error
        )

    try:
        data.update(jupiter_snapshots(now))
    except Exception as error:  # noqa: BLE001
        errors.append(f"jupiter: {error}")
        for key in (
            "jlp",
            "juiced",
            "jupiter_jlp_usdc",
            "juiced_usdt",
        ):
            data[key] = mark_stale(old_data.get(key, {}), now, error)

    try:
        data["kamino_jlp_usdc"] = kamino_snapshot(now)
    except Exception as error:  # noqa: BLE001
        errors.append(f"kamino_jlp_usdc: {error}")
        data["kamino_jlp_usdc"] = mark_stale(
            old_data.get("kamino_jlp_usdc", {}), now, error
        )

    data["checked_at"] = common_checked_date(data)
    data["stale"] = any(
        bool((data.get(key) or {}).get("stale")) for key in REQUIRED_KEYS
    )

    old_display = display_snapshot(old_data)
    new_display = display_snapshot(data)
    values_changed = old_display != new_display
    data["last_changed_at"] = (
        now.date().isoformat()
        if values_changed
        else old_data.get("last_changed_at", now.date().isoformat())
    )

    data_path.parent.mkdir(parents=True, exist_ok=True)
    data_path.write_text(
        json.dumps(data, indent=2, sort_keys=True) + "\n",
        encoding="utf-8",
    )

    if values_changed:
        update_front_matter(article_path, data["last_changed_at"])

    if errors:
        print("Some sources could not be refreshed:", file=sys.stderr)
        for error in errors:
            print(f"- {error}", file=sys.stderr)
    print(
        f"Updated {data_path} (checked_at={data['checked_at']}, "
        f"values_changed={str(values_changed).lower()}, "
        f"stale={str(data['stale']).lower()})"
    )
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except (ValueError, urllib.error.URLError) as error:
        print(f"Yield update failed: {error}", file=sys.stderr)
        raise SystemExit(1)
