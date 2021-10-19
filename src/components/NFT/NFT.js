import { TezosToolkit } from '@taquito/taquito'
import { bytes2Char } from '@taquito/utils'

const Tezos = new TezosToolkit("https://florencenet.api.tez.ie")

const getUserNfts = async (address) => {
    const contract = await Tezos.wallet.at(process.env.REACT_APP_CONTRACT_ADDRESS)
    const nftStorage = await contract.storage()
    const getTokenIds = await nftStorage.reverse_ledger.get(address)

    if (getTokenIds) {
        const userNfts = await Promise.all([
            getTokenIds.map(async id => {
                const tokenId = id.toNumber()
                const metadata = await nftStorage.token_metadata.get(tokenId)
                const tokenInfoBytes = metadata.token_info.get("")
                const tokenInfo = bytes2Char(tokenInfoBytes)
                return {
                    tokenId,
                    ipfsHash: tokenInfo.slice(0, 7) === "ipfs://" ? tokenInfo.slice(7) : null

                }
            })
        ])

        return userNfts
    }
}

export default getUserNfts
