import { Connection, PublicKey, clusterApiUrl, Keypair, LAMPORTS_PER_SOL } from "@solana/web3.js"

const wallet = new Keypair()

const publicKey = new PublicKey(wallet._keypair.publicKey)
// const privateKey = wallet._keypair.secretKey

const getBalance = async () => {
    try {
        const connection = new Connection(clusterApiUrl('devnet'), 'confirmed')
        const walletBalance = await connection.getBalance(publicKey)
        console.log("Wallet Balance: " + walletBalance);
    } catch (error) {
        console.log(error);
    }
}

const airDropSol = async () => {
    try {
        const connection = new Connection(clusterApiUrl('devnet'), 'confirmed')
        const airDropSignature = await connection.requestAirdrop(publicKey, 1 * LAMPORTS_PER_SOL)
        await connection.confirmTransaction({ signature: airDropSignature })
    } catch (error) {

    }
}

const main = async () => {
    await getBalance()
    await airDropSol()
    await getBalance()
}

main()