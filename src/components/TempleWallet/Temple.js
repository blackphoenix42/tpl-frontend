import React from 'react'
import { TempleWallet } from "@temple-wallet/dapp";
import './Temple.css'

const Temple = () => {

    const Wallet = async () => {
        try {
            const available = await TempleWallet.isAvailable();

            if (!available) {
                throw new Error('Temple Wallet not installed');
            }
            const wallet = new TempleWallet('TezosPremiereLeague');
            await wallet.connect('florencenet');

            const Tezos = await wallet.toTezos();
            const userAddress = wallet.pkh || (await wallet.getPKH());

            Tezos.setWalletProvider(wallet);
            localStorage.setItem('isLoggedIn', true)
            localStorage.setItem('userAddress', userAddress)
            window.location.reload()

        } catch (err) {
            console.log(err);
            localStorage.setItem('isLoggedIn', false)
            localStorage.setItem('userAddress', null)
        }

    }

    return (
        <div className="card">
            {
                localStorage.getItem('isLoggedIn') &&
                <div>
                    <div className="avatar">
                        <img src="/img/Avatars/gamer_boy.png" alt="" />
                    </div>

                    <div className="profileInfo">
                        <div className="address">
                            Address: {localStorage.getItem('userAddress')}
                        </div>

                        <div className="levelContainer">
                            Level:
                            <div className="container">
                                <div className="skills level">90%</div>
                            </div>
                        </div>

                        <div className="tier">
                            Tier: BRONZE
                        </div>

                        <div className="nft">
                            NFT:
                            <div className="ipfs">
                                <a target="_blank" href="img/nft/1.svg">
                                    <img src="img/nft/1.svg" alt="" />
                                </a>
                                <a target="_blank" href="img/nft/2.svg">
                                    <img src="img/nft/2.svg" alt="" />
                                </a>
                                <a target="_blank" href="img/nft/3.svg">
                                    <img src="img/nft/3.svg" alt="" />
                                </a>
                                <a target="_blank" href="img/nft/4.svg">
                                    <img src="img/nft/4.svg" alt="" />
                                </a>
                                <a target="_blank" href="img/nft/5.svg">
                                    <img src="img/nft/5.svg" alt="" />
                                </a>
                                <a target="_blank" href="img/nft/6.svg">
                                    <img src="img/nft/6.svg" alt="" />
                                </a>
                                <a target="_blank" href="img/nft/7.svg">
                                    <img src="img/nft/7.svg" alt="" />
                                </a>
                                <a target="_blank" href="img/nft/8.svg">
                                    <img src="img/nft/8.svg" alt="" />
                                </a>
                                <button>LOAD MORE</button>
                            </div>

                        </div>
                    </div>


                </div>
            }
            {
                !localStorage.getItem('isLoggedIn') &&
                <button className="wallet" onClick={Wallet}>CONNECT TO TEMPLE WALLET</button>
            }

        </div>
    )
}

export default Temple
