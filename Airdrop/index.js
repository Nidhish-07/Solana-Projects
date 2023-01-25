import { Connection, PublicKey, clusterApiUrl, Keypair, LAMPORTS_PER_SOL } from "@solana/web3.js"

const wallet = new Keypair()

const publicKey = new PublicKey(wallet._keypair.publicKey)
const privateKey = wallet._keypair.secretKey

console.log(publicKey,privateKey);