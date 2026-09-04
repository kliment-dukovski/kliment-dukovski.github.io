---
layout: article
title: "How to Use Solana: The Complete Beginner Guide"
seo_title: "How to Use Solana: Complete Beginner Guide"
date: 2026-09-04
last_modified_at: 2026-09-04
category: "Solana"
content_type: "Beginner Guide"
featured: true
tags:
  - How to use Solana
  - Solana beginner guide
  - Solana wallets
  - Solana DeFi
  - SOL staking
  - Tokenized stocks
  - Crypto security
publication: "Kliment Dukovski"
summary: "Learn how to choose and secure a Solana wallet, fund it, send funds, swap tokens, stake SOL, use DeFi, and cash out safely."
description: "Learn how to use Solana safely: choose a wallet, buy or transfer SOL, understand transactions, swap tokens, stake, use DeFi, and cash out."
image: "/assets/images/solana-guide/solana-guide-featured-v2.webp"
image_alt: "Solana beginner guide illustration with a crypto wallet, token transfers, swaps, staking, and DeFi"
image_width: 1672
image_height: 941
slug: "how-to-use-solana"
permalink: "/articles/how-to-use-solana/"
about:
  - "Solana"
  - "Cryptocurrency wallets"
  - "Decentralized finance"
  - "Blockchain security"
mentions:
  - "Jupiter"
  - "Phantom"
  - "Solflare"
  - "Backpack"
citations:
  - "https://solana.com/upgrades/alpenglow"
  - "https://www.solana-program.com/docs/stake-pool#security-audits"
  - "https://docs.xstocks.fi/docs/frequently-asked-questions"
  - "https://defillama.com/protocols/lending/solana"
---

<link rel="stylesheet" href="{{ '/assets/css/solana-beginner-guide.css' | relative_url }}?v={{ site.github.build_revision }}">
<script src="{{ '/assets/js/solana-beginner-guide.js' | relative_url }}?v={{ site.github.build_revision }}" defer></script>

<div class="solana-guide-layout" markdown="1">

<details class="solana-guide-toc" data-guide-toc open>
  <summary>Contents</summary>
  <ol>
    <li><a href="#quick-start">Quick start</a></li>
    <li><a href="#what-is-solana">What is Solana?</a></li>
    <li><a href="#what-can-you-do">What can you do?</a></li>
    <li><a href="#choose-a-wallet">Choose a wallet</a></li>
    <li><a href="#create-and-secure-wallet">Create and secure a wallet</a></li>
    <li><a href="#fund-a-wallet">Fund a wallet</a></li>
    <li><a href="#send-and-receive">Send and receive crypto</a></li>
    <li><a href="#buy-and-swap-tokens">Buy and swap tokens</a></li>
    <li><a href="#tokenized-stocks">Tokenized stocks</a></li>
    <li><a href="#stake-sol">Stake SOL</a></li>
    <li><a href="#lending-and-borrowing">Lending and borrowing</a></li>
    <li><a href="#perpetual-futures">Perpetual futures</a></li>
    <li><a href="#prediction-markets">Prediction markets</a></li>
    <li><a href="#games-nfts-and-gacha">Games, NFTs, and gacha</a></li>
    <li><a href="#cash-out">Cash out</a></li>
    <li><a href="#conclusion">Conclusion</a></li>
    <li><a href="#frequently-asked-questions">Frequently asked questions</a></li>
  
  </ol>
</details>

<div class="solana-guide-body" markdown="1">

To use Solana, you need a compatible wallet and a small amount of SOL to cover transaction fees, which typically cost less than $0.01.

Once you create a wallet, you can buy or sell SOL and other tokens on the Solana blockchain. You can also send crypto to other wallets, stake your assets for passive income, or use decentralized finance (DeFi) applications for lending, borrowing, and trading perpetual futures. For fun, you can play Web3 games and open gacha packs featuring Pokémon and sports cards.

While the technology is easy to use, blockchain transactions are irreversible. Because of that, you must verify token addresses and double-check transaction details before confirming.

This guide takes you from choosing the right wallet for your needs to making your first transaction and exploring the Solana ecosystem. It also explains the costs, risks, and what you may be better off skipping.

## Quick start: How to use Solana in six steps {#quick-start}

Using Solana is straightforward. Here’s how to get started:

1. **Choose a Solana wallet.** Download it from the app store on mobile or install it as a browser extension. Popular Solana wallets include Jupiter, Solflare, Backpack, and Phantom.
2. **Back up your wallet.** When you create a wallet, you receive a seed phrase of 12 to 24 words. Keep it safe and offline, and never share it. Never take photos of your seed phrase or store it in an online file.
3. **Add funds.** You need SOL to pay network fees, so either buy SOL directly in the wallet with a card, Apple Pay, or Google Pay, or send SOL to your wallet from an exchange.
4. **Connect only to verified applications.** For most of Solana’s use cases, such as sending and receiving funds, you don’t need to connect to applications. However, some actions—such as trading perpetual futures, using Pokémon gacha machines, or lending and borrowing—require you to connect your wallet to an app. Ensure the application is legitimate before connecting.
5. **Double-check transaction details.** Before signing any transaction in your wallet, verify that the amount and wallet address are accurate.
6. **Choose what to do next.** You can hold coins and tokens, stake, lend and borrow, play games, trade futures, and more.

<aside class="solana-guide-callout" aria-label="Beginner note" markdown="1">

**Beginner note:** Keep a small amount of SOL in your wallet to pay fees. Never send the full amount to another wallet or app before testing it with a smaller amount first.

</aside>

## What is Solana? {#what-is-solana}

Solana is a decentralized blockchain network that processes transactions and runs apps without relying on a single company to maintain the blockchain ledger. Solana’s main selling point is fast transactions that typically confirm in under a second and cost less than $0.01. This means you can send money from one end of the world to another almost instantly, regardless of the amount transferred.

