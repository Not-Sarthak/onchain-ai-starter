import { createWalletClient, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts';
import { baseSepolia } from 'viem/chains'

export function createViemWalletClient() {

    if (!process.env.PRIVATE_KEY) {
        throw new Error("PRIVATE_KEY is not set!");
    }

    const account = privateKeyToAccount(process.env.PRIVATE_KEY as `0x${string}`)

    return createWalletClient({
        account,
        chain: baseSepolia,
        transport: http(),
    });
}