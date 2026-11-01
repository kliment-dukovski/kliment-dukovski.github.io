---
layout: article
title: 5 Solana Programming Concepts Explained Using a Simple Vault Program
date: 2026-11-01
category: Solana
content_type: Technical Writing
publication: Kliment Dukovski
slug: solana-programming-concepts-vault
permalink: /articles/solana-programming-concepts-vault/
seo_title: 5 Solana Programming Concepts Explained Using an Anchor Vault
last_modified_at: '2026-11-01'
featured: false
tags:
- Solana programming
- Technical writing
summary: Learn how Solana accounts, programs, PDAs, transactions, and CPIs work through
  a simple Anchor vault built for the Turbin3 prerequisites.
description: Learn how Solana accounts, programs, PDAs, transactions, and CPIs work
  through a simple Anchor vault built for the Turbin3 prerequisites.
image: /assets/images/solana-programming-concepts-vault/solana-vault-featured.webp
image_alt: Solana logo and a vault door with a code symbol on glowing blue and purple
  glass panels
image_width: 1672
image_height: 941
---

<link rel="stylesheet" href="{{ '/assets/css/solana-programming-concepts.css' | relative_url }}?v={{ site.github.build_revision }}">

<div class="solana-programming-body" markdown="1">

I compiled five programming concepts you need to know to start coding on Solana, including accounts, programs, and transactions. At the end, I show you a vault program I had to complete to join the Turbin3 Builders Cohort. I explain how the program works and what changes I had to make to complete the task.

## Solana Accounts

Everything on Solana is an account: programs, data, and even the crypto wallet used to store coins.

