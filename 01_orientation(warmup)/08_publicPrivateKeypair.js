import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";

// Generate a new Solana keypair (public + private key)
// This keypair represents a user's identity on the Solana blockchain
const keypair = Keypair.generate();

// Extract the public key as a readable string
// Public key is safe to share and acts like an "address"
const publicKey = keypair.publicKey.toString();

// Extract the secret (private) key
// This must NEVER be shared — it proves ownership and is used for signing
const secretKey = keypair.secretKey;

// Display the keys
console.log("Public Key:", publicKey);
console.log("Private Key (Secret Key):", secretKey);

/*
Public Key: HcSv4xpkC8jfgbgmY695fpKUyACdtRzf3mHk1TGP6yRG

Important notes about key formats:

- Solana uses the ED25519 curve.
- The public key is 32 bytes long (Uint8Array(32)).
- The secret key is 64 bytes long (Uint8Array(64)).

Why is the secret key 64 bytes?
- First 32 bytes → actual private key
- Last 32 bytes  → corresponding public key
- This format is required by tweetnacl for signing

You can verify the public key portion using:
keypair.publicKey.toBytes()
*/

 // Solana public keys are usually displayed in Base58 format
 // Base58 is used because it is shorter and avoids confusing characters
console.log("Solana Public Key", keypair.publicKey.toBase58());
// Example output:
// Solana Public Key He3WFUvKkzswrQxSqDPmTjd9Ru4RpWdE9CP6v5jHQk5q

// Convert the message into bytes
// Cryptographic functions work on binary data, not plain strings
const message = new TextEncoder().encode("hello world");

// Create a digital signature using the private (secret) key
// This proves that the message was signed by the owner of this keypair
// (this step happen on the local machine)
const signature = nacl.sign.detached(message, secretKey);

// Verify the signature using:
// - the original message
// - the signature
// - the public key
// If this returns true, the message is authentic and unmodified (this step happen on the miner)
const result = nacl.sign.detached.verify(
  message,
  signature,
  keypair.publicKey.toBytes(),
);

console.log(result);

// true → signature is valid
