#!/usr/bin/env python3
"""Refresh only the numeric cells in the stock-paired memecoins article."""

from __future__ import annotations

import argparse
import copy
import json
import math
import os
import re
import sys
import urllib.parse
import urllib.request
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

ASSETS = {
    'stonkfun': ('stonk-3', 'stonkfun'),
    'pump': ('pump-fun', 'pump'),
    'pons': ('pons', 'pons'),
    'backpack': ('backpack', None),
    'ondo': ('ondo-finance', 'ondo-finance'),
    'coinbase': (None, None),
    'robinhood': (None, None),
    'raydium': ('raydium', 'raydium'),
    'meteora': ('meteora', 'meteora'),
    'orca': ('orca', 'orca'),
    'jupiter': ('jupiter-exchange-solana', 'jupiter'),
}
STOCKS = {'coinbase': 'COIN', 'robinhood': 'HOOD'}
FIELDS = ('price', 'market_cap', 'revenue')
NA = 'N/A'

def fetch_json(url: str, headers: dict[str, str] | None = None) -> Any:
    request = urllib.request.Request(url, headers={
        'Accept': 'application/json',
        'User-Agent': 'kliment-dukovski-market-data-updater/1.0',
        **(headers or {}),
    })
    with urllib.request.urlopen(request, timeout=30) as response:
        return json.load(response)

def valid_number(value: Any, *, allow_zero: bool = False) -> float:
    if isinstance(value, bool) or value is None:
        raise ValueError('missing number')
    number = float(value)
    if not math.isfinite(number) or number < 0 or (number == 0 and not allow_zero):
        raise ValueError('invalid number')
    return number

def timestamp(value: Any) -> str:
    return datetime.fromtimestamp(float(value), timezone.utc).isoformat().replace('+00:00', 'Z')

def display(value: float, field: str) -> str:
    if field == 'price':
        if value >= 1:
            return f'${value:,.2f}'
        if value >= 0.01:
            return f'${value:,.4f}'
        return '$' + f'{value:.8f}'.rstrip('0').rstrip('.')
    for scale, suffix in ((1e12, 'T'), (1e9, 'B'), (1e6, 'M'), (1e3, 'K')):
        if value >= scale:
            return f'${value / scale:,.2f}{suffix}'
    return f'${value:,.2f}'

def empty_metric(reason: str) -> dict[str, Any]:
    return {'value': None, 'display': NA, 'status': 'unavailable', 'reason': reason}

def observed_metric(value: Any, field: str, source: str, source_url: str,
                    as_of: str, now: datetime, max_age_hours: float = 48,
                    scope: str | None = None) -> dict[str, Any]:
    number = valid_number(value, allow_zero=field == 'revenue')
    observed = datetime.fromisoformat(as_of.replace('Z', '+00:00'))
    age = (now - observed).total_seconds() / 3600
    if age < -1:
        raise ValueError('future source timestamp')
    result = {'value': number, 'display': display(number, field), 'source': source,
              'source_url': source_url, 'as_of': as_of,
              'status': 'stale' if age > max_age_hours else 'ok'}
    if scope:
        result['scope'] = scope
    return result

def unavailable_or_previous(previous: dict[str, Any] | None, reason: str) -> dict[str, Any]:
    if previous and previous.get('value') is not None:
        result = copy.deepcopy(previous)
        result['status'] = 'stale'
        result['reason'] = reason
        return result
    return empty_metric(reason)

def public_display(metric: dict[str, Any]) -> str:
    text = metric.get('display', NA)
    return text + ' (stale)' if metric.get('status') == 'stale' and text != NA else text

def visible_snapshot(data: dict[str, Any]) -> list[Any]:
    return [(key, *[(data.get(key) or {}).get(field + '_display', NA) for field in FIELDS])
            for key in ASSETS]

def fetch_prices() -> dict[str, Any]:
    ids = ','.join(gecko for gecko, _ in ASSETS.values() if gecko)
    query = urllib.parse.urlencode({'ids': ids, 'vs_currencies': 'usd',
        'include_market_cap': 'true', 'include_last_updated_at': 'true'})
    headers = {}
    if os.environ.get('COINGECKO_DEMO_API_KEY'):
        headers['x-cg-demo-api-key'] = os.environ['COINGECKO_DEMO_API_KEY']
    data = fetch_json('https://api.coingecko.com/api/v3/simple/price?' + query, headers)
    if not isinstance(data, dict) or 'error' in data:
        raise ValueError('CoinGecko did not return coin data')
    return data

def fetch_revenue(item: tuple[str, str]) -> tuple[str, dict[str, Any] | None]:
    key, slug = item
    try:
        query = urllib.parse.urlencode({'dataType': 'dailyRevenue',
            'excludeTotalDataChart': 'false', 'excludeTotalDataChartBreakdown': 'true'})
        data = fetch_json('https://api.llama.fi/summary/fees/' + slug + '?' + query)
        if not isinstance(data, dict) or data.get('disabled') or data.get('slug') != slug:
            raise ValueError('DefiLlama returned an unavailable protocol')
        return key, data
    except Exception:
        return key, None

