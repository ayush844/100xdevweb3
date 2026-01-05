
# 🌿 What Is a Fork in a Blockchain?

![Image](https://shardeum.nyc3.cdn.digitaloceanspaces.com/shardeum/2022/09/What-are-the-two-types-of-forks-in-blockchain.jpg)

![Image](https://i0.wp.com/www.mangoresearch.co/wp-content/uploads/2018/06/Block2-LongestChain.png?resize=988%2C526)

![Image](https://i0.wp.com/www.mangoresearch.co/wp-content/uploads/2018/06/Block2-LongestChain-1.png?resize=1085%2C447)

A **fork** happens when **two different blocks are created at the same height** (same position) in the blockchain.

Think of the blockchain as a **single road** that sometimes briefly splits into **two parallel roads**.

---

## 🤔 Why Do Forks Happen?

### 1️⃣ Network Is Decentralized

* Thousands of miners are spread across the world
* Network messages take time to propagate

---

### 2️⃣ Two Miners Find a Block at the Same Time

* Miner A finds Block 100
* Miner B also finds Block 100
* Both blocks are **valid**
* Both get broadcast to the network

Now the chain temporarily looks like this:

```
Block 99
   ├── Block 100A
   └── Block 100B
```

This is called a **temporary (accidental) fork**.

---

## 🧠 Important Point

Forks are **normal** and **expected** in blockchains like Bitcoin.

They are:

* Not attacks
* Not bugs
* Not failures

They happen because of **simultaneous block discovery**.

---

## ⛏️ What Do Miners Do During a Fork?

![Image](https://runonflux.com/wp-content/uploads/2025/10/Screenshot_14-10-2025_141342_chatgpt.com_.jpeg)

![Image](https://static.learnmeabitcoin.com/diagrams/png/blockchain-longest-chain-protection.png)

* Some miners receive **Block 100A first**
* Others receive **Block 100B first**
* Miners continue mining on **the block they saw first**

So now miners are split across two chains.

---

## 🏆 The Longest Chain Rule (Very Important)

### Rule:

> **The chain with the most accumulated Proof of Work wins**

⚠️ Important correction:

* It’s not strictly the *longest by block count*
* It’s the **chain with the most total work**
* But in simple terms → *longest chain*

---

## 🔄 How the Fork Gets Resolved

### Step-by-step resolution:

1️⃣ Two chains exist temporarily
2️⃣ Miners keep mining
3️⃣ One chain gets the **next block first**

Example:

```
Chain A: Block 99 → 100A → 101A
Chain B: Block 99 → 100B
```

Now:

* Chain A is **longer**
* Chain A has **more Proof of Work**

✅ Network accepts **Chain A**
❌ Chain B is abandoned

---

## 🗑️ What Happens to the Losing Block?

![Image](https://static.nicehash.com/marketing%2FChain_orphan_blocks.png)

![Image](https://hashrateindex.com/blog/content/images/2022/02/Bitcoin-Stale-Block-Graphic.png)

* Losing block becomes an **orphan block** (also called **stale block**)
* Transactions inside it:

  * Go back to the mempool
  * Can be mined again later
* Miner who mined the orphan block:

  * Gets **no reward**

---

## 🔐 Why Longest Chain Rule Is Secure

### 1️⃣ Prevents Confusion

Everyone eventually agrees on **one history**

---

### 2️⃣ Makes Attacks Expensive

To rewrite history, an attacker must:

* Redo Proof of Work
* Catch up AND overtake the honest chain

This leads to the famous **51% attack concept**.

---

### 3️⃣ Enables Eventual Consistency

* Temporary disagreement
* Final global agreement

This is why blockchains are called:

> **Eventually consistent systems**

---

## ⏱️ Why Confirmations Matter

Because forks can happen:

* A transaction in the latest block is **not final**
* More blocks added on top = more security

That’s why:

* Bitcoin waits for **~6 confirmations**
* Each confirmation = one more block mined on top

---

## 📝 Exam / Interview Ready Summary

* Forks occur when multiple valid blocks are mined at the same height
* They happen due to network latency and decentralization
* Miners follow the longest (most-work) chain
* Shorter chain is abandoned
* Orphan blocks receive no reward
* Finality increases with confirmations

---

## 🔑 One-Line Explanation (Very Useful)

> A blockchain fork occurs when multiple valid blocks are created simultaneously, and the network resolves it by following the chain with the greatest accumulated proof of work, commonly referred to as the longest chain.

---

