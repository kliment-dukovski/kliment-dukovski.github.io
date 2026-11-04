---
layout: article
title: How to Create SPL Tokens and NFTs on Solana Using Solana Kit and Metaplex Core
seo_title: Create SPL Tokens & NFTs on Solana with TypeScript
date: '2026-11-04'
last_modified_at: '2026-11-04'
category: Solana
content_type: Technical Writing
publication: Kliment Dukovski
slug: create-spl-tokens-nfts-solana-typescript
permalink: /articles/create-spl-tokens-nfts-solana-typescript/
featured: false
tags:
- Solana programming
- Technical writing
- SPL tokens
- Metaplex Core
summary: A Solana devnet walkthrough for creating, minting, and transferring SPL tokens, then minting and updating
  a Metaplex Core NFT.
description: Create an SPL token, mint and transfer its supply, then mint and update a Metaplex Core NFT on
  Solana devnet using TypeScript, Kit, and Umi.
image: /assets/images/create-spl-tokens-nfts-solana-typescript/turbin3-warrior-featured.webp
image_alt: Armored Turbin3 Warrior with a glowing shield in a neon green city
image_width: 1254
image_height: 760
social_image: /assets/images/create-spl-tokens-nfts-solana-typescript/turbin3-warrior-social.jpg
faq:
- question: Does creating an SPL mint create tokens?
  answer: No. Mint initialization defines the token and sets its supply to zero. Minting instructions added
    later create units and credit a token account.
- question: What is the difference between a wallet and an ATA?
  answer: A wallet provides its user with signing authority, while an ATA records the balance for a specific
    mint. An ATA is derived from the wallet, mint, and Token Program addresses. Basically, the wallet authorizes
    spending from the account (ATA) where the tokens are located. A wallet can have multiple ATAs for various
    tokens like USDC, USDT, JUP, etc.
- question: Does a Metaplex Core NFT need an SPL token account?
  answer: No. Core stores ownership in the Asset account. This is different from Metaplex Token Metadata, which
    uses an SPL mint and token account.
- question: Is an NFT’s image stored on Solana?
  answer: Not in this example. The Core Asset stores a metadata URI. The JSON at that URI contains a link to
    the uploaded PNG, which in our case was stored on Irys, a decentralized data storage solution. The walkthrough
    uses the Irys devnet for test uploads. The site’s featured image is hosted separately.
---

<link rel="stylesheet" href="{{ '/assets/css/solana-programming-concepts.css' | relative_url }}?v={{ site.github.build_revision }}">

<div class="solana-programming-body" markdown="1">

*A devnet walkthrough using Solana Kit, Umi, and Metaplex Core, based on my Turbin3 token and NFT examples.*

To create an SPL token with TypeScript, you create a mint account that identifies the token and stores its supply, decimals, and who can mint and freeze tokens. When creating NFTs via Metaplex Core, you upload the image and metadata, then create an Asset account that records ownership and the metadata URI (a Uniform Resource Identifier that points to an off-chain JSON metadata file).