To achieve this, Solana uses a combination of Proof-of-Stake and Proof-of-History. Think of the latter as a built-in clock that keeps validator computers on the same schedule. With each tick, a record proves that something happened and when. Because validators share this cryptographic ordering of events, Solana can typically confirm transactions in under a second.

More than 98% of validators approved a major consensus upgrade called [Alpenglow](https://solana.com/upgrades/alpenglow). Alpenglow will replace Solana’s current Tower BFT consensus system and aims to reduce transaction finality from approximately 12.8 seconds to around 100–150 milliseconds. Alpenglow is planned to enter full mainnet in late 2026.

Solana is also preparing for agentic payments. In August 2026, x402 transactions processed more than $11 million, according to Solana’s Head of Product Marketing.

### SOL, wallets, and accounts

Solana’s native coin is SOL, which is used to pay transaction fees and participate in staking. Staking means delegating your SOL to validators—computers that run the validator client software—to verify transactions and add them to the ledger. Users who stake their coins earn SOL rewards.

To interact with the blockchain and its applications, you need a wallet. Each wallet has a public key and a private key. Your public key is visible on the ledger and works as your receiving address. Your private key gives you control of your assets and lets you approve, or sign, transactions. Never share it.

Because the Solana ledger is public, anyone can inspect transactions using a block explorer such as [Solscan](https://solscan.io/) or [Orb](https://orbmarkets.io/).

<figure class="article-figure article-figure--portrait">
  <img src="{{ '/assets/images/solana-guide/jupiter-wallet-app.png' | relative_url }}" alt="Jupiter Wallet showing Solana assets and wallet actions" width="708" height="1243" loading="lazy" decoding="async">
  <figcaption>Jupiter Wallet app</figcaption>
</figure>

Accounts are the main data unit on Solana. Think of them as digital filing cabinets. Wallets are one type of account: they hold your assets and act as your identity on the blockchain. Token accounts are linked to your wallet when you hold a particular token. Applications use data accounts to store other information.

When you buy a token you have not held before—such as BONK or JUP—you may notice a small additional SOL charge alongside the transaction cost. This is the rent deposit for the token account: a refundable storage deposit. Once you no longer hold the token, you can close the account and reclaim the SOL through some wallets or a tool such as [Sol Incinerator](https://sol-incinerator.com/).

Previously, opening a token account required about 0.00204 SOL. A September 2026 validator software update reduced the rent deposit by roughly 90%, from around $0.16 to less than $0.02 at the prices used for this article.

<aside class="solana-guide-callout" aria-label="How a Solana transaction works" markdown="1">

### How a Solana transaction works

1. Connect your wallet to a verified DeFi app, or open your wallet to perform an action such as sending funds.
2. The wallet or app prepares the transaction.
3. Your wallet displays the request, including the amount, estimated network fee, and recipient’s public address.
4. If everything looks correct, approve or sign the transaction.
5. The Solana blockchain processes it.
6. The result appears in your wallet and on a block explorer.

</aside>

## What can you do on Solana? {#what-can-you-do}

Because of its speed and low transaction costs, Solana is becoming a useful financial and payment network. Here are some of its most common uses:

- **Transfer funds.** Send and receive stablecoins and other tokens between wallets. Many crypto-native companies also pay employees in crypto.
- **Borrow or lend assets.** DeFi applications such as Jupiter and Kamino let users put SOL up as collateral and borrow USDC. Users can also deposit USDC to earn variable yield.
- **Trade.** Solana platforms such as Jupiter, Backpack, and Phantom offer leveraged perpetual futures and tokenized-stock trading. Some tokenized stocks can be traded around the clock.
- **Play blockchain games.** Some Web3 games let players own and trade in-game assets or earn tokens.
- **Collect NFTs and tokenized cards.** Platforms such as Collector Crypt tokenize physical Pokémon and sports cards, letting users open gacha packs, trade the cards, or redeem eligible cards for physical delivery.
- **Make payments with virtual cards.** Several Solana products offer virtual Visa cards funded with wallet assets, although availability and fees vary.

These activities use the same network and wallet, but their costs and risks differ.

| If you want to… | Main risk to understand |
|---|---|
| Send or receive money | Wrong address or asset |
| Exchange one asset for another | Fake tokens, slippage, and price impact |
| Earn staking rewards | SOL price and validator risk |
| Earn lending interest | Protocol, depeg, and liquidity risk |
| Borrow against crypto | Liquidation and variable interest |
| Trade with leverage | Rapid liquidation and funding fees |
| Trade event outcomes | Settlement rules and liquidity |
| Access tokenized stocks | Issuer and legal-rights risk |
| Play games or collect NFTs | Spending, custody, and resale-price risk |

## How to choose a Solana wallet {#choose-a-wallet}

For holding assets and connecting to Solana applications, the leading wallets are broadly similar. Jupiter, Solflare, Phantom, and Backpack all cover typical daily use, but their extra features differ.

| Wallet | Best suited for | Platforms | Useful safety features | Extra features |
|---|---|---|---|---|
| **Jupiter** | Active traders and users of Jupiter’s product suite | Web and mobile | Biometric login | Onramps, swaps, limit orders, perps, predictions, yield products, and virtual card |
| **Phantom** | Beginners | Web and mobile | Biometric login | Onramps, predictions, multichain support, and virtual card |
| **Solflare** | Advanced Solana users | Web and mobile | Biometric login | Onramps, staking, and virtual card |
| **Backpack** | Advanced users, developers, and multichain users | Web and mobile | Biometric login | Multichain support, card purchases, and access to Backpack Exchange with identity verification |

<figure class="article-figure">
  <img src="{{ '/assets/images/solana-guide/solflare-wallet-browser-extension.png' | relative_url }}" alt="Solflare Wallet browser extension interface" width="1717" height="948" loading="lazy" decoding="async">
  <figcaption>Solflare Wallet browser extension</figcaption>
</figure>

These wallets are called **hot wallets** because they are connected to the internet. That makes them convenient, but it creates risk if your phone or computer is compromised. A **cold wallet**, also known as a hardware wallet, keeps its private keys offline and can complement a hot wallet.

<aside class="solana-guide-callout solana-guide-callout--neutral" aria-label="Custodial and non-custodial wallets" markdown="1">

### Custodial vs. non-custodial wallets

The wallets compared above are non-custodial. You control the wallet, so no company can reset your recovery phrase or restore lost funds. They can generally be created without an identity check.

Custodial wallets are provided by exchanges such as Coinbase and Binance. The exchange manages the private keys and requires identity verification. This can simplify account recovery, but you depend on the exchange’s security and solvency.

</aside>

## How to create and secure a Solana wallet {#create-and-secure-wallet}

The exact interface differs by wallet, but the setup process is similar. I’ll use Jupiter Wallet as an example:

1. Visit the wallet’s official website. Choose the browser extension or mobile app that fits how you plan to transact.
2. Install it, then select **Create a new wallet**.
3. Write the recovery phrase on paper and store it securely. Do not take a screenshot or paste it into a computer file. Jupiter also offers a Google-based recovery option for one wallet; understand its limitations before choosing it.
4. Use a strong password and enable biometrics, auto-lock, and other available security features.
5. Copy your public address and label it clearly. You will use it when sending funds from an exchange or another wallet.

<figure class="article-figure article-figure--compact">
  <img src="{{ '/assets/images/solana-guide/jupiter-wallet-create-account.png' | relative_url }}" alt="Jupiter Wallet create-account screen" width="773" height="942" loading="lazy" decoding="async">
  <figcaption>Create a new wallet in Jupiter</figcaption>
</figure>

<figure class="article-figure article-figure--compact">
  <img src="{{ '/assets/images/solana-guide/jupiter-wallet-recovery-options.png' | relative_url }}" alt="Jupiter Wallet recovery options including recovery phrase" width="783" height="638" loading="lazy" decoding="async">
  <figcaption>Choose and secure your recovery method</figcaption>
</figure>

Your public address is similar to a bank account number: you share it to receive funds. Your recovery phrase gives full control over the wallet. If you lose your device or reinstall the app, you can use it to restore access. Anyone else who obtains it can also take your assets.

<aside class="solana-guide-callout solana-guide-callout--warning" aria-label="Wallet security tips" markdown="1">

### Five tips to improve wallet security

- **Use a hardware wallet for meaningful balances.** Devices such as Ledger or Trezor generate and hold private keys offline. Transactions require confirmation on the physical device.
- **Connect the hardware wallet without importing its phrase.** In the hot wallet’s settings, choose the hardware-wallet option. Never type the hardware wallet’s recovery phrase into a browser extension or mobile wallet.
- **Remember that hardware wallets cannot prevent every phishing attack.** A convincing fake site may ask you to reveal a phrase or approve a malicious transaction.
- **Never type or share your recovery phrase online.** Legitimate support representatives will not ask for it.
- **Treat unsolicited help as suspicious.** Fake support accounts often send links through Discord or social media. Use a separate burner wallet with a small balance when testing unfamiliar apps.

**Extra tip:** Delivery-company or retailer data can be breached. Consider collecting a hardware wallet from a secure pickup location rather than disclosing your home address unnecessarily.

</aside>

## How to fund a Solana wallet {#fund-a-wallet}

You can buy SOL inside many wallets, transfer it from a centralized exchange, or bridge supported assets from another blockchain. Each method has trade-offs.

### Method 1: Buy SOL within the wallet

The four wallets above include a crypto onramp that lets you buy SOL with a card or, depending on location, Apple Pay or Google Pay. Jupiter Wallet also lists PayPal, SEPA, and instant bank transfers in supported regions.

Here’s the general process in Jupiter:

1. Open Jupiter Wallet and select **Buy** on the web, or **Deposit** in the mobile app.
2. Find **Buy crypto with local currencies** on the web or **Buy with card** on mobile.
3. Select your currency, amount, and payment method.
4. Complete any identity check required by the onramp provider. Compare available quotes before buying because fees and exchange rates differ.
5. Confirm the amount and select **Buy SOL**, then follow the provider’s steps.

<figure class="article-figure article-figure--compact">
  <img src="{{ '/assets/images/solana-guide/jupiter-wallet-actions.png' | relative_url }}" alt="Jupiter Wallet actions including buy, send, receive, and swap" width="692" height="357" loading="lazy" decoding="async">
  <figcaption>Start from the Buy or Deposit action</figcaption>
</figure>

<figure class="article-figure">
  <img src="{{ '/assets/images/solana-guide/jupiter-wallet-deposit-options.png' | relative_url }}" alt="Deposit options available in Jupiter Wallet" width="1621" height="756" loading="lazy" decoding="async">
  <figcaption>Jupiter Wallet deposit options</figcaption>
</figure>

<figure class="article-figure article-figure--compact">
  <img src="{{ '/assets/images/solana-guide/jupiter-wallet-onramp-comparison.png' | relative_url }}" alt="Comparison of SOL purchase quotes from wallet onramp providers" width="688" height="946" loading="lazy" decoding="async">
  <figcaption>Compare onramp providers before buying SOL</figcaption>
</figure>

<div class="solana-guide-columns">
  <div class="solana-guide-panel solana-guide-panel--pros">
    <h3>Pros</h3>
    <ul>
      <li>Funds can arrive within minutes</li>
      <li>Seamless wallet-based process</li>
    </ul>
  </div>

  <div class="solana-guide-panel solana-guide-panel--cons">
    <h3>Cons</h3>
    <ul>
      <li>Usually requires identity verification the first time</li>
      <li>Fees can reach about 5%, depending on the provider</li>
    </ul>
  </div>
</div>

### Method 2: Withdraw SOL from an exchange

If you already hold SOL on an exchange such as Coinbase or Binance:

1. Select **Receive** in your Solana wallet.
2. Copy the wallet address shown.
3. Sign in to the exchange and select **Withdraw**.
4. Choose **SOL** and the **Solana network**. This step is critical.
5. Paste your wallet address, enter the amount, and review the transfer.

Funds often arrive within seconds, although exchange processing or network conditions can cause delays. Test the route with a small amount before sending the rest.

<figure class="article-figure article-figure--compact">
  <img src="{{ '/assets/images/solana-guide/binance-sol-withdrawal.png' | relative_url }}" alt="Binance SOL withdrawal screen with the Solana network selected" width="1020" height="933" loading="lazy" decoding="async">
  <figcaption>Withdrawing SOL through the Solana network</figcaption>
</figure>


 <div class="solana-guide-columns">
  <div class="solana-guide-panel solana-guide-panel--pros">
    <h3>Pros</h3>
    <ul>
      <li>Funds can arrive within seconds after exchange processing</li>
      <li>Usually low transfer cost</li>
    </ul>
  </div>

  <div class="solana-guide-panel solana-guide-panel--cons">
    <h3>Cons</h3>
    <ul>
      <li>Opening an exchange account usually requires identity verification</li>
      <li>Timing and availability depend on the exchange</li>
    </ul>
  </div>
</div>
### Method 3: Bridge from another blockchain

Leading wallets now include built-in bridges that can transfer supported assets from networks such as Ethereum to Solana.

1. Open Jupiter Wallet and select **Receive**.
2. Select the source network from the dropdown list. Supported networks vary by wallet.
3. Copy the address displayed for that network.
4. Use it as the recipient address in the source wallet or exchange. Check which assets the receiving wallet supports; Jupiter, for example, may require USDC for a particular route.

<figure class="article-figure article-figure--compact">
  <img src="{{ '/assets/images/solana-guide/jupiter-wallet-network-selector.png' | relative_url }}" alt="Network selector for receiving funds in Jupiter Wallet" width="252" height="443" loading="lazy" decoding="async">
  <figcaption>Select the correct source network</figcaption>
</figure>

For assets that are not supported by your wallet’s integrated bridge, a service such as [Portal Bridge](https://portalbridge.com/) may offer a route. The asset received may be a wrapped version, which can have different risks and liquidity from the original asset.

<div class="solana-guide-columns">
  <div class="solana-guide-panel solana-guide-panel--pros">
    <h3>Pros</h3>
    <ul>
      <li>Moves assets you already own on another blockchain</li>
      <li>Can be cheaper than selling and rebuying</li>
    </ul>
  </div>

  <div class="solana-guide-panel solana-guide-panel--cons">
    <h3>Cons</h3>
    <ul>
      <li>Routes and supported assets may be limited</li>
      <li>Bridge and wrapped-asset risks make this less beginner-friendly</li>
    </ul>
  </div>
</div>
## How to send and receive crypto on Solana {#send-and-receive}

To receive crypto, open your wallet, select **Receive**, and copy your public address. Send that address to the person paying you.

To send funds:

1. Open your wallet and select **Send**.
2. Paste the recipient’s address.
3. Select the token and enter the amount.
4. Review the address, asset, amount, and fee, then approve the transaction.

<figure class="article-figure article-figure--compact">
  <img src="{{ '/assets/images/solana-guide/jupiter-wallet-receive.png' | relative_url }}" alt="Receive-funds screen in Jupiter Wallet showing a public Solana address" width="696" height="333" loading="lazy" decoding="async">
  <figcaption>Copy your public address to receive funds</figcaption>
</figure>

Confirmed blockchain transactions are irreversible. Test a new address with a small transfer before sending a large amount.

## How to buy and swap Solana tokens safely {#buy-and-swap-tokens}

<p class="solana-guide-skill"><span>Skill level</span><strong>Beginner</strong></p>

Swapping Solana tokens is fast and straightforward. You can do it directly in your wallet or through a decentralized exchange such as Jupiter:

1. Open your wallet and select **Swap**.
2. Choose the token you want to spend and the token you want to receive.
3. Enter the amount. The app will show an estimated output based on the current quote.
4. Review the minimum received, price impact, fees, and transaction details, then confirm.

<figure class="article-figure article-figure--compact">
  <img src="{{ '/assets/images/solana-guide/jupiter-wallet-swap.png' | relative_url }}" alt="Swap interface in Jupiter Wallet" width="693" height="373" loading="lazy" decoding="async">
  <figcaption>Token swap in Jupiter Wallet</figcaption>
</figure>

Some wallets charge a higher interface fee than others. Compare the wallet quote with [Jupiter Swap](https://jup.ag/) and use the route that gives you the clearest terms and best output.

<aside class="solana-guide-callout solana-guide-callout--warning" aria-label="Verify a Solana token" markdown="1">

### How to verify a Solana token before buying it

Anyone can create a Solana token using the same name and logo as an existing asset. If you search by name alone, several tokens may appear identical.

Find the original token’s **mint address**, commonly shortened to **CA** by crypto traders, through the project’s verified official channel or a reputable data provider. Paste that address into the swap interface and confirm it matches before buying.

Popular Solana wallets filter many suspicious tokens, but these filters are not perfect. You should still verify the mint address when buying a newly launched or less-established token, particularly when trading a large amount.

</aside>

<figure class="article-figure article-figure--compact">
  <img src="{{ '/assets/images/solana-guide/jupiter-token-swap-details.png' | relative_url }}" alt="Jupiter token swap details showing amounts and transaction information" width="778" height="790" loading="lazy" decoding="async">
  <figcaption>Review the complete quote before confirming a swap</figcaption>
</figure>

## How tokenized stocks work on Solana {#tokenized-stocks}

<p class="solana-guide-skill"><span>Skill level</span><strong>Beginner</strong></p>

Tokenized stocks are onchain assets designed to track traditional shares, often on a 1:1 basis with assets held by a custodian. The legal structure varies by issuer, and the tokens may not include voting rights or the same protections as shares held in a conventional brokerage account.

The main appeal is that tokenized assets can settle quickly and may trade outside traditional market hours. They can also give eligible users in some countries access to assets that would otherwise be difficult to buy. Some tokenized stocks can be used as collateral or supplied to DeFi markets, but this adds protocol and liquidation risks on top of the issuer risk.

Before buying, identify what backs the token, who issued it, what ownership rights it provides, how dividends are handled, whether redemption is available, and whether the product is legally available in your country.

<aside class="solana-guide-callout solana-guide-callout--neutral" aria-label="Tokenized stock issuers" markdown="1">

### The issuer matters

Tokenized-stock issuers on Solana include xStocks, Ondo, Backpack, PreStocks, and Securitize. Tokens tracking the same company can have different tickers and ownership rights.

For example, [xStocks describes](https://docs.xstocks.fi/docs/frequently-asked-questions) its product as a tracker certificate that provides exposure to an underlying asset, with distributions such as dividends reflected according to its product terms. Backpack describes eligible stock holdings as security entitlements under New York UCC Article 8. Read the current issuer documents rather than assuming that two similarly named tokens are equivalent.

</aside>

### How to buy tokenized stocks on Solana

Buying an eligible tokenized stock through Jupiter resembles any other token swap:

1. Visit [Jupiter Swap](https://jup.ag/).
2. Select the asset you want to spend.
3. Open the **Stocks** tab and choose the tokenized stock.
4. Enter the amount and select **Swap**.
5. Review the issuer, mint address, quote, and wallet request, then confirm.
6. The token will appear in your wallet after settlement.

<figure class="article-figure article-figure--compact">
  <img src="{{ '/assets/images/solana-guide/jupiter-tokenized-stock-swap.png' | relative_url }}" alt="Tokenized stock swap interface on Jupiter" width="735" height="637" loading="lazy" decoding="async">
  <figcaption>Buying a tokenized stock through Jupiter</figcaption>
</figure>

<figure class="article-figure article-figure--compact">
  <img src="{{ '/assets/images/solana-guide/solana-tokenized-stocks-list.png' | relative_url }}" alt="List of tokenized stocks available on Solana" width="620" height="992" loading="lazy" decoding="async">
  <figcaption>Multiple issuers may offer tokens linked to the same company</figcaption>
</figure>

To sell, reverse the swap. If multiple tokens track the same company, check the issuer and mint address rather than selecting only by company name.

## How to stake SOL {#stake-sol}

<p class="solana-guide-skill"><span>Skill level</span><strong>Beginner</strong></p>

Staking SOL means delegating your coins to a validator that helps operate the network. Validators earn SOL through inflation, priority fees, and MEV rewards. Part of that revenue is distributed to stakers.

Validators must vote correctly and remain online consistently to earn rewards, so validator performance and commission matter.

1. Open a Solana wallet that supports staking, such as Phantom, Backpack, or Solflare.
2. Select SOL, then choose **Stake**.
3. Research and choose a validator.
4. Enter the amount and sign the transaction.

<figure class="article-figure article-figure--compact">
  <img src="{{ '/assets/images/solana-guide/solflare-wallet-staking.png' | relative_url }}" alt="SOL staking option in Solflare Wallet" width="655" height="305" loading="lazy" decoding="async">
  <figcaption>Open the staking option in your wallet</figcaption>
</figure>

<figure class="article-figure article-figure--compact">
  <img src="{{ '/assets/images/solana-guide/solflare-validator-staking.png' | relative_url }}" alt="Validator selection for native SOL staking in Solflare" width="692" height="587" loading="lazy" decoding="async">
  <figcaption>Select a validator after comparing performance and commission</figcaption>
</figure>

If your wallet does not provide native staking in its interface, you can use a validator’s verified website. Native unstaking normally completes at an epoch boundary, which can take roughly two days. Expected native-staking APY was about 5% when this guide was reviewed in September 2026; the rate changes over time.

<aside class="solana-guide-callout" aria-label="Liquid staking" markdown="1">

### Liquid staking

Liquid staking gives you a liquid staking token, or LST, in exchange for staked SOL. The underlying SOL continues earning staking rewards, while the LST can be transferred, swapped, or used in compatible DeFi applications.

The staking return is reflected in the LST’s exchange rate rather than by adding more tokens to your wallet. For example, an LST initially worth 1 SOL might later be redeemable for 1.20 SOL after rewards accrue.

You can swap SOL for an LST such as JupSOL, hSOL, JitoSOL, or mSOL through a verified swap interface. Unlike native staking, you can usually exit immediately by swapping the LST, although price impact and available liquidity still matter.

</aside>

<figure class="article-figure article-figure--compact">
  <img src="{{ '/assets/images/solana-guide/sol-to-jupsol-swap.png' | relative_url }}" alt="Swap from SOL to JupSOL liquid staking token" width="671" height="647" loading="lazy" decoding="async">
  <figcaption>SOL-to-JupSOL liquid staking swap</figcaption>
</figure>

### Risks of Solana staking

The main economic risk is a decline in SOL’s market value. A 5% staking return cannot offset a much larger price drop. Native staking also temporarily reduces liquidity while you wait for unstaking.

Liquid staking adds smart-contract, issuer, and market-liquidity risks. Solana’s stake-pool program has [multiple security audits](https://www.solana-program.com/docs/stake-pool#security-audits), but no audit eliminates risk.

## How Solana lending and borrowing work {#lending-and-borrowing}

<p class="solana-guide-skill"><span>Skill level</span><strong>Beginner to advanced</strong></p>

Solana lending protocols let users supply assets to a shared market and earn variable interest from borrowers. Borrowers deposit other assets as collateral. If that collateral falls below the protocol’s required value, the position can be liquidated to repay the debt.

These services are part of decentralized finance, or DeFi. Markets operate around the clock and rates respond to supply and demand, but users take on smart-contract, market, and liquidation risks that do not exist in the same form in a bank account.

<aside class="solana-guide-callout solana-guide-callout--neutral" aria-label="Useful DeFi terms" markdown="1">

### Useful DeFi terms

**Collateral:** Assets deposited to support a loan.

**Loan-to-value ratio (LTV):** Debt divided by the current value of your collateral.

**Liquidation threshold:** The point at which the protocol can sell collateral to repay debt.

**Health factor:** An indicator of how close a position is to liquidation.

Suppose you deposit $1,000 in collateral and borrow $400. Your LTV is 40%. If the collateral falls to $600 while the debt remains $400, the LTV rises to about 66.7% and the position may approach liquidation, depending on the asset and protocol.

</aside>

Kamino and Jupiter were the two largest Solana lending protocols when this guide was reviewed, each with more than $1 billion in total value locked according to [DefiLlama](https://defillama.com/protocols/lending/solana). These rankings and balances can change.

### How to lend on Jupiter

1. Visit [Jupiter Lend](https://jup.ag/lend/earn).
2. Connect your wallet and approve the connection.
3. Choose the asset you want to deposit, such as USDC.
4. Review and approve the transaction.
5. Your deposit earns a variable APY based on market conditions.
6. When you want to exit, choose **Withdraw** and confirm the amount.

<figure class="article-figure">
  <img src="{{ '/assets/images/solana-guide/jupiter-lend-overview.png' | relative_url }}" alt="Jupiter Lend overview showing available lending markets" width="2048" height="747" loading="lazy" decoding="async">
  <figcaption>Jupiter Lend markets</figcaption>
</figure>

### How to borrow on Jupiter

1. Visit the [Jupiter Lend borrow page](https://jup.ag/lend/borrow).
2. Connect your wallet.
3. Choose the collateral asset and the asset you want to borrow.
4. Deposit your collateral.
5. Borrow conservatively and monitor the LTV and health factor.

<figure class="article-figure">
  <img src="{{ '/assets/images/solana-guide/jupiter-lend-borrow-markets.png' | relative_url }}" alt="Jupiter Lend borrowing markets and collateral choices" width="2048" height="714" loading="lazy" decoding="async">
  <figcaption>Compare collateral and borrowing markets</figcaption>
</figure>

<figure class="article-figure article-figure--compact">
  <img src="{{ '/assets/images/solana-guide/jupiter-lend-collateral-deposit.png' | relative_url }}" alt="Collateral deposit screen for a Jupiter Lend borrowing position" width="877" height="815" loading="lazy" decoding="async">
  <figcaption>Review collateral, LTV, and liquidation information before depositing</figcaption>
</figure>

<aside class="solana-guide-callout solana-guide-callout--warning" aria-label="Advanced peer-to-peer loans" markdown="1">

### Advanced option: Jupiter Offerbook

Large pooled protocols usually accept stablecoins and major assets as collateral. [Jupiter Offerbook](https://offerbook.jup.ag/borrow) can create fixed-term, peer-to-peer loan offers using a wider range of Solana tokens.

You choose the collateral, requested USDC amount, LTV, rate, and term. These loans can be short and risky because less-established tokens may fall quickly or have limited liquidity. Beginners should avoid this product until they understand liquidation, pricing, and counterparty mechanics.

</aside>

### Risks of borrowing and lending

Borrowers can be liquidated if collateral prices fall. Lenders face protocol, smart-contract, oracle, depeg, and withdrawal-liquidity risks. Depositing an asset into a DeFi protocol means relying on its code and security controls.

Security incidents can also begin offchain. In April 2026, attackers stole more than $285 million from Drift-related users through a social-engineering campaign. The lesson is broader than one platform: verify links and requests, protect signing devices, and limit the amount exposed to any single application.

## How to trade perpetual futures on Solana {#perpetual-futures}

<p class="solana-guide-skill"><span>Skill level</span><strong>Advanced to expert</strong></p>

Perpetual futures, or perps, are derivative contracts that let traders speculate on an asset’s price without owning it. They have no expiry date and support long positions, short positions, and leverage.

Leverage magnifies both gains and losses. If you open a $1,000 BTC position with 20× leverage at $80,000 per BTC, you control $20,000 of exposure, equivalent to 0.25 BTC. A move to $83,000 creates a $750 gain before fees; a move to $77,000 creates a $750 loss before fees. By contrast, buying $1,000 of BTC on the spot market gives you 0.0125 BTC, so the same price move changes the position by only $37.50.

| $1,000 position at $80,000 per BTC | Spot: 0.0125 BTC | Perps: 0.25 BTC at 20× |
|---|---:|---:|
| Price rises to $83,000 | +$37.50 | +$750 before fees |
| Price falls to $77,000 | −$37.50 | −$750 before fees |

Perpetual futures also incur trading and funding fees. Liquidation can occur before the entire theoretical loss is reached.

Popular interfaces available to Solana users include [Jupiter Perps](https://jup.ag/perps/long/SOL-SOL), [Backpack Exchange](https://backpack.exchange/), [Phoenix](https://www.phoenix.trade/), [Phantom Perps](https://trade.phantom.com/perps/BTC), and [Axiom](https://axiom.trade/). Products, leverage limits, eligibility, and infrastructure differ, so check the current terms.

<figure class="article-figure">
  <img src="{{ '/assets/images/solana-guide/backpack-perpetual-futures.png' | relative_url }}" alt="Perpetual futures trading interface on Backpack Exchange" width="2048" height="979" loading="lazy" decoding="async">
  <figcaption>Perpetual futures interface on Backpack Exchange</figcaption>
</figure>

### Perpetual futures risks

The principal risk is leverage. A relatively small adverse move can liquidate a highly leveraged position. Funding and trading fees can also erode returns, especially when a trade remains open for a long time.

Platform and custody risks matter too. If you trade despite these risks, do not leave more money on a platform than you need, and understand exactly where your collateral is held.

## How Solana prediction markets work {#prediction-markets}

<p class="solana-guide-skill"><span>Skill level</span><strong>Beginner to advanced</strong></p>

Prediction markets let users trade event outcomes. A typical market asks a binary question and offers **Yes** and **No** contracts priced between $0.01 and $0.99. The price roughly reflects the market’s implied probability.

If a Yes contract costs $0.80, the market implies roughly an 80% chance of Yes. A winning contract pays $1 at settlement, so the potential profit is $0.20 per contract before fees. A losing contract expires worthless. Some markets let you sell before settlement if there is enough liquidity.

Here is the general process using [Jupiter Prediction](https://jup.ag/prediction) as an example:

1. Open the verified prediction-market website.
2. Connect your wallet and approve the connection.
3. Choose a market, such as a sports, politics, or crypto-price event.
4. Read the question, deadline, resolution source, and edge cases.
5. Enter the USDC amount and select Yes or No.
6. Review and confirm the transaction.
7. Sell before resolution if the platform allows it and liquidity is available, or wait for settlement.
8. Claim the payout if your contracts win.

<figure class="article-figure">
  <img src="{{ '/assets/images/solana-guide/jupiter-prediction-market.png' | relative_url }}" alt="Jupiter prediction market showing event outcomes and contract prices" width="1916" height="1166" loading="lazy" decoding="async">
  <figcaption>Read the complete market rules before choosing an outcome</figcaption>
</figure>

Prediction-market interfaces accessible to Solana users include Jupiter, [Kalshi](https://kalshi.com/), Phantom, [World](http://world.xyz), [Pascal](https://app.pascal.trade/), and Axiom. Availability and regulation vary by jurisdiction.

### Prediction-market risks

A losing contract can expire worthless. Other risks include low liquidity, fees, settlement delays, ambiguous wording, source disputes, and regulatory restrictions.

You can predict the real-world outcome correctly yet lose under the market’s written rules if the event occurs outside the specified timeframe or is confirmed by a different source. Read the exact settlement criteria before entering a position.

## Games, NFTs, collectibles, and gacha {#games-nfts-and-gacha}

Solana hosts Web3 games, NFT collections, and tokenized real-world collectibles such as Pokémon cards.

### Web3 games on Solana

The central promise of Web3 games is asset ownership. A spaceship, character, weapon, or cosmetic item can be represented by a token in your wallet and, if the game and marketplace support it, sold to another player.

Many early games emphasized earning tokens more than enjoyable gameplay. Token inflation and weak demand made those economies difficult to sustain, while conventional games continued competing for players’ time.

<figure class="article-figure">
  <img src="{{ '/assets/images/solana-guide/star-atlas-game.png' | relative_url }}" alt="Star Atlas space game scene" width="2048" height="998" loading="lazy" decoding="async">
  <figcaption>Star Atlas</figcaption>
</figure>

Long-running Solana gaming projects include:

- **[Stepn](https://www.stepn.com/):** A move-to-earn app built around digital shoes and activity rewards.
- **[Aurory](https://aurory.io/):** A creature-collecting game in which players explore maps, battle, and hatch creatures.
- **[Star Atlas](https://staratlas.com/):** A space MMO project with browser-based strategy and Unreal Engine gameplay.
- **Seeker games:** Games distributed through Solana’s mobile dApp store; not all are play-to-earn.

<aside class="solana-guide-callout solana-guide-callout--neutral" aria-label="Browser and downloadable games" markdown="1">

### Browser games vs. downloadable games

Browser games usually ask you to connect a wallet to use onchain assets. Desktop games installed through services such as Epic Games or Steam may use an email login and let you add a wallet later in the settings.

Only connect a wallet through an official game website or client. A separate wallet containing only the assets needed for the game can limit exposure.

</aside>

### NFTs and collectibles on Solana

Cryptocurrencies are fungible: one unit of a token is interchangeable with another unit of the same token. Non-fungible tokens, or NFTs, are individually identifiable. NFTs can represent digital art, game items, tickets, credentials, or claims on physical collectibles.

Each NFT has a unique mint address and metadata describing its properties. The metadata can include a link to an image stored outside the Solana blockchain. Ownership and transaction history can be verified onchain.

You can send an NFT through a compatible wallet, just as you send a token. Trading normally occurs through an NFT marketplace such as [Tensor](https://www.tensor.trade/).

<figure class="article-figure">
  <img src="{{ '/assets/images/solana-guide/tensor-nft-marketplace.png' | relative_url }}" alt="Tensor NFT marketplace on Solana" width="2048" height="884" loading="lazy" decoding="async">
  <figcaption>Tensor NFT marketplace</figcaption>
</figure>

<aside class="solana-guide-callout" aria-label="Compressed NFTs" markdown="1">

### Compressed NFTs

Many Solana NFTs are compressed NFTs, or cNFTs. They reduce minting cost by storing compact proofs in a Merkle tree while anchoring its root onchain.

At the approximate costs used in this article, minting 10,000 traditional NFTs could require about 30 SOL, compared with roughly 0.1 SOL for 10,000 cNFTs. Actual costs change with account design and network conditions.

</aside>

NFT art collections were particularly popular in 2021 and 2022. Creator royalties and sales helped some teams fund products, but most collections lost substantial market value. Projects still building include Backpack, associated with Mad Lads, and Claynosaurz.

<figure class="article-figure">
  <img src="{{ '/assets/images/solana-guide/claynosaurz-nft-collection.png' | relative_url }}" alt="Claynosaurz NFT collection listed on Tensor" width="1857" height="702" loading="lazy" decoding="async">
  <figcaption>Claynosaurz NFT collection on Tensor</figcaption>
</figure>

More recently, projects such as Collector Crypt have brought physical collectibles onchain. Users buy a gacha pack without knowing which card they will receive, then hold the tokenized card, list it, sell it back at a discount, or request physical delivery when supported.

For my [Collector Crypt review]({{ '/articles/collector-crypt-gacha-review/' | relative_url }}), I opened nine $25 packs and immediately sold the cards back. I spent $225 and received $203.15, a loss of about 9%. This small personal test was broadly consistent with an [onchain analysis by Bitquery](https://bitquery.io/investigations/collector-crypt-jupiter-gacha).

### Risks of games, NFTs, and gacha

Game assets and NFTs can lose most or all of their value as demand changes. A project can stop development, marketplaces can lose liquidity, and smart contracts can be exploited. A promised buyback may also be substantially below the price you paid.

Some collections can freeze stolen NFTs, but that feature does not remove wallet, marketplace, smart-contract, or resale-price risk. Treat gacha spending as entertainment rather than an expected investment return.

## How to cash out {#cash-out}

The most common way to cash out is through a centralized exchange such as Coinbase, Kraken, or Binance that supports Solana deposits and withdrawals to your bank account.

An exchange may not support every Solana token. You may need to swap an unsupported token for SOL or a supported stablecoin such as USDC before transferring it.

1. Open your exchange account and navigate to its deposit or wallet section.
2. Choose the asset and select the **Solana network**.
3. Copy the exchange’s receiving address.
4. Open your non-custodial wallet and send a small test amount to that address.
5. After it arrives, send the remainder and sell or convert the deposited asset into supported fiat currency.
6. Use the exchange’s cash-withdrawal option to transfer the funds to your bank or another supported method.

Confirm that the exchange supports the exact token and network before sending. Fees, withdrawal methods, limits, identity checks, and geographic availability vary.

<aside class="solana-guide-callout solana-guide-callout--neutral" aria-label="Virtual cards as an off-ramp" markdown="1">

### Virtual cards as an alternative off-ramp

Several Solana products offer virtual cards that convert wallet assets when you spend. KAST is a prominent provider, while Jupiter, Phantom, and Solflare also offer or advertise Visa-branded cards in supported regions.

Conversion, card, and foreign-exchange fees may apply, and card availability depends on your location. A virtual card can be useful for spending without first withdrawing to a bank, but it is not the same as converting your entire balance to cash.

</aside>

### Potential tax implications

Cashing out can trigger a taxable event, but the rules vary by jurisdiction. In many places, selling crypto for fiat, swapping one token for another, earning rewards, or spending crypto may be treated as a disposal or taxable income.

Keep records of purchase costs, rewards, swaps, fees, dates, transaction signatures, and fiat values. Consult a qualified crypto tax professional in your jurisdiction for advice tailored to your circumstances.

## Conclusion {#conclusion}

The best way to learn Solana is to choose a wallet from an official source, protect your recovery phrase, fund it with a small test amount, and try a few low-risk activities.

Once you understand the basics, you can explore staking, DeFi, games, or prediction markets—but each activity introduces different risks. Never share your recovery phrase, verify apps and token mint addresses, and read every transaction before signing.

## Frequently asked questions {#frequently-asked-questions}

### How do beginners start using Solana?

Download a wallet such as Jupiter, Phantom, Solflare, or Backpack from its official source. Store the recovery phrase offline, fund the wallet with a small amount of SOL, and make a test transaction before moving a larger balance.

### How much SOL do I need to start?

It depends on what you plan to do. Solana transaction fees are usually very small, but you should keep a small SOL balance available for network fees and any account deposits.

### Is Phantom the same as Solana?

No. Phantom is a wallet interface; Solana is the blockchain network it can connect to.

### Are Solana transactions reversible?

No. Confirmed blockchain transactions cannot normally be reversed. Double-check the network, asset, amount, and recipient address before sending.

### How long does a Solana transaction take?

Solana typically confirms transactions in under a second, although a wallet, exchange, or application may take longer to display or process the result.

### Can I use a hardware wallet with Solana?

Yes. Major hardware wallets support Solana and can connect to compatible hot-wallet interfaces. Never import the hardware wallet’s recovery phrase into a browser extension.

### What should I do if I exposed my recovery phrase?

Create a new wallet from a trusted device and transfer your assets immediately. Treat the old wallet as permanently compromised.

<aside class="financial-disclaimer" aria-labelledby="financial-disclaimer" markdown="1">

## Financial disclaimer {#financial-disclaimer}

This article is for informational and educational purposes only and does not constitute financial, investment, legal, or tax advice. Crypto assets, DeFi protocols, derivatives, prediction markets, tokenized assets, NFTs, and related products can be highly volatile and may result in the loss of some or all of your funds. Fees, yields, product features, availability, and regulations can change. Conduct your own research, verify current information with official sources, and consider consulting a qualified professional before making financial decisions.

</aside>

</div>

</div>
