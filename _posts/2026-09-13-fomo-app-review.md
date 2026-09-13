---
layout: article
title: "Fomo App Review 2026: I Tested It and Audited the Viral Claim That Only 5% of Traders on Fomo Profit"
seo_title: "Fomo App Review 2026: Fees, Risks & Profit Data"
date: 2026-09-13
last_modified_at: 2026-09-13
category: "Crypto"
content_type: "Review"
featured: true
tags:
  - Fomo app review
  - Fomo trading app
  - Social trading
  - Crypto trading
  - Dune Analytics
  - Solana
publication: "Kliment Dukovski"
summary: "I deposited about $20 into Fomo and audited a 90-day Dune query covering 476,627 Solana wallets. Here are the fees, risks, and results."
description: "I deposited about $20 into Fomo and audited a 90-day Dune query covering 476,627 Solana wallets. Here are the fees, risks, and results."
image: "/assets/images/fomo-app-review/fomo-app-review-featured.webp"
image_alt: "Fomo app logo with an astronaut above Earth and the text where traders become legends"
image_caption: "Fomo trading app | fomo"
image_width: 1200
image_height: 675
slug: "fomo-app-review"
permalink: "/articles/fomo-app-review/"
about:
  - "Fomo app"
  - "Social trading"
  - "Cryptocurrency trading"
  - "On-chain data"
mentions:
  - "Fomo"
  - "Dune Analytics"
  - "Solana"
  - "Hyperliquid"
  - "Privy"
  - "DefiLlama"
citations:
  - "https://x.com/FoxyhitsW/status/2094307323162525977"
  - "https://fomo.family/terms"
  - "https://x.com/degengambleh/status/2096809535566749836"
  - "https://x.com/0xWassie/status/2095867614387912740"
  - "https://dune.com/queries/8354772"
  - "https://fomo.family/blog/fomo-series-b"
  - "https://defillama.com/protocol/fomo"
  - "https://rhtrenches.com/"
  - "https://gmgn.ai/trend"
faq:
  - question: "What is the Fomo app?"
    answer: "Fomo is a non-custodial social trading app. It combines token swaps with a live feed, trader profiles, leaderboards, follow alerts, and more. In addition to spot trading meme coins and blue-chips, Fomo has integrated perpetual futures using Hyperliquid’s infrastructure."
  - question: "Is Fomo a copy-trading app?"
    answer: "No. Fomo is a social trading app. It does not include automatic copy-trading features. Within the app, you can track traders and what they buy, sell, and when."
  - question: "Is the Fomo app safe?"
    answer: "No crypto trading app is completely safe. Fomo uses a non-custodial Privy wallet and provides token warnings, but users remain responsible for wallet access and trade decisions."
  - question: "Why did my token lose value immediately after I bought it?"
    answer: "The displayed value can fall immediately due to the app fee, liquidity-pool fees, token rent, priority costs, price impact, slippage, or market movement. On very small trades, this can eat a huge chunk of the tokens."
  - question: "What is the minimum trade or sell amount on Fomo?"
    answer: "In my test, I couldn’t sell a position after it dropped below $2."
  - question: "Does Fomo support Apple Pay, Google Pay, and bank cards?"
    answer: "Yes, Fomo supports Apple Pay, Google Pay, and cards via these two methods."
---

<link rel="stylesheet" href="{{ '/assets/css/fomo-app-review.css' | relative_url }}?v={{ site.github.build_revision }}">

<div class="fomo-review" markdown="1">

Fomo is one of the easiest apps I have used to see how crypto traders are positioning and then buy the same tokens in my account.

I initially funded the app with \$5, then transferred roughly \$20 total to test how deposits work and how orders are handled, including fees and slippage. I followed several KOLs, opened a few small positions, and watched the leaderboard change as different meme coins pumped or dumped.

The app itself is fast, polished, and incredibly useful for discovering tokens if you know who to follow. The social feed helps with that, showing real-time buys and sells, as well as comments called “thesis” left by traders.

You can also search for a token by its contract address, and you can see token warnings, which can help you spot obvious issues like unlocked liquidity or bundled supply.

However, as with trading on any other platform, it all comes down to which tokens you’re buying. If you’re simply following what others are buying, you’ll likely burn your account.

