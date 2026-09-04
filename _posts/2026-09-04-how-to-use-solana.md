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
description: "Learn how to use Solana safely: choose and secure a wallet, buy or transfer SOL, understand fees, swap tokens, stake, use DeFi, avoid scams, and more."
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

Once you create a wallet, you can buy or sell SOL and other tokens on the Solana blockchain. You can also send crypto to other wallets, stake your assets for passive income, or use decentralized finance (DeFi) applications for lending and borrowing, as well as trading perpetual futures. For fun, you can play Web3 games and open gacha packs featuring Pokémon and sports cards.

While the technology is easy to use, blockchain transactions are irreversible. Because of that, you must verify token addresses and double-check transaction details before confirming.

This guide takes you from choosing the right wallet for your needs to making your first transaction and exploring the Solana ecosystem. It also explains the costs, risks, and what you may be better off skipping.

## Quick start: How to use Solana in six steps {#quick-start}

Using Solana is straightforward. Here’s how to get started:

1. **Choose a Solana wallet.** Download it from the app store on mobile or install it as a browser extension. Popular Solana wallets include Jupiter, Solflare, Backpack, and Phantom.
2. **Back up your wallet.** When you create a wallet, you receive a seed phrase (12 to 24 words). Keep it safe and offline, and never share it. Never take photos of your seed phrase or store it in an online file.
3. **Add funds.** You need SOL to pay network fees, so either buy SOL directly in the wallet with a card, Apple Pay, or Google Pay, or send SOL to your wallet from an exchange.
4. **Connect only to verified applications.** For most of Solana’s use cases, such as sending and receiving funds, you don’t need to connect to applications. However, some actions, like trading perpetual futures, using Pokémon gacha machines, or lending and borrowing your funds, require you to connect your wallet to the app. Ensure the application is legit before connecting.
5. **Double-check transaction details.** Before signing any transaction in your wallet, verify that the amount and wallet address are accurate.
6. **Choose what to do next.** You can hold coins and tokens, stake, lend and borrow, play games, trade futures, and more.

**Note:** Keep a small amount of SOL in your wallet to pay fees. Also, never send the full amount to another wallet or app before testing it with a smaller amount first.

## What is Solana? {#what-is-solana}

Solana is a decentralized blockchain network that processes transactions and runs apps without relying on a single company to maintain the blockchain ledger. Solana’s main selling point is fast transactions that settle in under a second and cost less than $0.01 per transaction. This means you can send money from one end of the world to another almost instantly for $0.01 per transaction, regardless of the amount transferred.

To achieve this, Solana uses a combination of Proof-of-Stake and Proof-of-History. Think of the latter as a built-in clock that keeps all validator computers on the same schedule. With each tick, a record proves that something happened and when. Because validators share this cryptographic ordering of events, Solana can typically confirm transactions in under a second.