All [Solana accounts](https://solana.com/docs/core/accounts) are stored on validators, which are computers that run specialized software to process transactions and vote on the blockchain’s state. Because accounts take up space on validators’ computers, they must pay rent in Solana’s native coin, SOL.

However, the rent is a refundable deposit. If a user no longer needs the account, they can close it and get the SOL back into their wallet.

At its core, a Solana account has:

- **An address**, a unique 32-byte public key used to find the account on the blockchain and interact with it. Consider this the account’s ID card that you use to reference the account or interact with it.

- **Data** that stores bytes representing program-defined state or program-related information.

- **Lamports**, the lowest fractional unit of SOL (1 SOL = 1,000,000,000 lamports). This is the account’s balance.

- **Owner**, the Program ID of the program that owns the account. Only the program that owns the account can modify the data and spend the lamports from it. A standard wallet account is owned by the System Program, but the user who holds the keys can sign transactions.

- **Executable flag**, which can be true or false. If the account is a program, it’s set to true, meaning the account holds compiled on-chain executable code. If it’s a data account, the executable flag is set to false, meaning it only stores data.

Here’s what the Account struct (a custom data type) written in Rust looks like:

```rust
pub struct Account {
    pub lamports: u64,
    pub data: Vec<u8>,
    pub owner: Pubkey,
    pub executable: bool,
    /// deprecated rent tracking field
    pub rent_epoch: Epoch,
}
```

## Ethereum calls them smart contracts; Solana calls them programs

Unlike Ethereum smart contracts that store data, [Solana programs](https://solana.com/docs/core/programs) are stateless. Instead of keeping data in the program account, Solana stores it in separate accounts.

There are two types of Solana programs: on-chain programs created by users, and core (native) programs that provide the fundamental network functionality.

<aside class="solana-concept-box" markdown="1">

### Core Programs

- **System Program** for managing accounts. This program can create new accounts, handle SOL transfers from system-owned accounts, and assign ownership when creating an account.

- **Vote and Stake** for the Solana blockchain consensus. These two programs create and manage accounts that track validator state and rewards and manage stake delegations to validators.

The **SPL Token Program** is not a core program, but it’s frequently used. It’s similar to the System Program, but it defines token logic, including minting new tokens, burning, and transferring tokens such as USDC, JUP, and RAY between accounts.

</aside>

Solana programs are written in Rust, often using either Anchor, a framework that reduces boilerplate code; Pinocchio, a zero-copy Rust library for reducing compute consumption; or native Rust without frameworks.

As mentioned earlier, every Solana account has an address. The program address is called the Program ID, which clients and other programs use to call the program.

## Program Derived Addresses (PDAs)

A typical wallet uses an [Ed25519 keypair](https://en.wikipedia.org/wiki/Curve25519): a public key that serves as its address and a private key used to sign transactions. The public key is like your bank account: you share it, and others send you money. The private key gives you access to your account, like a password. Without it, you can’t sign transactions.

[Program Derived Addresses (PDAs)](https://solana.com/docs/core/pda) have only a public key because they are deterministically derived from a program’s ID, a set of seeds, and a bump (a number between 0 and 255) that pushes the address off the Ed25519 curve.

Because PDAs don’t have a private key to sign transactions, the program whose ID was used to derive the PDA can authorize it as a signer, using its seeds and bump.

<aside class="solana-concept-box" markdown="1">

### PDA example

Let’s take Steve. He has a Solana wallet with a set of private and public keys. On the other side, we have a simple app (program) that stores SOL.

1.  Steve initiates a SOL deposit in the app and approves the transaction.

2.  The app creates a vault account at a PDA, and Steve’s SOL is deposited into the vault.

3.  When Steve initiates a withdrawal request, the app sends the SOL back to Steve.

4.  Steve can request closure of the PDA vault account to get the rent deposit back, or the app can close the PDA vault account automatically if that is coded into the app.

<figure class="article-figure">
  <img src="{{ '/assets/images/solana-programming-concepts-vault/solana-pda-vault.webp' | relative_url }}" alt="PDA example diagram" width="1322" height="1057" loading="lazy" decoding="async">
  <figcaption>PDA example diagram</figcaption>
</figure>

</aside>

## Instructions and transactions

Instructions are the fundamental building blocks of blockchain operation. Each instruction calls a program via its program address, specifies the accounts it needs, and includes an array of data that the program interprets.

```rust
pub struct Instruction {
    pub program_id: Pubkey,
/// Every account the instruction will touch has two flags: 
/// is_signer for whether the account must be a signer for this instruction, and
/// is_writable for whether the instruction is allowed to change the account.
    pub accounts: Vec<AccountMeta>,
    pub data: Vec<u8>,
}
```

The validator uses the instruction's account metadata to determine whether transactions can run in parallel, which is one reason Solana transactions are fast.

Multiple instructions can be bundled into a single transaction. Transactions invoke programs and modify the blockchain state.

Solana transactions are atomic, meaning either all instructions succeed together or the transaction is rolled back.

```rust
pub struct Transaction {
    pub signatures: Vec<Signature>,
    pub message: Message,
}
```

The signatures field contains the signatures for the Message. Each signature must be signed by the account's private key, starting with the fee payer, which is the account that pays the transaction fees, typically the one that initiated the transaction, such as a transfer of SOL from one crypto wallet to another.

The Message is also a struct, like the Transaction, but it holds the account addresses it touches and all the instructions contained within the transaction. The Message struct also contains the recent blockhash to prove the transaction is fresh and prevent duplicate transactions. Typically, a transaction expires within 90 seconds.

<figure class="article-figure">
  <img src="{{ '/assets/images/solana-programming-concepts-vault/solana-transaction-confirmation.webp' | relative_url }}" alt="Transaction confirmation levels" width="2048" height="367" loading="lazy" decoding="async">
  <figcaption>Transaction confirmation levels</figcaption>
</figure>

Every transaction has fees. The base fee is 5,000 lamports per signature, and there’s also an optional priority fee. If someone wants their transaction to land before others during network congestion, they can pay extra to jump the queue.

## Cross-Program Invocations (CPIs)

When one Solana program calls an instruction on another program during a transaction, it’s called a [cross-program invocation](https://solana.com/docs/core/cpi). Any program on the blockchain can invoke any other program’s instruction.

For example, your program can call the System Program to create an account and transfer SOL, or call the SPL Token Program to move your USDC or USDT from your wallet to another wallet.

CPIs have two functions: invoke and invoke_signed. Use the first when all required signers have already signed the transaction; use the second when the calling program needs to sign on behalf of a PDA derived using its program ID.

## Putting the five concepts together in a simple Solana vault

As part of the prerequisites for joining the [Turbin3 Builders Cohort](https://turbin3.org/institute), I had to complete a [vault program](https://github.com/ShrinathNR/pre-req-vault) written in Rust using Anchor.

The starter program already included instructions to initialize a vault, deposit SOL from the user's wallet, withdraw SOL, and close the vault. My task was to add a cross-program invocation during withdrawal so that, in addition to withdrawing SOL from the vault, my GitHub username would be registered with a separate Turbin3 on-chain program.

Here’s how the five Solana programming concepts fit into this example.

### Vault program and its accounts

The vault program contains the instructions, while separate accounts hold its data and SOL.

| Account             | What it does                                                                                      |
|---------------------|---------------------------------------------------------------------------------------------------|
| user                | The user’s wallet, which signs transactions.                                                      |
| vault_state         | A data account owned by the vault program. It stores the bumps for the two vault-related PDAs.    |
| vault               | A System Program-owned account at a PDA. It holds the deposited SOL.                              |
| application_account | A PDA account used by the separate registration program to store the user’s registration details. |

There’s a difference between vault_state and vault to note. The first stores program data (the two bumps), while the second holds the deposited SOL, which appears in the vault’s account’s lamport balance.

### How the vault program uses PDAs

The program derives the vault_state address using the seed “state” and the user’s public address. It then derives the vault address using “vault” and the vault_state address.

Both the vault_state and vault also use the program’s ID and a bump to derive their addresses.

The state account stores the bumps:

```rust
pub struct VaultState {
    pub vault_bump: u8,
    pub state_bump: u8,
}
```

When a withdrawal is requested, Anchor verifies that the provided accounts match the PDAs derived from the signing user’s public key. This ties the withdrawal to that user’s vault.

### Depositing, withdrawing, and closing

The included TypeScript test suite exercises four instructions, each sending a distinct transaction:

1.  **Initialize:** Creates the vault_state account and stores both bumps.

2.  **Deposit:** Transfers 1 SOL from the user’s wallet to the vault via a System Program CPI.

3.  **Withdraw:** Transfers 0.5 SOL back to the user, then invokes the external registration program. Because both instructions occur within a single transaction, if either fails, the SOL transfer is rolled back. This is the atomic nature of Solana transactions I explained previously.

4.  **Close:** Transfers the remaining SOL balance, closes the state account, and returns the rent deposit to the user.

<figure class="article-figure">
  <img src="{{ '/assets/images/solana-programming-concepts-vault/pre-req-vault-diagram.webp' | relative_url }}" alt="Pre-req-vault program diagram" width="1167" height="867" loading="lazy" decoding="async">
  <figcaption>Pre-req-vault program diagram</figcaption>
</figure>

For the deposit, the user signs the transaction, so the System Program transfers SOL from their wallet.

For the withdrawal, something different happens. The vault is a PDA with no private keys. Instead, the vault program supplies the vault’s seeds and bump via Anchor’s CpiContext::new_with_signer, allowing it to authorize the System Program transfer on the PDA’s behalf.

### The CPI I added

The starter program already processed the withdrawal transfer. Immediately afterward, I added the call to the registration program:

```rust
let registration_account = Initialize {
    user: self.user.to_account_info(),
    account: self.application_account.to_account_info(),
    system_program: self.system_program.to_account_info(),
};

let registration_cpi = CpiContext::new(
    self.application_program.key(),
    registration_account,
);

initialize(
    registration_cpi,
    "kliment-dukovski".to_string(),
)?;
```

First, Initialize groups the accounts required by the registration instruction: the user, the registration account, and the System Program.

Next, CpiContext::new specifies which program to call and which accounts to pass.

Finally, initialize invokes the program with my GitHub username.

The CPI uses the user’s existing transaction signature. It does not need the vault’s PDA signer seeds because it registers the user rather than transferring SOL from the vault.

You can find the [completed version in my repository](https://github.com/kliment-dukovski/pre-req-vault/tree/main). The TypeScript tests are in the /tests folder, while the Rust code is in the programs/pre-req-vault/src folder.

</div>