I bought a few tokens I saw KOLs buying, and a few days later those positions were down 99%. Other positions, like PONS and STONKS, did much better, but those had actual products and buyback flywheels backing them. To be profitable, you need more analysis than blindly copying others.

Another question I had was whether other Fomo traders were profitable. A viral X post from @FoxyhitsW claimed that only about 5% of 429,000 traders were in profit. I found the public Dune query behind the claim, forked it, and reran it.

<blockquote class="twitter-tweet" data-dnt="true" align="center"><p lang="en" dir="ltr">dark truth about trading no one tells you:<br><br>&gt; out of 429k traders on fomo, 24k traders (5%) are in profit<br>&gt; only 500 traders have made more than $1k ever<br>&gt; majority have just profited $100 or less<br>&gt; and 95% of the traders are in a loss<br><br>youre trying to compete for that 1% spot… <a href="https://t.co/MY6spYV9iZ">pic.twitter.com/MY6spYV9iZ</a></p>&mdash; Foxy (@FoxyhitsW) <a href="https://x.com/FoxyhitsW/status/2094307323162525977?ref_src=twsrc%5Etfw">August 31, 2026</a></blockquote>

<script async src="https://platform.x.com/widgets.js" charset="utf-8"></script>

My September 2 run classified 27,130 of 476,627 wallets, or 5.69%, as net positive. That does not mean 94.31% of Fomo users lost money. The query measures 90-day net SOL and stablecoin cash flow on Solana, not full realized and unrealized PnL. I later found another issue: the address sending funds to Fomo’s fee vault is not always the user signer who placed the trade.

### Verdict

Fomo is a legit and genuinely useful social trading app, but it’s not an easy-profit app. You need to use multiple tools to discover tokens and cross-reference the data in the Fomo app before opening trades. I wouldn’t recommend blindly copying other traders, though if you’re lucky, that may work too.

While the app’s main focus is meme coin social trading, you can also trade crypto on the spot market like BTC, SOL, ETH, and HYPE, and trade perps, including crypto, stocks, commodities, indices, and forex.

Trading execution is fast, but expect high fees and slippage on illiquid tokens and blockchains like the Robinhood Chain. Another downside is that if selling a token has high price impact, Fomo may not let you sell it.

## Fomo app pros and cons

<div class="fomo-review-columns">
  <section class="fomo-review-panel fomo-review-panel--pros" aria-labelledby="fomo-pros">
    <h3 id="fomo-pros">Pros</h3>
    <ul>
      <li>Fast and simple onboarding via email login</li>
      <li>Deposit via crypto or fiat</li>
      <li>Useful social trading feed for token discovery</li>
      <li>Public trader profiles with transaction history</li>
      <li>Spot crypto and perps trading in one interface</li>
    </ul>
  </section>
  <section class="fomo-review-panel fomo-review-panel--cons" aria-labelledby="fomo-cons">
    <h3 id="fomo-cons">Cons</h3>
    <ul>
      <li>High fees and slippage, especially on lesser-known tokens</li>
      <li>Addictive trading design</li>
      <li>No direct copy trading features</li>
      <li>Social feed could sometimes feel overwhelming</li>
    </ul>
  </section>
</div>

## Fomo app review: Key findings

<table class="fomo-review-findings">
<thead>
<tr>
<th>Category</th>
<th>My findings</th>
</tr>
</thead>
<tbody>
<tr>
<th scope="row">Best for</th>
<td>Discovering tokens and monitoring what active traders buy and sell on the app</td>
</tr>
<tr>
<th scope="row">Not best for</th>
<td>Blind copy trading and repeated tiny orders in illiquid tokens</td>
</tr>
<tr>
<th scope="row">My test</th>
<td>Approximately $20 transferred; several small spot positions opened, and multiple KOLs followed</td>
</tr>
<tr>
<th scope="row">Deposits</th>
<td><p>Solana Base, BNB, Monad, Robinhood Chain, Hyperliquid, Ethereum; My Solana transfer took seconds</p>
<p>Coinbase deposits</p>
<p>Apple Pay, Google Pay, Cash App</p></td>
</tr>
<tr>
<th scope="row">Fees</th>
<td><p>Variable depending on the token and the blockchain</p>
<p>Third-party costs and price impact apply</p></td>
</tr>
<tr>
<th scope="row">Custody</th>
<td>Non-custodial wallet created through Privy, with exportable keys</td>
</tr>
<tr>
<th scope="row">Withdrawal</th>
<td><p>Crypto</p>
<p>Bank account (ACH, US only)</p></td>
</tr>
<tr>
<th scope="row">Perps</th>
<td>Third-party infrastructure provided by Hyperliquid</td>
</tr>
<tr>
<th scope="row">My rating</th>
<td><p>4.0/5 for token discovery</p>
<p>2.5/5 for small, speculative trades</p>
<p>2.5/5 for high trading fees and slippage</p>
<p>3.0/5 for addictive social trading experience</p>
<p>5.0/5 for fast token buying</p></td>
</tr>
</tbody>
</table>

