

# 🔑 Creating a Public / Private Keypair

This section shows **different ways to generate public–private keypairs**, **sign messages**, and **verify signatures** using popular cryptographic algorithms and libraries.

---

## ✍️ Digital Signatures Overview

* A **private key** is used to **sign** a message
* A **public key** is used to **verify** that signature
* This proves **authenticity** and **ownership** without revealing the private key

![alt text](image-3.png)
---

## 🔐 EdDSA (Edwards-curve Digital Signature Algorithm)

**Curve:** ED25519
**Used in:** Solana
**Library:** `@noble/ed25519`

### Example using `@noble/ed25519`

```js
import * as ed from "@noble/ed25519";

async function main() {
  // Generate a secure random private key
  const privKey = ed.utils.randomPrivateKey();

  // Convert message to bytes
  const message = new TextEncoder().encode("hello world");

  // Derive the public key from the private key
  const pubKey = await ed.getPublicKeyAsync(privKey);

  // Sign the message using the private key
  const signature = await ed.signAsync(message, privKey);

  // Verify the signature using the public key
  const isValid = await ed.verifyAsync(signature, message, pubKey);

  console.log(isValid); // true if signature is valid
}

main();
```

---

## 🔐 EdDSA via Solana SDK

**Library:** `@solana/web3.js`
**Signing Backend:** `tweetnacl`

### Example using `@solana/web3.js`

```js
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";

// Generate a new Solana keypair
const keypair = Keypair.generate();

// Extract public and private keys
const publicKey = keypair.publicKey.toString();
const secretKey = keypair.secretKey;

console.log("Public Key:", publicKey);
console.log("Private Key (Secret Key):", secretKey);

// Convert message to bytes
const message = new TextEncoder().encode("hello world");

// Sign the message
const signature = nacl.sign.detached(message, secretKey);

// Verify the signature
const result = nacl.sign.detached.verify(
  message,
  signature,
  keypair.publicKey.toBytes()
);

console.log(result); // true if valid
```

---

## 🔐 ECDSA (Elliptic Curve Digital Signature Algorithm)

**Curve:** secp256k1
**Used in:** Bitcoin, Ethereum
**Library:** `@noble/secp256k1`

### Example using `@noble/secp256k1`

```js
import * as secp from "@noble/secp256k1";

async function main() {
  // Generate a secure random private key
  const privKey = secp.utils.randomPrivateKey();

  // SHA-256 hash of "hello world"
  const msgHash =
    "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9";

  // Generate public key from private key
  const pubKey = secp.getPublicKey(privKey);

  // Sign the message hash
  const signature = await secp.signAsync(msgHash, privKey);

  // Verify the signature
  const isValid = secp.verify(signature, msgHash, pubKey);

  console.log(isValid); // true if valid
}

main();
```

---

## 🔐 ECDSA via Ethereum (ethers.js)

**Library:** `ethers`
**Curve:** secp256k1

### Example using `ethers`

```js
import { ethers } from "ethers";

// Generate a random Ethereum wallet
const wallet = ethers.Wallet.createRandom();

// Extract keys
const publicKey = wallet.address;      // Ethereum address
const privateKey = wallet.privateKey;  // Private key

console.log("Public Key (Address):", publicKey);
console.log("Private Key:", privateKey);

// Message to sign
const message = "hello world";

// Sign the message
const signature = await wallet.signMessage(message);
console.log("Signature:", signature);

// Verify the signature
const recoveredAddress = ethers.verifyMessage(message, signature);

console.log("Recovered Address:", recoveredAddress);
console.log("Signature is valid:", recoveredAddress === publicKey);
```

---

## 🧠 Quick Mental Model

* **ED25519 (EdDSA)** → fast, safe, modern (Solana)
* **secp256k1 (ECDSA)** → Bitcoin & Ethereum standard
* **Private key** → sign
* **Public key** → verify
* **Signatures** prove identity without revealing secrets