In the first week of the Turbin3 Builders Cohort, we worked on a TypeScript project to create a six-decimal token, mint 1,000 tokens, transfer 100 to another wallet, attach metadata, and create and update an NFT. The [completed repository](https://github.com/kliment-dukovski/turbine-spl-nft-26) is based on [ShrinathNR’s starter project](https://github.com/ShrinathNR/turbine-spl-nft-26), which provided the project structure, while I implemented the missing operations and added the NFT update script.

Of course, this is not the only way to mint and launch tokens and NFTs on Solana. You can do so via CLI tools or token and NFT launchpads. But that goes beyond the scope of this article. Here, I’ll focus on Solana Kit, a modular JavaScript and TypeScript SDK for token account creation, minting, and transfers, and Metaplex Core, an NFT standard for minting NFTs and adding metadata.

## How SPL tokens work

SPL stands for Solana Program Library. The [Token Program](https://solana.com/docs/tokens) defines how SPL tokens are minted, transferred, and burned.

Tokens can be created by two programs on Solana: the Token Program and the Token Extension Program, also known as Token 2022. Think of the first as Solana's original program for creating tokens, while the second is a newer program that adds extra features, such as transfer fees, through *extensions*. In my example, I use the original Token Program.

Tokens that function as currencies are fungible, meaning they are interchangeable and all have the same value. When I send 100 units of my example token, the recipient receives a balance of 100. None of these 100 tokens has a separate identity, just like your \$10 bill; no matter which one you hold, it has the same \$10 value.

Non-fungible tokens (NFTs), on the other hand, are unique. Each NFT has its own identity, even when it shares traits with others in a collection. Think of NFTs like art pieces, where each one is different from the others. However, NFTs aren't limited to art. Because each one is unique, they can be used as event tickets or forms of ID.

Before we get to the code, there are four terms to understand that will make the code easier to follow.

| Term                           | What it does                                                                                                                   | In this project                                     |
|--------------------------------|--------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|
| Mint account                   | The token’s blueprint; it identifies it and stores supply, decimals, and authorities                                           | One mint defines the fungible token                 |
| Token account                  | Holds units of a specific mint and records the authority that can spend them | Sender and recipient are two separate accounts      |
| Associated Token Account (ATA) | A token account at a predictable address derived from the wallet address, mint address, and Token Program ID                   | Sender and recipient each have an ATA for this mint |
| Wallet signer                  | Uses wallet’s keys to sign (authorize) transactions                                                                            | The project wallet pays and signs transactions      |

A single mint identifies the token. Multiple token accounts can hold units of that mint, and a wallet can control more than one token account.

## Set up the project

You need basic knowledge of JavaScript or TypeScript, [Node.js](https://nodejs.org/) and npm, Git, and a Solana CLI for wallet and funding commands. You also need an image for the NFT. I used Turbin3 Warrior.png.

Clone the instructor’s starter project and select the fixed revision used in this walkthrough.

```bash
git clone https://github.com/ShrinathNR/turbine-spl-nft-26.git
cd turbine-spl-nft-26
git switch -c my-token-nft-walkthrough 211ca3a97e0700201a85ee1a6cc5bcbc21a15e5e
npm ci
```

### Create and fund your project wallet

In a fresh clone without an existing project keypair, run:

```bash
solana-keygen new --outfile ./devnet-wallet.json
solana address --keypair ./devnet-wallet.json
solana airdrop 2 --keypair ./devnet-wallet.json --url devnet
solana balance --keypair ./devnet-wallet.json --url devnet
```

If you can’t get your 2 SOL, visit the [Solana faucet](https://faucet.solana.com/) and request devnet SOL using your Solana public address.

### Run order and code changes

The starter includes sample Solana addresses and URIs, along with commented placeholders that you’ll need to replace with your own account addresses.

Here’s what you need to change in each script before you run it:

| **Step**            | **Command**                       | **Input to replace**                         |
|---------------------|-----------------------------------|----------------------------------------------|
| Create mint         | npm run spl:init                  | Project wallet                               |
| Mint supply         | npm run spl:mint                  | New mint address                             |
| Transfer tokens     | npm run spl:transfer              | New mint and recipient wallet                |
| Add token metadata  | npm run spl:metadata              | New mint, name, and symbol                   |
| Upload image        | npm run nft:image                 | Local image path                             |
| Upload NFT metadata | npm run nft:metadata              | Image URI and descriptive text               |
| Create NFT          | npm run nft:mint                  | Metadata URI and NFT name                    |
| Update NFT          | npx ts-node src/nft/nft_update.ts | Your existing Asset and revised metadata URI |

### Create an SPL token mint

Open src/spl/spl_init.ts in the starter code. The import, devnet connections, wallet import, and async function are already in place. You need to modify the try block first.

```typescript
(async () => {
  try {
  } catch (error) {
    console.log(error);
  }
})();
```

I added pipe and assertIsSendableTransaction to the existing import from @solana/kit. I inserted the following code block:

```typescript
const signer = await createKeyPairSignerFromBytes(
  new Uint8Array(wallet)
);

const mint = await generateKeyPairSigner();
```

new Uint8Array(wallet) converts the wallet bytes into the format Kit expects, enabling the signer to authorize transactions. Generating the mint keypair creates the keys and address locally; there’s no account on Solana yet.

Add the storage and funding calculation next:

```typescript
const space = getMintSize();
const rent = await rpc
  .getMinimumBalanceForRentExemption(BigInt(space))
  .send();
```

The size was 82 bytes, and the minimum balance was 0.0010668 SOL (1,066,800 lamports). This is the account’s rent-exempt funding, which the code queries.

Next, add the two instructions to create and configure the account:

```typescript
const createAccountIx = getCreateAccountInstruction({
  payer: signer,
  newAccount: mint,
  lamports: rent,
  space: BigInt(space),
  programAddress: TOKEN_PROGRAM_ADDRESS,
});

const initializeMintIx = getInitializeMintInstruction({
  mint: mint.address,
  decimals: 6,
  mintAuthority: signer.address,
  freezeAuthority: signer.address,
});
```

The System Program creates the account, allocates storage, and assigns it to the Token Program. The Token Program then initializes it as a mint. Both instructions are included in the same transaction.

| **Setting**      | **Value**      | **Meaning**                                      |
|------------------|----------------|--------------------------------------------------|
| Decimals         | 6              | One token equals 1,000,000 base units            |
| Mint authority   | Project wallet | Can authorize additional supply                  |
| Freeze authority | Project wallet | Can freeze and thaw token accounts for this mint |
| Initial supply   | 0              | No token units have been minted yet              |

### Build, sign, and send the transaction 

Under the instructions, add the recent blockhash request and message construction using Kit’s pipe helper.

```typescript
const { value: latestBlockhash } = await rpc
  .getLatestBlockhash()
  .send();

const transactionMessage = pipe(
  createTransactionMessage({ version: 0 }),
  (tx) => setTransactionMessageFeePayerSigner(signer, tx),
  (tx) => setTransactionMessageLifetimeUsingBlockhash(latestBlockhash, tx),
  (tx) => appendTransactionMessageInstructions(
    [createAccountIx, initializeMintIx],
    tx,
  ),
);
```

Each function in the pipe returns the message for the next step. First, we create an empty message (TransactionMessage), choose the fee payer (setTransactionMessageFeePayerSigner), set its lifetime (setTransactionMessageLifetimeUsingBlockhash), and append the instructions. We use the recent blockhash to limit how long the transaction remains valid.

Finally, we add signing, sending, and result logging.

```typescript
const signedTransaction =
  await signTransactionMessageWithSigners(transactionMessage);

assertIsSendableTransaction(signedTransaction);
assertIsTransactionWithBlockhashLifetime(signedTransaction);

const transactionSignature = getSignatureFromTransaction(signedTransaction);

const sendAndConfirmTransaction = sendAndConfirmTransactionFactory({
  rpc,
  rpcSubscriptions,
});

await sendAndConfirmTransaction(signedTransaction, {
  commitment: "confirmed",
});

console.log("Mint created:", mint.address);
console.log("Transaction signature:", transactionSignature);
```

The project wallet signs to pay for creation and fees, while the mint keypair signs to authorize account creation. The assertion checks the transaction’s signatures, size, and lifetime type, but it doesn’t submit the transaction. The final call submits the transaction and waits for confirmation.

This pattern comes from [Kit without a client](https://www.solanakit.com/docs/advanced-guides/kit-without-a-client). Other starter files build the message using intermediate variables instead of pipe, but both approaches use the same kind of instructions. My reference solution uses a named main() function, but that change isn’t required for the task.

Run npm run spl:init once. My output created:

Mint created: Hp7KFNPivkxYsVfkDxwevzU3g5fNnBQn7JNLfonCczcV

Save your own mint address to use it in the next TS file.

### Mint 1,000 tokens

Open src/spl/spl_mint.ts in your starter clone and replace the sample address inside const mint = address(...) with the mint you created in the previous step.

Replace the incomplete placeholders with:

```typescript
const createAtaIx = await getCreateAssociatedTokenInstructionAsync({
  payer: signer,
  mint,
  owner: signer.address,
  tokenProgram: TOKEN_PROGRAM_ADDRESS,
});
```

Here, the getCreateAssociatedTokenInstructionAsync call builds an instruction to create and initialize the token account.

Now, replace the second placeholder.

```typescript
const mintToIx = getMintToInstruction({
  mint,
  token: ata,
  mintAuthority: signer,
  amount: 1_000n * token_decimals,
});
```

Uncomment the sections that follow, ending at the console.log line. Once done, run: npm run spl:mint. My ATA was: 6sNBBsJn5ZPwofH2D3BfsnUEjYUMWHpA3nHsdtqy1fCu

### Transfer 100 tokens

Open src/spl/spl_transfer.ts. Replace the sample mint in const mint = address(...) with your mint, and the sample recipient in const to = address(...) with a second wallet’s public address. I sent the tokens to the same address that was already in the starter.

Now, find the commented placeholders and replace them with the recipient-account creation and transfer instructions.

```typescript
const createAtaIx = await getCreateAssociatedTokenInstructionAsync({
  payer: signer,
  mint,
  owner: to,
  tokenProgram: TOKEN_PROGRAM_ADDRESS,
});

const transferTx = getTransferCheckedInstruction({
  source: fromAta,
  mint,
  destination: toAta,
  authority: signer,
  amount: 100n * 1_000_000n,
  decimals: 6,
});
```

The sender funds the new ATA, but the recipient controls the tokens. Uncomment all sections up to the end.

Run npm run spl:transfer. On a fresh run with the starting balances shown here, the sender’s balance goes from 1,000 to 900 and the recipient’s balance goes from 0 to 100.

### Add token metadata

The mint is the token’s ID, which holds the total number of tokens and determines who can mint new tokens or freeze them. But the mint doesn’t have a token name or symbol yet.

Open src/spl/spl_metadata.ts. This one uses Metaplex Token Metadata to create a separate metadata account associated with the token.

Replace the sample address in const mint = publicKey(...) with your mint address.

In this step, we’re introduced to Umi, Metaplex’s client framework. It loads the project’s keypair and configures it as the signing and payment identity. Kit and Umi have different APIs, so this file uses Umi’s publicKey() helper for the mint address.

Find the commented placeholders and add your token name and symbol:

```typescript
const data: DataV2Args = {
  name: "KD Token",
  symbol: "KDT",
  uri: "",
  sellerFeeBasisPoints: 0,
  creators: null,
  collection: null,
  uses: null,
};

const args: CreateMetadataAccountV3InstructionArgs = {
  data,
  isMutable: true,
  collectionDetails: null,
};
```

| **Field**            | **Purpose**                                                                 |
|----------------------|-----------------------------------------------------------------------------|
| name and symbol      | Human-readable labels                                                       |
| uri                  | Link to external metadata JSON, empty in this example                       |
| sellerFeeBasisPoints | Royalty field set to zero here                                              |
| isMutable            | Allows metadata data fields to remain editable by the appropriate authority |
| collectionDetails    | Collection-parent settings, unused here                                     |

Continue to uncomment everything else in this code and run npm run spl:metadata, and check the metadata creation transaction.

## Mint an NFT with Metaplex Core

NFTs are individually identifiable assets, each unique within a collection. For this example, I used a Turbin3 Warrior NFT in a cyberpunk landscape. The NFT account records ownership and links to its metadata.

[Metaplex Core](https://www.metaplex.com/docs/smart-contracts/core/what-is-an-asset) uses a different account model than the fungible token we created. A Core NFT stores the owner, token name, URI, and update authority in an Asset account. Unlike the tokens we already made, these NFTs don’t require a separate SPL mint or ATA.

| **Detail**           | **Our SPL token**                                  | **Our Core NFT**                                   |
|----------------------|----------------------------------------------------|----------------------------------------------------|
| Identifier           | Mint address                                       | Asset address                                      |
| Ownership record     | Balance and authority in token accounts            | Owner field in the Asset                           |
| Supply creation      | Mint units into a token account                    | Create a distinct Asset                            |
| Metadata arrangement | Separate Metaplex metadata account in this example | Name and URI in the Asset; image/details off-chain |
| ATA required         | Used for our token balances                        | No                                                 |

### Upload the image

Place your image beside package.json and adjust the filenames in the code. I used Turbin3 Warrior.

Open src/nft/nft_image.ts. Here, Umi identity and the Irys devnet uploader are already configured.

Inside the try block, replace the file with the name of your NFT and image path.

```typescript
const image = await readFile("./Turbin3 Warrior.png");

const file = createGenericFile(image, "turbin3-warrior.png", {
  contentType: "image/png",
});

const [myUri] = await umi.uploader.upload([file]);
console.log("Your image URI: ", myUri);
```

readFile reads local bytes, while createGenericFile wraps them with a filename and content type for Umi. The Irys uploader uploads the file and returns a URI.

Run npm run nft:image. Your URI will point directly to the uploaded PNG. Open it to see the artwork. Note: no NFT has been created yet.

### Upload metadata JSON

Next, open src/nft/nft_metadata.ts and replace the sample value in the const image declaration with your URI.

Replace the commented placeholders with the object and upload call.

```typescript
const image =
  "https://gateway.irys.xyz/4mCPrPLWaHGRWAzGV3PJpK7oymuzaPqEywX2WquXXXX6";

const metadata = {
  name: "Turbin3 Warrior",
  description:
    "A cyberpunk warrior carrying a Turbin3 shield. Created for my Turbin3 MPL Core assignment.",
  image,
  category: "image",
};

const myUri = await umi.uploader.uploadJson(metadata);
console.log(`metadata uri: ${myUri}`);
```

Run npm run nft:metadata and open the returned URI. It should have a JSON containing the correct image link.

### Create the Core Asset

Open src/nft/nft_mint.ts and replace the existing metadataUri with your newly uploaded metadata URI.

Replace the commented create placeholder with the call below, then uncomment the signature and log lines.

```typescript
const asset = generateSigner(umi);

const tx = await create(umi, {
  asset,
  name: "Turbin3 Warrior",
  uri: metadataUri,
}).sendAndConfirm(umi);

const signature = base58.deserialize(tx.signature)[0];
console.log(`signature ${signature} , asset : ${asset.publicKey}`);
```

generateSigner creates the new Asset keypair, while create builds the Core creation instruction. The final call signs, sends, and confirms, following [Metaplex’s Core creation flow](https://www.metaplex.com/docs/smart-contracts/core/create-asset).

Run npm run nft:mint to get your Asset address. Check the owner, name, URI, and update authority. Save these values before updating the NFT.

### Update the NFT name and metadata

The final task was to update the NFT using its update authority. Ownership and update authority are separate permissions, even when the same wallet holds both.

First, change the JSON in nft_metadata.ts.

```typescript
const metadata = {
  name: "Turbin3 Warrior 2",
  description:
    "An upgraded Turbin3 Warrior. Metadata update to demonstrate how an update authority can change a Metaplex Core NFT's name and metadata.",
  image,
  category: "image",
};
```

Run npm run nft:metadata again to upload the new JSON file. This action doesn’t rewrite the earlier file or update the NFT yet. My revised URI was: [https://gateway.irys.xyz/DHNmq2uG6NJ3GtnMAYETivM4j498qYUwfSk9wcua4tjR](https://gateway.irys.xyz/DHNmq2uG6NJ3GtnMAYETivM4j498qYUwfSk9wcua4tjR)

The starter has no NFT update file, so you need to create one. Create src/nft/nft_update.ts and add this complete script, which reuses the mint script’s Umi setup with publicKey, fetchAsset, and update for working with an existing Asset. Replace the Asset address and revised URI with your own before running the script.

```typescript
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import wallet from "../../devnet-wallet.json";
import {
  createSignerFromKeypair,
  publicKey,
  signerIdentity,
} from "@metaplex-foundation/umi";
import { fetchAsset, update, mplCore } from "@metaplex-foundation/mpl-core";
import { base58 } from "@metaplex-foundation/umi/serializers";

const umi = createUmi(
  process.env.SOLANA_RPC_URL ?? "https://api.devnet.solana.com",
);

const keypair = umi.eddsa.createKeypairFromSecretKey(new Uint8Array(wallet));
const signer = createSignerFromKeypair(umi, keypair);

umi.use(signerIdentity(signer));
umi.use(mplCore());

(async () => {
  try {
    // Use your existing NFT's address, rather than generating a new one.
    const assetAddress = publicKey(
      "14QusHcREFFFE5roxtMHTeM9BJj9zmuXqNUGN4KX6kHJ"
    );

    const asset = await fetchAsset(umi, assetAddress);

    const tx = await update(umi, {
      asset,
      name: "Turbin3 Warrior 2",
      uri: "https://gateway.irys.xyz/DHNmq2uG6NJ3GtnMAYETivM4j498qYUwfSk9wcua4tjR",
    }).sendAndConfirm(umi);

    const signature = base58.deserialize(tx.signature)[0];
    console.log("Update signature:", signature);
    console.log("Updated asset:", asset.publicKey);
  } catch (error) {
    console.log("error", error);
  }
})();
```

Run npx ts-node src/nft/nft_update.ts. This should update the on-chain name and URI of your NFT while keeping the same image as the revised JSON still points to it.

## Frequently asked questions

### Does creating an SPL mint create tokens?

No. Mint initialization defines the token and sets its supply to zero. Minting instructions added later create units and credit a token account.

### What is the difference between a wallet and an ATA?

A wallet provides its user with signing authority, while an ATA records the balance for a specific mint. An ATA is derived from the wallet, mint, and Token Program addresses. Basically, the wallet authorizes spending from the account (ATA) where the tokens are located. A wallet can have multiple ATAs for various tokens like USDC, USDT, JUP, etc.

### Does a Metaplex Core NFT need an SPL token account?

No. Core stores ownership in the Asset account. This is different from Metaplex Token Metadata, which uses an SPL mint and token account.

### Is an NFT’s image stored on Solana?

Not in this example. The Core Asset stores a metadata URI. The JSON at that URI contains a link to the uploaded PNG, which in our case was stored on Irys, a decentralized data storage solution. The walkthrough uses the Irys devnet for test uploads. The site’s featured image is hosted separately.

</div>