## What is the Fomo app?

The Fomo app is a social trading app that combines token swaps, perps, a live trade feed, trader profiles you can follow, and leaderboards in one interface. It has both a mobile app and a desktop app, and they're synchronized.

In essence, Fomo is a crypto trading social network, not a traditional crypto exchange. All user trades are shared in real time, and you can track which tokens other users are buying and selling to try to figure out the current meta.

<figure class="article-figure">
  <img src="{{ '/assets/images/fomo-app-review/fomo-desktop-app.webp' | relative_url }}" alt="Fomo desktop app" width="2048" height="998" loading="lazy" decoding="async">
  <figcaption>Fomo desktop app</figcaption>
</figure>

You can open a user’s profile to see their holdings, closed trades, and current positions, and you can follow them.

Traders can attach a “thesis” to their trades, like a social media post. Although these are not always useful and often look like this: “I like this meme” or “100 million or bust.” Some of the largest fomo accounts post actual theses for the tokens they buy and shill.

Even though the app is designed to follow other traders, it has no copy-trading features as of this writing. You will have to manually trade what someone else is trading. Given that all trades are on the blockchain, you can probably build or find a tool that automatically copies someone’s trades. But I wouldn’t recommend that for two reasons: no one is 100% correct on their trades, and I wouldn’t connect an outside tool to my wallet.

<figure class="article-figure article-figure--portrait">
  <img src="{{ '/assets/images/fomo-app-review/fomo-mobile-app.webp' | relative_url }}" alt="Fomo mobile app" width="946" height="2048" loading="lazy" decoding="async">
  <figcaption>Fomo mobile app</figcaption>
</figure>