While this has worked wonders for the Solana blockchain, over 98% of validators approved a major consensus upgrade called [Alpenglow](https://solana.com/upgrades/alpenglow). Alpenglow will replace Solana’s current Tower BFT consensus system and aims to reduce transaction finality from approximately 12.8 seconds to around 100–150 milliseconds. Alpenglow is planned to enter full mainnet in late 2026.

Solana is already preparing for the future, enabling agentic payments (x402 transactions) and processing over $11 million in August 2026, [according to Solana's Head of Product Marketing](https://x.com/yo_itsmatt/status/2095105021574807589?s=20).

<figure class="article-figure">
  <img src="{{ '/assets/images/solana-guide/solana-guide-hero.png' | relative_url }}" alt="Solana website" width="2048" height="747" loading="lazy" decoding="async">
  <figcaption>Solana</figcaption>
</figure>

Solana’s native coin is SOL, which is used to pay transaction fees and participate in staking. Staking means delegating your SOL to validators (computers that run the validator client software) to verify transactions and add them to the ledger. Users who stake their coins earn SOL rewards.

To interact with the blockchain and the applications running on it, you need a wallet. The wallet is where you store your coins and tokens. Each wallet has a private key and a public key. Your public key is visible on the ledger, meaning anyone can see the assets you hold, and works as your receiving address. Your private key gives you control of your assets and lets you approve, or sign, transactions.

Because the Solana blockchain ledger is public, everyone can see the transactions using a block explorer tool like [Solscan](https://solscan.io/) or [Orb](https://orbmarkets.io/).

<figure class="article-figure article-figure--portrait">
  <img src="{{ '/assets/images/solana-guide/jupiter-wallet-app.png' | relative_url }}" alt="Jupiter Wallet app showing Solana assets" width="708" height="1243" loading="lazy" decoding="async">
  <figcaption>Jupiter Wallet app</figcaption>
</figure>

Accounts are the main data unit on Solana. They're like digital filing cabinets. Wallets are one type of cabinet. They hold your assets and act as your ID on the blockchain. Token accounts are another type, linked to your wallet if you hold the token. The last type is data accounts owned by applications.

I’m mentioning token accounts because whenever you buy a new token you didn’t have before, for example BONK, JUP, or BP, you will notice that aside from the SOL you pay for transaction costs, there will be another amount of SOL you pay.

This is the rent fee for the token account, which is a refundable storage deposit. Once you sell the token, you can close the rent account and get your SOL back. You can close your rent account in some wallets, like the Jupiter wallet, or by visiting dedicated sites like [Sol Incinerator](https://sol-incinerator.com/).

Previously, the rent account required ~0.00204 SOL to open. With the September 2026 [validator software update](https://x.com/solana_devs/status/2083202768530223120?s=20), the rent deposit amount drops by 90%, from around $0.16 to less than $0.02.

<aside class="solana-guide-callout" aria-label="How the process of using Solana goes" markdown="1">

### Here’s how the process of using Solana goes:

1. Connect your wallet to a DeFi app or open your wallet to perform an action, such as sending funds to another wallet or app.
2. The wallet or app prepares the transaction.
3. Your wallet displays the request, including the amount sent or deducted (for example, -10 SOL you send to another wallet, -$0.008 network fee) and the recipient’s public address.
4. If everything looks good, you sign the transaction by pressing the send button.
5. The Solana blockchain processes the transaction.
6. The transaction results appear in your wallet and the block explorer.

</aside>

## What can you do on Solana? {#what-can-you-do}

Because of its speed and low transaction costs, Solana is becoming a strong financial and banking tool for its users. Here’s what you can do on Solana:

- **Transfer funds.** Send and receive stablecoins and other tokens and coins between wallets. Many crypto-native companies pay their employees in crypto.
- **Borrow or lend assets.** DeFi applications like Jupiter and Kamino let users put crypto, such as SOL, as collateral and borrow USDC against it. Users can also deposit USDC to earn passive yield.
- **Trade.** Solana platforms like Jupiter, Backpack, and Phantom offer leveraged perpetual futures and tokenized stock trading. Tokenized stocks can be traded 24/7, a feature not available on traditional stock trading platforms.
- **Play blockchain games.** Although Web3 games didn’t take off during previous cycles, some continue to build and improve their products, enabling players to earn rewards for their time played.
- **NFTs and tokenized cards.** Tokenized Pokémon and sports cards are among the most popular products on Solana today, with [Collector Crypt celebrating](https://x.com/Collector_Crypt/status/2091958031017726050) crossing $1 billion in gross revenue in August 2026, a year after its launch. Users can open gacha packs with Pokémon cards, hold them, trade on the secondary marketplace, or sell them instantly at a lower price.
- **Make payments with virtual cards.** Multiple projects on Solana offer virtual Visa cards you can load on your phone and use for real-world purchases. This is an excellent off-ramp tool that bypasses traditional bank transfers and other token-selling loops. Wallets like Jupiter, Phantom, and Solflare offer such cards, which use funds directly from the wallet.

While these activities use the same network and wallet, each has different costs and risks.

For example, trading perpetual futures incurs additional fees for borrowing funds from the platform to trade on leverage; gacha platforms advertise positive EV and buybacks of up to 85% of the opened card's value right away, but that’s not always the case, as it depends on the card you pull.

| If you want to | Main risk to understand |
|---|---|
| Send or receive money | Wrong address or asset |
| Exchange one asset for another | Fake tokens, slippage, and price impact |
| Earn staking rewards | SOL price and validator risk |
| Earn lending interest | Protocol depeg and liquidity risk |
| Borrow against crypto | Liquidation and variable interest |
| Trade with leverage | Rapid liquidation and margin fees |
| Trade event outcomes | Settlement rules |
| Access tokenized stocks and assets | Issuer and legal-rights risk |
| Play games or collect NFTs and tokenized cards | Spending, custody, and resale price risk |

## How to choose a Solana wallet {#choose-a-wallet}

For holding assets and connecting to Solana applications, the top wallets are virtually identical. You can choose [Jupiter](https://jup.ag/wallet), [Solflare](https://www.solflare.com/download/), [Phantom](https://phantom.com/download), or [Backpack](https://backpack.app/), and there would be minimal differences for typical daily use.

However, users who want to make the most of their wallets should choose the one that best fits their needs.

| Wallet | Best suited for | Platforms | Useful safety features | Extra features |
|---|---|---|---|---|
| Jupiter | Active traders and users who want to take advantage of Jupiter’s vast product suite | Web and mobile | Biometric login | Low fees<br>Buy crypto with Apple/Google Pay, Card, PayPal, SEPA, Instant Bank Transfer<br>Reclaim rent account SOL<br>Limit orders and stop-loss<br>Perpetual futures<br>Predictions<br>Earn passive yield on assets<br>Virtual card |
| Phantom | Beginners | Web and mobile | Biometric login | Prediction<br>Buy crypto with Apple/Google Pay<br>Virtual card<br>Multi-chain |
| Solflare | Advanced users | Web and mobile | Biometric login | Buy crypto with Apple/Google Pay and card<br>Virtual card |
| Backpack | Advanced users and developers who want access to multiple blockchains | Web and mobile | Biometric login | Multichain<br>Buy crypto with card<br>Access Backpack exchange via the same mobile app, but it requires providing ID documents |

<figure class="article-figure">
  <img src="{{ '/assets/images/solana-guide/solflare-wallet-browser-extension.png' | relative_url }}" alt="Solflare Wallet browser extension" width="1717" height="948" loading="lazy" decoding="async">
</figure>

All of these wallets offer both web and mobile versions. The web versions are browser extensions that enable seamless connections to Solana application websites.

Keep in mind that all of these wallets are called “Hot” wallets because they are constantly connected to the internet. This comes with risks if your computer or phone is compromised. If hackers and scammers gain access to your computer, they can drain your wallets.

“Cold” wallets, also known as hardware wallets, complement hot wallets and provide added security.

<aside class="solana-guide-callout solana-guide-callout--neutral" aria-label="Custodial versus non-custodial wallets" markdown="1">

### Custodial vs non-custodial wallets

The wallets we compared are non-custodial. This means you are the owner of the wallet, and if something goes wrong, such as a hack or losing your private key, it’s on you. No one can reset your password or make you whole. Also, these wallets don’t require you to pass an ID check, allowing you to have a crypto wallet pseudonymously.

Custodial wallets, on the other hand, are wallets provided by exchanges like Coinbase and Binance, which act as the “custodians” of your account. They manage your private keys and keep your funds secure. However, they require ID verification. Moreover, if the exchange goes under, you may lose all of your funds.

</aside>

## How to create and secure a Solana wallet {#create-and-secure-wallet}

Now that you’ve chosen your wallet, let’s walk through the setup process:

1. **Visit the official website for the wallet you choose.** I’ll use [Jupiter Wallet](https://jup.ag/wallet) as an example. Select the browser extension, or download the [Jupiter mobile app](https://jup.ag/mobile) if you plan to transact on your phone.
2. **Install the wallet extension,** then select “Create a new wallet.”

<figure class="article-figure article-figure--compact">
  <img src="{{ '/assets/images/solana-guide/jupiter-wallet-create-account.png' | relative_url }}" alt="Create a new wallet in Jupiter Wallet" width="773" height="942" loading="lazy" decoding="async">
</figure>

3. **Write down your seed phrase on paper and keep it secure.** Don’t take screenshots or copy it into another file on your computer. You can also create a wallet with a Gmail account, but this option is limited to one wallet. Proceed to name your wallet to indicate what it’s for.

<figure class="article-figure article-figure--compact">
  <img src="{{ '/assets/images/solana-guide/jupiter-wallet-recovery-options.png' | relative_url }}" alt="Jupiter Wallet recovery options" width="783" height="638" loading="lazy" decoding="async">
</figure>

4. **Use a strong password** and enable biometrics, auto-lock, and any other security features the wallet offers.
5. **Copy your public address and label it clearly.** You’ll need to paste it when sending funds from an exchange to your wallet.

Every wallet has a public address. This is the address you use to receive funds, similar to a bank account number in traditional banking.

A seed phrase, also known as a recovery phrase, gives you access to your wallet. It’s similar to your traditional bank account password and 2FA token. Keep your seed phrase safe and never share it with anyone. If you lose your computer or phone, or need to reinstall your wallet app, you’ll need to enter your seed phrase to unlock your wallet.

<aside class="solana-guide-callout solana-guide-callout--warning" aria-label="Five tips to boost your wallet security" markdown="1">

### 5 tips to boost your wallet security

- **Grab a hardware wallet such as Ledger or Trezor.** These USB-like devices (some resemble mini e-readers) generate the seed phrase directly on the device, keeping it offline and encrypted. Approving transactions on a hardware wallet requires a physical button press, making it difficult for hackers and scammers to drain your wallet even if your computer is compromised.
- **Connect your hardware wallet to your hot wallet,** then use the hot wallet’s interface to access Solana applications. Do not enter your hardware wallet’s seed phrase into your hot wallet. In the hot wallet’s settings, select “Add new wallet” and choose the “Hardware Wallet” option.
- **A hardware wallet alone can’t protect you from phishing scams.** These are well-crafted emails or messages (sometimes even physical letters) that direct you to a fake website for a legitimate service, such as Coinbase Exchange or Ledger. They ask you to enter your seed phrase and claim there is a hack, that your assets are compromised, or tell similar urgent stories to prompt you to act quickly.
- **Never type your seed phrase online.** If someone asks for your seed phrase, they are trying to scam you. Never give your seed phrase to anyone. Once a scammer has your seed phrase, they can drain your wallet even without access to your hardware wallet.
- **Beware of phishing and scams.** If you visit a project’s Discord or ask something on a project’s social media, you’ll get flooded with unsolicited DMs and messages from users claiming they want to help you. They always send you a link to open, which leads to a scam website. They ask you to connect your wallet and sign a transaction. DON’T DO IT. It will instantly drain your wallet. Never connect your wallet or sign transactions unless you’re 100% sure the site is legit. For extra caution, create a “burner” wallet, which is a hot wallet you use to test sites, and fund it with a small amount of SOL to cover transaction costs.

**Extra tip:** Transport companies that handle hardware wallets [have been breached before](https://www.theblock.co/news/business/2026-01-05-ledger-customers-data-leak-payment-processor-384275). To keep hackers and criminals from finding your physical address, order your device to a cargo company’s address and pick up the package yourself.

</aside>

## How to fund a Solana wallet {#fund-a-wallet}

You can often fund a Solana wallet directly within the wallet using a card or Apple Pay and Google Pay. You can also fund your wallet by transferring SOL from a crypto exchange or by bridging assets from another blockchain network, such as Ethereum. Each funding method has its own pros and cons.

### Method 1: Buy SOL within the wallet

The top four Solana wallets include a built-in crypto onramp that lets you buy SOL directly with a card or via Apple or Google Pay. Jupiter Wallet also supports PayPal, SEPA, and Instant Bank Transfers, though availability may vary by country.

Here’s how to fund your Solana wallet using Jupiter:

1. **Open your Jupiter Wallet** and select “Buy” from the four options in the Web wallet, or select “Deposit” if you’re using the Jupiter mobile app.

<figure class="article-figure article-figure--compact">
  <img src="{{ '/assets/images/solana-guide/jupiter-wallet-actions.png' | relative_url }}" alt="Jupiter Wallet actions" width="692" height="357" loading="lazy" decoding="async">
</figure>

2. **Scroll until you find** the “Buy crypto with local currencies” option if you’re using the Web wallet, or select “Buy with card” in the mobile app.

<figure class="article-figure">
  <img src="{{ '/assets/images/solana-guide/jupiter-wallet-deposit-options.png' | relative_url }}" alt="Jupiter Wallet deposit options" width="1621" height="756" loading="lazy" decoding="async">
</figure>

3. **Select the currency and amount** you want to spend on SOL, then choose your payment method.

<figure class="article-figure article-figure--compact">
  <img src="{{ '/assets/images/solana-guide/jupiter-wallet-buy-sol.png' | relative_url }}" alt="Buy SOL in Jupiter Wallet" width="777" height="1133" loading="lazy" decoding="async">
</figure>

4. **If you choose the card option,** you will need to verify your ID with the onramp provider (for example, MoonPay). This requires an ID card and a face scan taken with your phone's camera. Before you buy SOL, compare payment options and onramp providers to get the best rate.

<figure class="article-figure article-figure--compact">
  <img src="{{ '/assets/images/solana-guide/jupiter-wallet-onramp-comparison.png' | relative_url }}" alt="Jupiter Wallet onramp provider comparison" width="688" height="946" loading="lazy" decoding="async">
</figure>

5. **Confirm that all details and amounts** are correct, then select “Buy SOL”. Follow the onramp provider's steps to complete the purchase.

I’ve selected Jupiter Wallet for this example, but the process is nearly identical across all other wallets.

<div class="solana-guide-columns">
  <div class="solana-guide-panel solana-guide-panel--pros">
    <h3>Pros</h3>
    <ul>
      <li>Funds arrive within minutes</li>
      <li>Seamless process</li>
    </ul>
  </div>
  <div class="solana-guide-panel solana-guide-panel--cons">
    <h3>Cons</h3>
    <ul>
      <li>Requires ID verification the first time</li>
      <li>High fees of up to 5%, depending on the onramp provider</li>
    </ul>
  </div>
</div>

### Method 2: Withdraw SOL from an exchange

If you already hold SOL on a crypto exchange like Coinbase or Binance, here’s how to transfer it to your wallet.

1. **Select Receive** from the options list in your Jupiter wallet.
2. <figure class="article-figure article-figure--compact">
  <img src="{{ '/assets/images/solana-guide/jupiter-wallet-receive.png' | relative_url }}" alt="Receive SOL in Jupiter Wallet" width="696" height="333" loading="lazy" decoding="async">
</figure>
3. **Copy the wallet address** shown on the next screen.
4. **Log in to your crypto exchange account,** then select “Withdraw”.
5. **Select the Solana network and SOL.** This is important.
6. **Paste your wallet address** and enter the amount you want to transfer.

<figure class="article-figure article-figure--compact">
  <img src="{{ '/assets/images/solana-guide/binance-sol-withdrawal.png' | relative_url }}" alt="Withdraw SOL from Binance using the Solana network" width="1020" height="933" loading="lazy" decoding="async">
</figure>

Your funds should typically arrive within seconds unless there’s network congestion or exchange-related issues.

**Note:** You can test the transfer with a smaller amount before sending the rest, just in case.

<div class="solana-guide-columns">
  <div class="solana-guide-panel solana-guide-panel--pros">
    <h3>Pros</h3>
    <ul>
      <li>Funds arrive within seconds</li>
      <li>Low transaction costs</li>
    </ul>
  </div>
  <div class="solana-guide-panel solana-guide-panel--cons">
    <h3>Cons</h3>
    <ul>
      <li>Requires ID verification to open a crypto exchange account</li>
      <li>Your transfer depends on the exchange</li>
    </ul>
  </div>
</div>

### Method 3: Bridge from another blockchain network

In the past, bridging assets between blockchains required visiting a specialized bridge website. Today, the top Solana wallets include built-in bridges, enabling seamless transfers from other blockchains into your wallet.

Here’s how to fund your Solana wallet via its integrated bridge:

1. **Open your Jupiter wallet** and select “Receive”.
2. **Select the network** from the dropdown list. Supported networks vary by wallet.

<figure class="article-figure article-figure--compact">
  <img src="{{ '/assets/images/solana-guide/jupiter-wallet-network-selector.png' | relative_url }}" alt="Select a network in Jupiter Wallet" width="252" height="443" loading="lazy" decoding="async">
</figure>

3. **Copy the address** on the selected blockchain (say Ethereum).
4. **Use the copied address** as the recipient. You may be limited in which assets you can send. For example, the Jupiter wallet only supports USDC transfers between blockchains, so you’ll need to swap your ETH for USDC to bridge to Solana.

If you want to bridge assets that aren’t supported in your wallet, you can use [Portal Bridge](https://portalbridge.com/). The process is similar: connect your two wallets from different blockchains through the Portal Bridge website and select the amount to transfer. On the receiving end, you typically get a wrapped version of the asset (for example, WBTC if you move Bitcoin to Solana), which you can swap for SOL directly in your wallet.

<div class="solana-guide-columns">
  <div class="solana-guide-panel solana-guide-panel--pros">
    <h3>Pros</h3>
    <ul>
      <li>Moving assets from another blockchain you already own</li>
      <li>Low transaction costs</li>
    </ul>
  </div>
  <div class="solana-guide-panel solana-guide-panel--cons">
    <h3>Cons</h3>
    <ul>
      <li>There could be limitations on which assets can be transferred</li>
      <li>Not a beginner-friendly option</li>
    </ul>
  </div>
</div>

## How to send and receive crypto on Solana {#send-and-receive}

Solana’s advantage over traditional banking is its speed. You can send funds from your Solana wallet to friends and family wallets worldwide within seconds.

To receive crypto, open your wallet and select “Receive.” Copy your wallet’s public address and send it to the person paying you.

If you’re the one sending funds, ask for the recipient’s public address, then:

1. Open your wallet and select “Send.”
2. Paste the recipient’s address.
3. Select the token you want to send and enter the amount.
4. Review the transaction and approve it.

Blockchain transactions are irreversible, so ensure the funds are sent to the correct address. You can always test with a smaller amount first.

## How to buy and swap Solana tokens safely {#buy-and-swap-tokens}

<p class="solana-guide-skill"><span>Skill level required</span><strong>Beginner</strong></p>

Swapping Solana tokens is fast, cheap, and straightforward. You can do it directly in your wallet or use a swap app. Here’s the step-by-step guide:

1. **Open your wallet,** then select “Swap” from the list of actions at the top. This feature is the same across all wallets.

<figure class="article-figure article-figure--compact">
  <img src="{{ '/assets/images/solana-guide/jupiter-wallet-swap.png' | relative_url }}" alt="Swap tokens in Jupiter Wallet" width="693" height="373" loading="lazy" decoding="async">
</figure>

2. **Select the tokens you want to swap.** If a token is not in the list, start typing its name and select it from the list.

<figure class="article-figure article-figure--compact">
  <img src="{{ '/assets/images/solana-guide/jupiter-token-swap-details.png' | relative_url }}" alt="Jupiter token swap details" width="778" height="790" loading="lazy" decoding="async">
</figure>

4. **Enter the number of tokens you wish to spend.** The app will automatically show how many tokens you will receive based on the current exchange rate.
5. **Review the transaction** in the wallet pop-up and confirm it.



Some wallets may charge higher fees within their app. In that case, visit [Jupiter Swap](https://jup.ag/), connect your wallet, and repeat the process. See how many tokens you would receive for the same amount, then complete the transaction at the best rate.

<aside class="solana-guide-callout solana-guide-callout--warning" aria-label="How to verify a Solana token before buying it" markdown="1">

### How to verify a Solana token before buying it

Anyone can create a token on Solana using the same name and logo as an existing one. If you search for a token, let’s call it SCAM TOKEN, you could find several that look identical.

This common scam aims to sell investors a worthless token. To avoid this, you need to know the original token’s mint address, commonly shortened to CA by crypto traders. Copy the address into the swap, and you’ll get the right token.

Popular Solana wallets filter many suspicious tokens, but these filters are not perfect. You should still verify the mint address when buying a newly launched or less-established token, particularly when trading a large amount.

I’ve been using Solana since 2021, and this has rarely been an issue for me. However, if you’re trading newly launched meme coins, confirming the CA before buying the token is essential.

</aside>

## How tokenized stocks work on Solana {#tokenized-stocks}

<p class="solana-guide-skill"><span>Skill level required</span><strong>Beginner</strong></p>

Tokenized stocks are onchain assets that represent traditional shares, often at a 1:1 ratio, and are held by a regulated custodian. However, the legal structure varies by issuer, and they often don’t carry voting rights.

The main idea behind tokenizing real-world assets is that they settle instantly and can be traded 24/7 without an intermediary. This also gives traders worldwide access to assets they might otherwise be restricted from buying because of their country of residence.

One of the best features of tokenized stocks is that they can be used on Solana’s DeFi platforms as collateral, lent, or looped to earn passive yield. This allows a user in Argentina to buy tokenized SpaceX stock, place it as collateral on Kamino or Jupiter Offerbook, take a stablecoin loan, and buy Bitcoin, all within minutes without waiting on brokers and custodians for settlement.

But before you buy tokenized stocks, identify what backs the token, who issued it, what rights ownership entails, how dividends are handled, and whether the product is legally available.

<aside class="solana-guide-callout solana-guide-callout--neutral" aria-label="Tokenized stock issuers" markdown="1">

Several tokenized stock issuers operate on Solana, including xStocks, Ondo, Backpack, Prestocks, and Securitize.

Each of these stocks has a distinct ticker symbol on the Solana blockchain and different ownership rights. For example, when buying an [xStock tokenized stock](https://docs.xstocks.fi/docs/frequently-asked-questions), you hold a tracker certificate that provides exposure to the underlying asset. Dividends are reinvested into additional units of the same stock.

On the other hand, when buying tokenized stocks issued by Backpack, you own real US stocks and ETFs, held as "security entitlements" under New York UCC Article 8. These are not CFDs, SPV interests, structured products, synthetic derivatives, or tokenized wrappers.

</aside>

### How to buy tokenized stocks on Solana

Buying tokenized stocks on Solana is the same as buying any other token.

1. Visit [Jupiter Swap](https://jup.ag/).
2. Select the asset you want to swap for tokenized stocks.

<figure class="article-figure article-figure--compact">
  <img src="{{ '/assets/images/solana-guide/jupiter-tokenized-stock-swap.png' | relative_url }}" alt="Buy tokenized stocks with Jupiter Swap" width="735" height="637" loading="lazy" decoding="async">
</figure>

4. Select the “Stocks” tab, then choose the tokenized stock you wish to buy.

<figure class="article-figure article-figure--compact">
  <img src="{{ '/assets/images/solana-guide/solana-tokenized-stocks-list.png' | relative_url }}" alt="Tokenized stocks available on Solana" width="620" height="992" loading="lazy" decoding="async">
</figure>

4. Enter the amount you want to spend, then select “Swap.”
5. Review the transaction in the wallet pop-up, then confirm it.
6. Your tokenized stocks are now in your wallet.

To sell your tokenized stocks, repeat the process.

**Note:** You will notice multiple tokenized stocks for the same company. This is because multiple issuers have tokenized these stocks. For example, if there’s an “x” in the name, it’s issued by xStocks.

## How to stake SOL {#stake-sol}

<p class="solana-guide-skill"><span>Skill level required</span><strong>Beginner</strong></p>

Staking SOL means delegating your coins to a validator that helps operate the Solana blockchain. Validators earn SOL through inflation, priority fees from users who pay extra to have their transactions processed first, and MEV rewards when users tip validators.

The newly minted SOL is distributed among stakers, making it [a solid passive-income option]({{ '/articles/best-solana-passive-income/' | relative_url }}) for long-term holders. However, to earn rewards, validators must vote correctly on blocks and remain online consistently. That's why staking with reputable validators matters.

Here’s how to stake Solana:

1. **Open your Solana wallet.** Phantom, Backpack, and Solflare wallets make staking easy.
2. **Select SOL in your wallet,** then select “Stake”.

<figure class="article-figure article-figure--compact">
  <img src="{{ '/assets/images/solana-guide/solflare-wallet-staking.png' | relative_url }}" alt="Stake SOL in Solflare Wallet" width="655" height="305" loading="lazy" decoding="async">
</figure>

3. **Choose your validator.** These three wallets operate their own reputable validators. You can also choose other validators such as Jupiter, Jito, Marinade, and Helius, as well as Kraken and Coinbase.

4. **Enter the amount of SOL** you want to stake, then sign the transaction.

<figure class="article-figure article-figure--compact">
  <img src="{{ '/assets/images/solana-guide/solflare-validator-staking.png' | relative_url }}" alt="Choose a Solana validator in Solflare Wallet" width="692" height="587" loading="lazy" decoding="async">
</figure>

**Note:** If you use another wallet, such as Jupiter, you’ll need to visit the validator's site and connect your wallet to start staking. However, Jupiter also offers a staking method that is even more seamless than native staking.

Expected annual percentage yield (APY) for staking SOL is ~5% as of September 2026.

<aside class="solana-guide-callout" aria-label="Liquid staking" markdown="1">

### Liquid staking

Solana offers another way to stake your SOL, called liquid staking.

As the name suggests, you stake your SOL, but your coins remain liquid and can be used in various DeFi applications for lending and borrowing while still earning staking APY. These coins are known as liquid staking tokens (LSTs).

Unlike native staking, where APY accrues directly to your staked SOL, with liquid staking, the APY is reinvested in the staking pool, giving LSTs a higher value than SOL.

For example, if you start staking with LSTs valued at 1 SOL, in a few years you could sell 1 LST for 1.20 SOL because of the APY that has accrued over the years.

Now that you know how to swap Solana tokens, swap any token you want for the LST you want to hold, such as JupSOL (Jupiter’s LST), hSOL (Helius’ LST), JitoSOL (Jito’s LST), or mSOL (Marinade’s LST).

<figure class="article-figure article-figure--compact">
  <img src="{{ '/assets/images/solana-guide/sol-to-jupsol-swap.png' | relative_url }}" alt="Swap SOL for a liquid staking token in Solflare Wallet" width="671" height="647" loading="lazy" decoding="async">
  <figcaption>SOL to LST swap | Solflare wallet</figcaption>
</figure>

**Advantages of liquid staking:** There’s no unstaking period like in native staking. You can swap your LST back to SOL whenever you want. Moreover, you can use your LST as collateral in DeFi apps and borrow against it if you need instant liquidity without selling your coins.

</aside>

### Risks of Solana staking

The main risk of native staking is SOL’s value declining. If you buy SOL at $100 apiece and it drops to $80, a 5% APY won’t make up the difference.

Native staking has another downside: Solana's one-epoch (about two days) unstaking period. If you need fast liquidity, holding LSTs is usually the better option.

Liquid staking is not without risk, though. The LST’s smart contract could be exploited. Multiple [security firms have audited](https://www.solana-program.com/docs/stake-pool#security-audits) the smart contract, which is a plus, but there are no guarantees.

## How Solana lending and borrowing work {#lending-and-borrowing}

<p class="solana-guide-skill"><span>Skill level</span><strong>Beginner to advanced</strong></p>

Solana lending protocols let users supply assets to a shared market and earn interest from borrowers. Borrowers must provide assets as collateral, which pays the lending APY and protects lenders. If the collateral’s value drops below a certain threshold, the position is liquidated.

In traditional finance, your bank holds your money, institutions set rates, and geographical limits and limited hours apply. With blockchain-based financial services, those limits don't exist; you control your assets, markets operate 24/7 globally, and supply and demand set the rates.

These financial services are known as Decentralized Finance (DeFi). You can access them via the web or mobile apps and connect your wallet to start interacting.

<aside class="solana-guide-callout solana-guide-callout--neutral" aria-label="Useful DeFi terms" markdown="1">

### Useful DeFi terms

**Collateral:** Assets you deposit with a DeFi platform.

**Loan-to-value (LTV) ratio:** Debt divided by the value of your collateral. If you deposit SOL or another coin without a fixed value, your collateral value will fluctuate.

**Liquidation threshold:** The point at which the protocol sells your collateral to repay the loan.

**Health factor:** A measure of how close your account is to liquidation.

</aside>

Suppose a user deposits $1,000 in collateral and borrows $400. The LTV is 40%. If the collateral value falls to $600 while the debt remains at $400, the LTV rises to about 66.7%. Depending on the platform’s liquidation threshold for each asset, the position may be close to liquidation.

The two largest DeFi protocols on Solana, Kamino and Jupiter, each have a total value locked (TVL) of over $1 billion as of September 2026, according to [DefiLlama data](https://defillama.com/protocols/lending/solana).

Here’s how to lend and borrow on Jupiter:

1. Visit the [Jupiter Lend](https://jup.ag/lend/earn) platform.
2. Connect your wallet and approve the connection in the wallet pop-up.
3. Select the asset you wish to deposit, for example, USDC.
4. Approve the transaction.

<figure class="article-figure">
  <img src="{{ '/assets/images/solana-guide/jupiter-lend-overview.png' | relative_url }}" alt="Jupiter Lend platform" width="2048" height="747" loading="lazy" decoding="async">
</figure>

5. Your USDC is now locked on Jupiter Lend’s platform and earns a variable APY based on the current market rate.
6. Whenever you want, select the “Withdraw” option and enter the amount you wish to withdraw. Your funds will return to your wallet instantly.

If you’re looking to borrow assets against your tokens, here’s how to do it:

1. Visit [Jupiter Lend’s borrow](https://jup.ag/lend/borrow) page.

<figure class="article-figure">
  <img src="{{ '/assets/images/solana-guide/jupiter-lend-borrow-markets.png' | relative_url }}" alt="Jupiter Lend borrowing markets" width="2048" height="714" loading="lazy" decoding="async">
</figure>

2. Connect your wallet and approve the connection.
3. Scroll through the list of assets and select the one you wish to offer as collateral (for example, SOL) and the one you wish to borrow (for example, USDC).



4. Deposit as much SOL as you want.

<figure class="article-figure article-figure--compact">
  <img src="{{ '/assets/images/solana-guide/jupiter-lend-collateral-deposit.png' | relative_url }}" alt="Deposit SOL as collateral on Jupiter Lend" width="877" height="815" loading="lazy" decoding="async">
</figure>

5. Borrow USDC, just keep the LTV in mind so you don’t overextend.

<aside class="solana-guide-callout solana-guide-callout--warning" aria-label="Jupiter Offerbook" markdown="1">

Both Jupiter and Kamino let you deposit mostly stablecoins and major coins like Solana and Bitcoin as collateral. But there’s a way to use any Solana coin as collateral on Solana using [Jupiter Offerbook](https://offerbook.jup.ag/borrow).

Here's how it works: you select any Solana coin in your wallet as collateral, set the USDC amount you want to borrow, and set the LTV, APY, and loan term. These are typically short-term loans of up to 30 days because of the risk involved.

However, this is slightly advanced, and beginners shouldn’t use it until they fully understand what they are doing.

</aside>

### Risks of borrowing and lending on Solana

While lending is a solid way to earn passive income on your assets, and borrowing can be a great way to get instant liquidity without selling your assets, there are still risks you should consider.

If you’re borrowing assets against your collateral, the value of that collateral could drop if the price of the asset falls, which could lead to liquidation.

Moreover, once you deposit funds into a DeFi platform, you deposit them into the protocol’s smart contract and rely on its security measures. The platform may have smart contract risks, and an exploit could steal your assets.

One such exploit happened in April 2026, when [North Korean hackers stole over $285 million](https://www.trmlabs.com/resources/blog/north-korean-hackers-attack-drift-protocol-in-285-million-heist) from Drift Exchange, a perpetuals trading platform on Solana. In the Drift Exchange case, the attackers used social engineering to access user funds. Still, the point is that something like this could happen.

## How to trade perpetual futures on Solana {#perpetual-futures}

<p class="solana-guide-skill"><span>Skill level</span><strong>Advanced to expert</strong></p>

Perpetual futures, also called “perps,” are derivative contracts that allow traders to take leveraged bets on the price of an underlying asset (Bitcoin, Solana, SpaceX stock, etc.) without owning the asset. Unlike traditional futures traded at stock brokers, perpetual futures don’t have an expiration date, so a trader can hold an open position indefinitely.

Traders can take long and short positions and use leverage to maximize potential gains. Most platforms offer up to 20x leverage, while some offer up to 500x. Keep in mind that leverage is a double-edged sword. It magnifies both profits and losses.

Here’s what that means:

Opening a $1,000 Bitcoin long perps position with 20x leverage at a BTC price of $80,000 means you control $20,000 worth of Bitcoin (0.25 BTC), but you don’t own it. You’re simply speculating on Bitcoin’s future price.

If Bitcoin rises $3,000 to $83,000, your 0.25 BTC long position is now worth $1,750. If BTC falls $3,000 to $77,000, your position is worth $250. This is the power of leverage.

Let’s take the same example with a $1,000 purchase at a BTC price of $80,000, but on the spot market:

You own 0.0125 BTC. If the price reaches $83,000, your 0.0125 BTC is worth $1,037.5. If the price falls to $77,000, your investment is worth $962.50.

| $1,000 BTC position at $80,000 per coin | Spot 0.0125 BTC | Perps 0.2500 BTC (20x leverage) |
|---|---:|---:|
| Price up $3,000 | +$37.50 ($1,037.50 total) | +$750.00 ($1,750.00 total) |
| Price down $3,000 | -$37.50 ($962.50 total) | -$750.00 ($250.00 total) |

**Note:** perpetual futures incur additional fees, such as funding rates.

There are several popular perpetual futures trading platforms on Solana, including:

- [Jupiter Perps](https://jup.ag/perps/long/SOL-SOL)
- [Backpack Exchange](https://backpack.exchange/)
- [Phoenix Trade](https://www.phoenix.trade/)
- [Phantom Perps](https://trade.phantom.com/perps/BTC) (using Hyperliquid infra)
- [Axiom](https://axiom.trade/)


### Perpetual futures risks

The main risk of trading perpetual futures is leverage. Because crypto assets are volatile, a 5% move with high leverage could wipe out your entire account.

Platform exploits are another risk to watch for. If you decide to trade perps despite the risks, never leave more money on the platform than you need for your trades to limit potential losses if something happens to the platform.

## How Solana prediction markets work {#prediction-markets}

<p class="solana-guide-skill"><span>Skill level required</span><strong>Beginner to advanced</strong></p>

Predictions are simple binary outcomes where you choose YES or NO in each market. For example, “Will [event] happen?” You choose one of the likely outcomes. Each YES or NO is a contract priced between $0.01 and $0.99. The higher the price, the higher the probability of that outcome.

For example, if a YES contract on a certain event costs $0.80, the market thinks there’s an 80% chance of YES. Buying the contract at $0.80 means the user profits $0.20 per contract because, once the event resolves, winning contracts pay $1 each (in our example, $1 - $0.80 = $0.20 profit per contract).

If the event settles at NO, the contracts expire worthless, and the user loses their bet. However, users can sell their contracts before the event concludes if liquidity is available. For example, a user buys a NO contract for $0.30, but the likelihood of the event resolving with a NO has increased over time. The user can sell their contracts at the higher price, let’s say $0.50, and pocket the difference.

**Note:** Partial position sales aren’t supported on all platforms. If you’re looking to sell, you’ll have to sell all of your contracts for that event. In addition to the contract price, there’s a fee for buying contracts that varies by market.

Here’s what Solana prediction markets actually look like:

1. **Open a prediction platform’s website.** I’ll use [Jupiter Prediction](https://jup.ag/prediction) as an example.
2. **Connect your wallet** and approve the connection if prompted.
3. **Select the prediction market** you want to trade, such as Bitcoin price, sports, or politics. Let’s use tennis as our example.

<figure class="article-figure">
  <img src="{{ '/assets/images/solana-guide/jupiter-prediction-market.png' | relative_url }}" alt="Jupiter Prediction market" width="1916" height="1166" loading="lazy" decoding="async">
</figure>

4. **Enter the amount of USDC** you wish to bet and select Yes or No for the event; in our case, the event is the Tennis player who will win the 2026 Men’s US Open.
5. **If you select Yes** for Carlos Alcaraz winning the event, you pay $0.31 per contract. If you select No, you pay $0.71 per contract.
6. **Confirm the transaction** in your wallet and wait for the event to resolve.
7. **You can sell your position** before the event resolves, as long as there’s enough liquidity.
8. **When the event resolves** and you still hold the contracts, you either win or lose. If you win, claim your profit from your account.

Prediction markets are among the largest betting activities in the crypto space, with Polymarket's cumulative trading volume exceeding $55 billion from January to August 2026, [per DeFi Rate](https://defirate.com/prediction-markets/volume/polymarket/).

Popular prediction markets on Solana:

- [Jupiter Predictions](https://jup.ag/prediction)
- [Kalshi](https://kalshi.com/)
- [Phantom](https://phantom.com/prediction-markets)
- [World.xyz](http://world.xyz)
- [Pascal](https://app.pascal.trade/)
- [Axiom](https://axiom.trade/)

### Prediction markets on Solana risks

If your contracts end up on the wrong side of the event settlement, they expire worthless, and you lose all the money you spent on them.

Beyond potentially losing your entire position, other risks include low liquidity, which means you may not be able to sell your contracts before the event concludes; settlement delays and source disputes; and regulatory restrictions.

Sometimes you may correctly predict an event but still lose because the market specified a different date, measurement, source, or condition. For example, in July 2026, a [bet on Polymarket](https://finance.yahoo.com/markets/crypto/articles/traders-sue-polymarket-over-no-113451825.html) that Michael Saylor’s Strategy would sell Bitcoin by May 31 was disclosed in a June 1 SEC filing, which came a day after the prediction contract deadline. Polymarket later added a note that the confirmation came outside the market’s timeframe and didn’t qualify, resolving the contract to No even though, in reality, it was a Yes.

Additionally, prediction markets aren’t regulated globally, so they may not be available in all countries.

## Games, NFTs, collectibles, and gacha {#games-nfts-and-gacha}

Since its inception, the Solana blockchain has hosted many projects, including Web3 games, NFT collections, and, recently, tokenized collectibles such as Pokémon cards via Collectors Crypt.

### Web3 games on Solana

The main idea behind Web3 games is owning your assets. For example, you buy a spaceship or a virtual character in a Solana game and use them in-game. You earn experience, level up, and modify various features by equipping items and cosmetics. When you’re done playing, sell your spaceship or character on a dedicated marketplace. If the game is popular and there’s demand, you could sell your assets for more than you paid.

Most games offered various tokens that you earned by playing, which could be exchanged for SOL or USDC with ease.

However, this also became a problem for the Web3 gaming space because many games focused only on the “earn” aspect rather than the “fun” needed to keep users engaged. Moreover, the constant release of new traditional games made it harder for Web3 games to compete.

<figure class="article-figure">
  <img src="{{ '/assets/images/solana-guide/star-atlas-game.png' | relative_url }}" alt="Star Atlas game" width="2048" height="998" loading="lazy" decoding="async">
  <figcaption>Star Atlas</figcaption>
</figure>

Some of the games that have been around for years and are still building include:

- **[Stepn](https://www.stepn.com/).** A walk-to-earn game where you buy shoes with various features and walk in real life to earn tokens and rewards. You can exchange the tokens on a platform like Jupiter.
- **[Aurory](https://aurory.io/).** A Pokemon-style game where your character walks around maps to fight monsters and find eggs, which then hatch into monsters. You level up your monsters and progress to new maps. You can sell both eggs and tokens for stablecoins.
- **[Star Atlas](https://staratlas.com/).** An ambitious space MMO with two game modes: a browser-based strategy game and an Unreal Engine 5 third-person shooter/space-ship-piloting game. The game is still in development and is now building its own Solana copy, called Z.ink. The move to its own blockchain aims to keep transaction fees even lower and let players with fewer assets profit through in-game activities.
- **Seeker games.** Solana has built its own mobile phone, called Seeker. Many Web3 games are available on the Solana dApp store, but not all of them are play-to-earn.

<aside class="solana-guide-callout solana-guide-callout--neutral" aria-label="Browser and downloadable games" markdown="1">

Some games are browser-based, while others require you to download and install them via Epic Games or Steam, like traditional games.

Browser versions typically require you to connect your wallet to interact with in-game assets. Desktop clients either have no wallet connection or connect via your email. In the settings, you can often add your crypto wallet so you can sell your assets on marketplaces.

</aside>

### NFTs and collectibles on Solana

Cryptocurrencies are fungible tokens, meaning it doesn’t matter which coin you hold. For example, you can hold any Bitcoin from the total 21 million coins. They are all the same.

NFTs are the opposite, hence the name Non-Fungible Tokens. If an NFT collection has 4,000 tokens, each is unique and not interchangeable. If you own one of these NFTs, it has different traits from the others in the collection, a true 1:1.

NFTs can represent almost anything on the blockchain: digital collectibles, virtual assets for Web3 games (spaceships, land plots, characters, weapons), event tickets, or ID credentials.

Since NFTs are tokenized on the blockchain, anyone can verify which wallet holds a specific NFT.

<figure class="article-figure">
  <img src="{{ '/assets/images/solana-guide/tensor-nft-marketplace.png' | relative_url }}" alt="Tensor NFT marketplace" width="2048" height="884" loading="lazy" decoding="async">
  <figcaption>Tensor NFT marketplace</figcaption>
</figure>

Some cryptocurrencies, like Bitcoin, are mined. NFTs are minted. During the process, each NFT receives a unique mint address and metadata. The metadata records all information describing the NFT’s traits and properties, including the date it was minted and a link to the digital image, which is hosted outside the Solana blockchain.

You can send or trade NFTs like any other cryptocurrency. Select “Send” in your wallet, enter the recipient address on the Solana blockchain, and the NFT will be instantly transferred. For trading NFTs, you’ll have to visit dedicated platforms like [Tensor](https://www.tensor.trade/).

<aside class="solana-guide-callout" aria-label="Compressed NFTs" markdown="1">

Most NFTs on the Solana blockchain these days are cNFTs. These are compressed NFTs and cost less to mint (~0.00001 SOL per cNFT) than traditional NFTs (~0.003 SOL). That’s because the data is compressed and stored off-chain using a Merkle tree with hashed leaf nodes, while only the root hash is kept on the blockchain.

Here’s how much minting 10,000 NFTs and cNFTs would cost:

- NFTs: ~ 30 SOL
- cNFTs: ~ 0.1 SOL

</aside>

In 2021 and 2022, NFT art collections were popular on Solana. Users could trade them on marketplaces like Magic Eden and Tensor, or use them as collateral to borrow SOL on Sharky. Strong communities formed around these NFT collections.

Trading NFTs on these marketplaces incurred fees, a portion of which went to the NFT creators. As a result, this became a way for teams to raise funds to build a product. Successful teams that are still building and have raised funds via their NFT collections include Backpack (Mad Ladz) and Claynosaurz.

<figure class="article-figure">
  <img src="{{ '/assets/images/solana-guide/claynosaurz-nft-collection.png' | relative_url }}" alt="Claynosaurz NFT collection on Tensor" width="1857" height="702" loading="lazy" decoding="async">
  <figcaption>Claynosaurz NFT collection | Tensor</figcaption>
</figure>

In 2026, NFTs became ultra-popular for bringing real-world collectibles on-chain. One successful example is Collector Crypt, which buys Pokémon and other collectible cards, stores them in a vault, and tokenizes each card on the blockchain.

Collector Crypt has implemented a gacha game where users buy individual card packs from $25 to $5,000 and rip them open without knowing which card they’ll get. Users can instantly sell the card back to Collector Crypt at a discount, list it on the Collector Crypt marketplace, keep it, or withdraw it and have the physical card mailed to them.

I [opened 9 packs, each worth $25, for my Collector Crypt review]({{ '/articles/collector-crypt-gacha-review/' | relative_url }}) and immediately sold them back to Collector Crypt. In total, I spent $225 and received $203.15, for a ~9% loss. While this is a small test, it matches the result of an on-chain data [run by Bitquery](https://bitquery.io/investigations/collector-crypt-jupiter-gacha).

### Risks of Solana games and NFTs

As with all products and services on Solana, the main risk is that assets could lose value. This is typical during bull and bear cycles, when prices can fluctuate widely over a few years. For example, during the Web3 game and NFT mania in 2021 and 2022, investors bought assets worth thousands of dollars or more.

Five years later, these assets have lost 90% of their value. Granted, some projects gave token airdrops to holders that cumulatively were worth more than the NFT value. However, most projects are down since their launch. No one knows whether this will change during the next bull run.

Another risk is smart contract exploits. A hacker can steal funds or tokens from a project, and there’s nothing anyone can do. Some NFTs reserve “freeze” authority and can lock stolen NFTs, which could prevent some issues, but the risk still exists.

## How to cash out {#cash-out}

The most common way to cash out is through a centralized exchange like Coinbase, Kraken, or Binance that supports the Solana network and allows withdrawals to your bank account.

Some exchanges may not support all Solana tokens, so you may want to convert your funds to SOL first or to a supported stablecoin like USDC.

This process varies slightly between exchanges, but in general, here’s how it goes:

1. Open your centralized exchange account and navigate to your wallet.
2. Select receive, then select the Solana network.
3. Copy your receiving address, then open your non-custodial crypto wallet (Jupiter or Phantom, for example).
4. Send the assets you want to withdraw to your exchange address.
5. Sell or convert deposited SOL or USDC into fiat currency supported by the exchange.
6. Look for a cash withdrawal option in your centralized exchange and withdraw the funds to your bank account or another supported method.

<aside class="solana-guide-callout solana-guide-callout--neutral" aria-label="Virtual cards" markdown="1">

You’ll find several virtual cards on the Solana blockchain, which you can load with funds and spend like any other card. Typically, conversion fees apply, depending on which asset you use to spend, but it could be a useful off-ramp tool if you can’t cash out in another way.

Kast is the most popular Solana card, but crypto wallets like Jupiter, Phantom, and Solflare offer their own Visa-branded cards.

</aside>

### Potential tax implications

Cashing out can trigger a taxable event, but the rules vary by jurisdiction. In many jurisdictions, selling crypto for fiat, swapping one token for another, or spending crypto may be treated as a disposal.

Keep records of purchase costs, rewards, swaps, fees, dates, transaction signatures, and fiat values. Consult a qualified crypto tax professional in your jurisdiction for advice tailored to your circumstances.

## Conclusion {#conclusion}

The best way to learn Solana is to choose a wallet from an official source, protect your recovery phrase, fund it with a small test amount, and try a few activities to get familiar.

Once you start getting a handle on how things work, you can participate in DeFi activities, play games, or take a chance in prediction markets.

To keep your funds safe, never share your recovery phrase with anyone and don’t accept suspicious links from anonymous users on social media.

## Frequently asked questions {#frequently-asked-questions}

### How do beginners start using Solana?

Download a wallet such as Jupiter, Phantom, Solflare, or Backpack, and install it as a browser extension or a mobile app. Keep your recovery phrase on paper, not online. Load SOL into your wallet, and make a test transaction.

### How much SOL do I need to start?

The amount of SOL you need to start on Solana depends on what you plan to do. Always keep a small amount of SOL to pay transaction fees and account rent.

### Is Phantom the same as Solana?

No, Phantom is a wallet interface, and Solana is the blockchain network.

### Are Solana transactions reversible?

No, confirmed blockchain transactions cannot be reversed. For that reason, double-check transaction details before you send funds.

### How long does a Solana transaction take?

Solana transaction speed largely depends on network congestion at the time, but it’s generally fast and takes up to a few seconds.

### Can I use a hardware wallet with Solana?

Yes, most hardware wallets support the Solana blockchain.

### What should I do if I exposed my recovery phrase?

Transfer your funds to a new wallet immediately. If someone gains access to your recovery phrase, they can steal your assets.

<aside class="financial-disclaimer" aria-labelledby="financial-disclaimer" markdown="1">

## Financial disclaimer {#financial-disclaimer}

This article is for informational and educational purposes only and does not constitute financial, investment, legal, or tax advice. Crypto assets, DeFi protocols, derivatives, prediction markets, tokenized assets, NFTs, and related products can be highly volatile and may result in the loss of some or all of your funds. Fees, yields, product features, availability, and regulations can change. Conduct your own research, verify current information with official sources, and consider consulting a qualified professional before making financial decisions.

</aside>

</div>

</div>