def fetch_stock_quote(symbol: str) -> dict[str, Any]:
    query = urllib.parse.urlencode({'symbol': symbol, 'apikey': os.environ['FMP_API_KEY']})
    rows = fetch_json('https://financialmodelingprep.com/stable/quote?' + query)
    if not isinstance(rows, list):
        raise ValueError('Stock feed returned no quotes')
    return next(row for row in rows if row.get('symbol') == symbol)

def refresh(old: dict[str, Any], now: datetime) -> dict[str, Any]:
    data = copy.deepcopy(old)
    data['schema_version'] = 1
    data['checked_at'] = now.isoformat().replace('+00:00', 'Z')
    try:
        prices = fetch_prices()
    except Exception:
        prices = {}
    for key, (gecko, slug) in ASSETS.items():
        row = data.setdefault(key, {})
        if gecko:
            quote = prices.get(gecko, {})
            for field, api_field in (('price', 'usd'), ('market_cap', 'usd_market_cap')):
                try:
                    row[field] = observed_metric(quote.get(api_field), field, 'CoinGecko',
                        'https://www.coingecko.com/en/coins/' + gecko,
                        timestamp(quote['last_updated_at']), now)
                except Exception:
                    row[field] = unavailable_or_previous(row.get(field), 'CoinGecko could not refresh this value')
        if not slug:
            row['revenue'] = empty_metric('A comparable public trailing 30-day protocol revenue figure is not available')

    work = [(key, slug) for key, (_, slug) in ASSETS.items() if slug]
    with ThreadPoolExecutor(max_workers=8) as executor:
        revenues = dict(executor.map(fetch_revenue, work))
    for key, slug in work:
        row = data[key]
        revenue = revenues.get(key)
        try:
            if not revenue:
                raise ValueError('missing revenue')
            chart = revenue.get('totalDataChart') or []
            if not chart:
                raise ValueError('missing revenue source date')
            # Chart dates identify the start of a reporting day. Today's partial
            # observation is valid; older days were completed at the next midnight.
            latest_day = max(float(point[0]) for point in chart)
            if latest_day > now.timestamp() + 3600:
                raise ValueError('future revenue chart date')
            latest_observation = min(latest_day + 86400, now.timestamp())
            scope = 'Total tracked protocol revenue across products; includes activity beyond stock-paired memecoins'
            if key == 'ondo':
                scope = 'Ondo Yield Assets tracked by DefiLlama; not total Ondo company revenue or all stock-tokenization revenue'
            row['revenue'] = observed_metric(revenue.get('total30d'), 'revenue', 'DefiLlama',
                'https://defillama.com/protocol/' + slug,
                timestamp(latest_observation), now, scope=scope)
        except Exception:
            row['revenue'] = unavailable_or_previous(row.get('revenue'), 'DefiLlama could not refresh this value')

    for key, symbol in STOCKS.items():
        row = data[key]
        if os.environ.get('FMP_API_KEY'):
            try:
                quote = fetch_stock_quote(symbol)
                observed = timestamp(quote['timestamp'])
                for field, api_field in (('price', 'price'), ('market_cap', 'marketCap')):
                    try:
                        row[field] = observed_metric(quote.get(api_field), field,
                            'Financial Modeling Prep', 'https://financialmodelingprep.com/',
                            observed, now, max_age_hours=96)
                    except Exception:
                        row[field] = unavailable_or_previous(row.get(field), 'Stock feed could not refresh this value')
            except Exception:
                for field in ('price', 'market_cap'):
                    row[field] = unavailable_or_previous(row.get(field), 'Stock feed could not refresh this value')
        else:
            for field in ('price', 'market_cap'):
                row[field] = unavailable_or_previous(row.get(field), 'Optional FMP_API_KEY is not configured')

    for key in ASSETS:
        for field in FIELDS:
            data[key][field + '_display'] = public_display(data[key][field])
    data['last_changed_at'] = (now.date().isoformat() if visible_snapshot(old) != visible_snapshot(data)
        else old.get('last_changed_at', now.date().isoformat()))
    return data

def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--data', default='_data/stock_memecoins.json')
    parser.add_argument('--post', default='_posts/2026-10-10-stock-paired-memecoins-crypto-beneficiaries.md')
    args = parser.parse_args()
    path = Path(args.data)
    old = json.loads(path.read_text()) if path.exists() else {}
    data = refresh(old, datetime.now(timezone.utc).replace(microsecond=0))
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    if visible_snapshot(old) != visible_snapshot(data) and Path(args.post).exists():
        post = Path(args.post)
        text = post.read_text(encoding='utf-8')
        text = re.sub(r'^last_modified_at:.*$', 'last_modified_at: "' + data['last_changed_at'] + '"', text, count=1, flags=re.M)
        post.write_text(text, encoding='utf-8')
    for key in ASSETS:
        row = data[key]
        print(key, row['price_display'], row['market_cap_display'], row['revenue_display'])
    return 0

if __name__ == '__main__':
    sys.exit(main())