Unlike most crypto apps, Fomo has abstracted away the crypto layer. Fomo generates and manages the wallet through Privy, per [<u>Fomo’s Terms of Service</u>](https://fomo.family/terms). You simply download the app, open an account with your email, and the backend handles everything. This gives you multiple blockchain wallets that you can export later if you want. But you mostly use them to deposit funds.

With multiple blockchain wallets built into the app, buying tokens across blockchains is straightforward, and you don’t need to bridge assets. Even if you deposit your tokens on Solana, you can buy tokens on Robinhood Chain or BNB by tapping the “Buy” button.

## How I tested Fomo

I first deposited \$5, but high slippage and fees ate through the funds, so I transferred more, for a total of about \$20. I used both the mobile and desktop apps, followed several traders, bought and sold small token positions, and captured screenshots for this review.

My test focused on the typical user experience:

- Depositing funds (I deposited USDC via the Solana blockchain).

- Finding tokens on the trending page and social feed.

- Searching for tokens by contract address.

- Following KOLs and inspecting their positions.

- Buying and selling small token positions.

- Watching how fees, liquidity, and price movements affected these positions.

- Reviewing the perps markets without placing a leveraged trade.

At one point, my home screen showed a balance of \$45 because two of my positions, PONS and STONK, each entered with \$5 (though the purchase was instantly worth \$4.71 and \$3.25 due to slippage and fees) saw a significant price increase. All other positions dropped below the \$2 threshold, meaning I can’t sell them, as \$2 is the minimum to exit a position.

<figure class="article-figure">
  <img src="{{ '/assets/images/fomo-app-review/fomo-test-account-results.webp' | relative_url }}" alt="Fomo my account results" width="1277" height="1077" loading="lazy" decoding="async">
  <figcaption>Fomo my account results</figcaption>
</figure>

By the time I wrote this article, I hadn’t completed a withdrawal, but I assume the process is just as fast as the deposit because I’m essentially transferring between two crypto wallets on the Solana blockchain. Another withdrawal option is ACH for US traders.

Finally, I forked the public Dune query shared on X and added more output buckets. That part of the test covered 476,627 tagged Solana wallet addresses over a rolling 90-day window.

## What I liked about Fomo

There’s a lot to like about this app, as it solves a major pain point from the previous bull run: making meme trading fun and engaging. Before this, users had to spend days in “the trenches,” navigating Discord and Telegram communities and searching for token launches on Pump.fun to find the right meme coin.

Of course, due diligence still matters if you want to find the right coin before takeoff, but tracking large players is now much easier in a single app. Granted, most of these whales can use multiple wallets, and they probably do, but the public account is still visible to everyone.

<figure class="article-figure">
  <img src="{{ '/assets/images/fomo-app-review/fomo-coin-feed-stonks.webp' | relative_url }}" alt="Fomo coin feed (STONKS)" width="1362" height="902" loading="lazy" decoding="async">
  <figcaption>Fomo coin feed (STONKS)</figcaption>
</figure>

### Depositing is fast and simple

I used Solana to make my first deposit, and the funds arrived within seconds. There was no bridging or complicated steps: I simply copied and pasted my Fomo address into my Solana wallet, as with any other crypto transfer.

The Fomo app also offers fiat funding options, including Apple Pay, Google Pay, cards, and Cash App. But I didn’t try them because I expect higher fees, which are common with fiat-to-crypto onramps. I assume availability for these methods depend on your country of residence and the payment provider.

<figure class="article-figure article-figure--portrait">
  <img src="{{ '/assets/images/fomo-app-review/fomo-deposit-options.webp' | relative_url }}" alt="Fomo mobile app deposits" width="946" height="2048" loading="lazy" decoding="async">
  <figcaption>Fomo mobile app deposits</figcaption>
</figure>

**Note:** If you try to deposit via card from your desktop account, the option may be locked. Try Apple or Google Pay instead.

### The social feed is genuinely useful

Fomo’s feed is the main reason to use the app instead of a basic wallet swap if you’re looking for the next top meme coin narrative. I could see who bought or sold, how much, at what market cap, and when. If you open the chart, those moments appear at the exact time.

This gives you a clearer view of what a trader actually does than an X account that only posts its winners.

However, this is not the same as giving you an edge. By the time I see the alert, the trader has already entered and may even have exited. They may also have received the tokens from another wallet. If others follow the trader, they could easily push the token price up early, when liquidity is still low, meaning you could get filled at 5x or more when the initial signal came.

<figure class="article-figure article-figure--portrait">
  <img src="{{ '/assets/images/fomo-app-review/fomo-social-feed.webp' | relative_url }}" alt="Fomo feed" width="587" height="1143" loading="lazy" decoding="async">
  <figcaption>Fomo feed</figcaption>
</figure>

The feed is a good discovery tool, a chance to look at the token and do your own research from there. I wouldn’t consider it a direct buy signal. I tried buying some tokens blindly after a popular trader recommended them, and they all dropped 99% within a day or two, completely wiping out my position.

### Theses add context to a trade

Users can publish a thesis for a token. It’s like a social post explaining why someone bought, sold, or continues to hold.

Larger accounts in the top 20 of the leaderboard often share their thoughts on why a certain token has the potential to go up. But don’t expect a detailed, number-heavy explanation. Some just say, “I believe BNB season is next,” or something along those lines.

<figure class="article-figure article-figure--portrait">
  <img src="{{ '/assets/images/fomo-app-review/fomo-mobile-social-feed.webp' | relative_url }}" alt="Fomo mobile app social feed" width="946" height="2048" loading="lazy" decoding="async">
  <figcaption>Fomo mobile app social feed</figcaption>
</figure>

### Contract address search reduces ticker confusion 

Fomo has a search function that lets you look up a token by contract address (CA). This is an important feature because scammers often create copies of a token with the same name and logo, confusing investors into buying a worthless copy.

If you’re not sure which one is the real token, copy the CA listed under the token’s name and paste it into the search tab.

<figure class="article-figure article-figure--compact">
  <img src="{{ '/assets/images/fomo-app-review/fomo-contract-address-search.webp' | relative_url }}" alt="Fomo app contract address" width="407" height="83" loading="lazy" decoding="async">
  <figcaption>Fomo app contract address</figcaption>
</figure>

### Token warnings are helpful

Fomo warns users when a token has risk indicators such as unlocked liquidity, concentrated holders, suspicious wallet clusters, or bundled supply. This warns you that if you buy a token, you may not be able to sell it, or that insiders have already bought a large supply and are waiting to sell to everyone else.

<figure class="article-figure article-figure--portrait">
  <img src="{{ '/assets/images/fomo-app-review/fomo-token-risk-warnings.webp' | relative_url }}" alt="Fomo app token warnings" width="946" height="2048" loading="lazy" decoding="async">
  <figcaption>Fomo app token warnings</figcaption>
</figure>

These warnings can be extremely helpful for new token launches, but they are not guarantees. A token can pass visible checks yet still collapse because of insider selling, poor liquidity, or lack of demand. Moreover, even if a token has warnings that it’s unverified, it can still be legitimate and have potential. Use this information for your due diligence.

### Fomo perps

The app may not offer the detailed tools for trading perps as Hyperliquid does, but it uses its infrastructure and simplifies the whole process.

<figure class="article-figure article-figure--portrait">
  <img src="{{ '/assets/images/fomo-app-review/fomo-perpetual-markets.webp' | relative_url }}" alt="Fomo perps" width="946" height="2048" loading="lazy" decoding="async">
  <figcaption>Fomo perps</figcaption>
</figure>

Users can trade BTC with up to 40x leverage, ETH with up to 25x, and HYPE and ZEC with up to 10x. As on dedicated perps platforms, you can trade both short and long on these assets. In addition to crypto, you can trade stocks, commodities, indices, and forex with leverage.

When opening a position, you can set stop-loss and take-profit levels, adjust leverage, and choose between market and limit order execution. For a social trading app, this is impressive.

<figure class="article-figure article-figure--portrait">
  <img src="{{ '/assets/images/fomo-app-review/fomo-oil-perpetual-trade.webp' | relative_url }}" alt="Fomo Oil perps" width="946" height="2048" loading="lazy" decoding="async">
  <figcaption>Fomo Oil perps</figcaption>
</figure>

## What I didn’t like about Fomo

While it’s an excellent and fun way to trade meme coins, it’s not easy to make money. I’m not just talking about the sheer number of tokens that pop up daily. I’m talking about high fees and slippage, which can eat into your potential profit right off the bat.

### Fees and slippage

Fomo’s fees depend on the transaction size and type, the token, and the route. The fee displayed before confirmation is the one that applies, per [<u>Fomo’s terms</u>](https://fomo.family/terms).

In addition, users may incur separate liquidity-pool fees, gas on some networks, and price differences between expected and actual execution.

Here’s what you could pay for a small memecoin trade:

- Fomo’s buy or sell fee

- A liquidity-pool or routing fee

- Token-account rent and priority cost

- Price impact caused by the order itself

- Slippage between the quote and settlement

- Market movement while the order is being routed

- Another set of costs when the position is sold

In my test, I bought about \$5 of a lesser-known token. The position dropped to about \$3 almost immediately. I don’t know what exactly caused \$2 in fees, since there was no transaction receipt or execution route to review. Some of it could have been price impact, slippage, fees, or other factors.

The result was poor and worse than I expected. Moreover, the app wouldn’t let me sell a position that dropped below \$2. For comparison, this wouldn’t happen if you wanted to sell a meme coin on Solana on Jupiter Swap. On the latter, you can sell for cents if you want to.

This doesn’t seem to be an isolated case. I’ve seen several X users complain about this as well.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">dude i genuinely love <a href="https://x.com/fomo?ref_src=twsrc%5Etfw">@fomo</a>’s UI, but buying a $4m robinhood token with $500 and ending up with only $468 is crazy.<br><br>38% price impact on a 3-figure trade, plus fees and slippage taking another 6.4%?<br><br>it feels like you get taxed for pressing buy. this needs to be fixed.</p>&mdash; WASSIE (@0xWassie) <a href="https://x.com/0xWassie/status/2095867614387912740?ref_src=twsrc%5Etfw">September 4, 2026</a></blockquote> <script async src="https://platform.x.com/widgets.js" charset="utf-8"></script>

I can’t guarantee this is exactly what these X posts claim without seeing the transactions, but since I had similar results, I’m not overly skeptical.

Get a 10% discount on Fomo’s trading fees is by using [<u>my referral code</u>](https://fomo.family/r/lyslam).

### Leaderboard problem

The leaderboard is compelling because it makes trading (somewhat) measurable. The top 10 traders show large green numbers, making it easy to assume that the top traders have found repeatable strategies worth following.

<figure class="article-figure article-figure--portrait">
  <img src="{{ '/assets/images/fomo-app-review/fomo-trader-leaderboard.webp' | relative_url }}" alt="Fomo leaderboard" width="570" height="1060" loading="lazy" decoding="async">
  <figcaption>Fomo leaderboard</figcaption>
</figure>

My own experience was less stable. Several traders I followed were in the previous week’s top 10 because they had exposure to PONS. Some had traceable purchases within the app, while others had tokens deposited from an external wallet.

I couldn’t confirm whether this was an airdrop or whether the traders bought the tokens elsewhere (bypassing fees) and moved them to their Fomo accounts.

Moreover, top 10 traders held their largest positions in three to five tokens. The rest were either very small compared to their top winning positions or in the red.

## Are Fomo traders profitable? What the Dune data says

The public evidence I found suggests that relatively few Fomo-tagged Solana wallets had positive cash flow during the period measured. It does not establish the full profit or loss for every user.

The data came from an X thread by @MidCurveMortal, who published a [<u>Dune query</u>](https://dune.com/queries/8354772) that identifies Fomo activity via a fee-router address.

At the August 17, 2026, snapshot, the post reported 292,531 wallets, with 18,033 (6.16%) in positive territory. It also claimed a median of roughly -\$120, an aggregate loss of \$1.26 billion, and only 25 wallets above \$10,000.

Those figures spread quickly, with @FoxyhitsW claiming that around 24,000 of 429,000 traders were in profit and that only around 500 traders had made more than \$1,000.

The last word is misleading, since the query covers the preceding 90 days, not the app's full history.

### My September 2 rerun

I forked the public query and expanded its output. When I ran it on September 2, 2026, the execution returned the following results. Dune preserved the SQL version but not its corresponding historical result table, so these are the figures I recorded from that execution:

| Result                         | Wallets | Share                      |
|--------------------------------|---------|----------------------------|
| Total tagged Solana wallets    | 476,627 | 100%                       |
| Net-positive cash flow         | 27,130  | 5.69%                      |
| Zero cash flow                 | 219     | 0.05%                      |
| Net-negative cash flow         | 449,278 | 94.26%                     |
| Positive cash flow up to \$100 | 23,661  | 87.21% of positive wallets |
| More than \$100                | 3,469   | 0.728% of all wallets      |
| More than \$1,000              | 683     | 0.143% of all wallets      |
| More than \$10,000             | 33      | 0.0069% of all wallets     |

The final three thresholds are nested. The wallets above \$1,000 and \$10,000 are included in the 3,469 wallets above \$100.

### What the query actually measures

The SQL identifies transactions that include a transfer to Fomo’s fee-vault address and treats the transfer’s `from_owner` as the trader. It then joins those transaction IDs with Dune’s Solana DEX trade table.

When I inspected individual transactions, I found that Fomo can use a relayer or fee payer alongside a separate user signer. Therefore, the fee-transfer sender is not always a reliable proxy for the person placing the trade.

It then treats:

- SOL, USDC, or USDT spent as negative cash flow

- SOL, USDC, or USDT received as positive cash flow

- The difference during the rolling 90-day period as `net_pnl_usd`.

The column says PnL (Profit and Loss), but the calculation is net cash flow. For example, if I spend \$100 on a token and still hold it at the end of the period, even if the position is now worth \$200, the query can show -\$100 because it records the cash outflow. It doesn’t account for a sale back to SOL or a stablecoin.

The reverse can also happen. If I bought a token before the 90-day window and sold it for \$100 during the tracking window, the query can show positive cash flow without including the original cost.

### The result is not a complete user-profitability study

There are several limitations on how the query is run:

1.  **Open positions aren’t valued.** Unsold tokens can make a profitable portfolio appear cash-flow negative.

2.  **The window cuts through trades.** Entries and exits can fall on opposite sides of the 90-day boundary.

3.  **External activity is missing.** Buying through Fomo and selling elsewhere looks negative. Buying elsewhere and selling through Fomo can look positive.

4.  **Wallets aren’t people.** One trader can control several wallets, and bots can appear as wallets.

5.  **It covers Solana spot activity.** It doesn’t include Fomo trading on other supported chains or perps.

6.  **Multi-route swaps require care.** The query `dex_solana.trades` records each segment of a multi-pool route as a separate row. A simple sum can count relevant legs more than once.

7.  **Not every cost is deducted separately.** The query uses the fee-router transfer to identify Fomo activity, but it doesn’t subtract every Fomo, network, priority, and third-party fee from PnL.

### What changed when I identified the user signer

To test the attribution problem, I built a second query that required each transaction to interact with both the Fomo fee vault and the router. I then identified the user from the transaction’s signer list rather than treating the fee-transfer sender as the trader.

In the 24-hour sample, the query identified 13,593 confirmed Fomo transactions and 5,965 signers. Of those users, 51.2% had positive net USDC cash flow.

This does not mean 51.2% of users made a profit. The test covered only one day and only USDC balance changes. It did not establish the opening cost basis or value unsold positions. Because the trader-identification method, observation period, and assets measured all changed, you can't attribute the difference between 5.69% and 51.2% to a single factor. It shows how sharply the headline percentage can change depending on how the analysis defines a trader and measures their activity.

Calculating true PnL would require the opening token inventory and cost basis for every trader-token pair, matched acquisitions and disposals, external transfers, all applicable fees, and end-of-period valuations for unsold positions. A sale without a traceable acquisition would need to be flagged rather than counted as pure profit.

My audit therefore does not prove that the original 6.16% figure is false. It shows that the public query lacks enough information to establish the true percentage of profitable Fomo users.

## Is the Fomo app safe and legitimate?

Yes, the Fomo app is a real, funded product that routes genuine on-chain trades. Fomo announced a [<u>$75 million Series B</u>](https://fomo.family/blog/fomo-series-b) in June 2026, led by Index Ventures, with Union Square Ventures and Benchmark participating.

As popularity and adoption grew, Fomo's daily fees jumped from around \$100,000 to over \$2 million at their peak in early September 2026, per [<u>DefiLlama</u>](https://defillama.com/protocol/fomo).

<figure class="article-figure">
  <img src="{{ '/assets/images/fomo-app-review/fomo-fees-defillama.webp' | relative_url }}" alt="Fomo fees | DefiLlama" width="1572" height="862" loading="lazy" decoding="async">
  <figcaption>Fomo fees | DefiLlama</figcaption>
</figure>

While the app itself is legit, the risk comes from four categories:

- **Token risk.** Fomo can’t vet all the thousands of tokens launched daily. Some may be bundled, controlled by insiders, or abandoned right after launch.

- **Liquidity risk.** Even though the app shows your token position has value, the token may not have enough liquidity for you to sell. In this case, the profit you see is just a number on the app.

- **Execution risk.** Every time you execute a transaction, whether buy or sell, you risk slippage, route failures, and rapid price movements that can result in a worse price than you expected.

- **Wallet and account risk.** Losing control of the linked account means you don’t have access to the funds. However, using email login carries less risk than using 24-word seed phrases.

## Who should use Fomo?

Fomo is a reasonable fit for experienced crypto traders who understand liquidity, contract addresses, token concentration, and risks. It can save time when tracking active wallets and narratives across multiple blockchains.

It can also help cautious beginners who treat the feed as educational and do their own due diligence.

## Who shouldn’t use Fomo?

I wouldn’t recommend it as an automatic route to someone else’s return. If you want to copy trade, you won’t be able to do so directly in the Fomo app.

Users who want to trade frequently with sub-\$10 bets will struggle to be profitable unless they hit the right token right away. If token losses don’t wipe out your account, fees will definitely eat into your profits.

While it can be a fun experience, it can quickly turn addictive, especially if you hit a few winners right off the bat. Users with poor impulse control could be better off buying blue-chip coins like Bitcoin, Solana, or Hyperliquid and passing the action on Fomo.

<aside class="fomo-review-callout" aria-label="Third-party token discovery tools" markdown="1">

Traders have already built some useful tools you can try to find the next potential gem.

[<u>Rhrtrenches</u>](https://rhtrenches.com/) is one of those, giving you a quick look at what is being bought and sold, and by whom, in real time on the Robinhood Chain.

<figure class="article-figure">
  <img src="{{ '/assets/images/fomo-app-review/rhtrenches-robinhood-chain-feed.webp' | relative_url }}" alt="rhrtrenches" width="2048" height="977" loading="lazy" decoding="async">
  <figcaption>rhrtrenches</figcaption>
</figure>

[<u>GMGN.ai</u>](https://gmgn.ai/trend) is another platform that gives you a glimpse of the most popular tokens across multiple blockchains, their trading volume (useful if you’re providing liquidity), and other valuable information.

<figure class="article-figure">
  <img src="{{ '/assets/images/fomo-app-review/gmgn-trending-tokens.webp' | relative_url }}" alt="GMGN.ai" width="2048" height="854" loading="lazy" decoding="async">
  <figcaption><a href="http://gmgn.ai"><u>GMGN.ai</u></a></figcaption>
</figure>

**Note:** These are third-party tools. I have no control over the data, and naturally wouldn’t recommend connecting your wallet and signing transactions. Do your own research before connecting your wallet.

</aside>

## Conclusion

Fomo’s best product is the social feed. You can track what the top traders buy and sell, and, more importantly, when. Granted, they could be wrong, so you shouldn’t follow them blindly. Use it as a starting point, then do your own due diligence. You may be a step closer to finding some gems.

My testing found that fees and slippage are extremely high compared to swapping tokens on the Jupiter Swap. If you’re buying smaller amounts, you could end up paying half of what you paid for. Moreover, you could buy an illiquid token and be unable to sell, even if on paper you’re in profit.

However, the app is highly addictive and may not suit everyone. Never deposit more than you can afford to lose.

The Dune data also does not prove that only 5% to 6% of Fomo users made money. It shows that a small share of tagged Solana wallets had positive cash flow under one proxy methodology. Because that methodology does not reconstruct complete PnL and may not always identify the actual user behind a relayed transaction, I couldn’t verify the true user-profitability rate.

Get a 10% discount on Fomo’s trading fees by using [<u>my referral code</u>](https://fomo.family/r/lyslam).

## Frequently asked questions {#frequently-asked-questions}

### What is the Fomo app? {#faq-what-is-the-fomo-app}

Fomo is a non-custodial social trading app. It combines token swaps with a live feed, trader profiles, leaderboards, follow alerts, and more. In addition to spot trading meme coins and blue-chips, Fomo has integrated perpetual futures using Hyperliquid’s infrastructure.

### Is Fomo a copy-trading app? {#faq-is-fomo-a-copy-trading-app}

No. Fomo is a social trading app. It does not include automatic copy-trading features. Within the app, you can track traders and what they buy, sell, and when.

### Is the Fomo app safe? {#faq-is-the-fomo-app-safe}

No crypto trading app is completely safe. Fomo uses a non-custodial Privy wallet and provides token warnings, but users remain responsible for wallet access and trade decisions.

### Why did my token lose value immediately after I bought it? {#faq-why-did-my-token-lose-value}

The displayed value can fall immediately due to the app fee, liquidity-pool fees, token rent, priority costs, price impact, slippage, or market movement. On very small trades, this can eat a huge chunk of the tokens.

### What is the minimum trade or sell amount on Fomo? {#faq-minimum-trade-or-sell-amount}

In my test, I couldn’t sell a position after it dropped below \$2.

### Does Fomo support Apple Pay, Google Pay, and bank cards? {#faq-deposit-payment-methods}

Yes, Fomo supports Apple Pay, Google Pay, and cards via these two methods.

</div>
