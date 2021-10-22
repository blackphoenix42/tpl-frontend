import React, { useState, useEffect } from 'react'
import { TempleWallet } from "@temple-wallet/dapp";
import './Temple.css'
import Button from '@mui/material/Button';
import { TezosToolkit } from '@taquito/taquito';
// import { TezBridgeSigner } from '@taquito/tezbridge-signer';
// import { RpcClient } from '@taquito/rpc';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
require('request');

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#00000081',
    boxShadow: 24,
    color: 'white',
    textAlign: 'center',
    p: 4,
};



const Temple = () => {
    const [message, setMessage] = useState("Click To Play");
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [accBal, setAccBal] = useState(0)
    const tezos = new TezosToolkit('https://florencenet.api.tez.ie');
    const [PLAYtoken, setTokBal] = useState(0);
    const [currBlock, setBlock] = useState(566100);
    const [loading, isLoading] = useState(0);
    const [amount, setAmount] = useState();

    tezos.tz
        .getBalance(localStorage.getItem('userAddress'))
        .then((balance) => setAccBal(`${balance.toNumber() / 1000000}`))
        .catch((error) => console.log(error));
    // tezos.setProvider({
    //         signer: new InMemorySigner('edskS2ajPBfbKxkemWneQTpJhw482xcXT1YT4FwZHyQcs4fRbdc5eQxbrEnD2V7gzXc6NAdUjh42ywQZhiQ9ZBkA9GEDtBv5bN'),
    //       });



    useEffect(() => {
        const balanceApi = () => {
            axios.get(`https://rpc.tzkt.io/florencenobanet/chains/main/blocks/${currBlock}/context/big_maps/142822/expruG4cvmeEDvLzVibixXoxC4p8Pip9RnvGyou8vL4uwWdvPfFKE8`)
                .then(res => {
                    setTokBal(res.data.args[1].int)
                })
        }
        balanceApi()

        const interval = setInterval(() => axios.get('https://api.florencenet.tzkt.io/v1/blocks/count')
            .then((block) => {
                setBlock(block.data)
                balanceApi()
            }), 10000)

        return () => {
            clearInterval(interval)
        }

    })


    const getTokenBalance = async () => {
        isLoading(1)
        setMessage("Connecting to Wallet ...");
        handleOpen();
        try {

            const available = await TempleWallet.isAvailable();

            if (!available) {
                setMessage("Temple Wallet not installed");
                throw new Error('Temple Wallet not installed');
            }
            const wallet = new TempleWallet('Tezos Premiere League');
            await wallet.connect('florencenet');

            const Tezos = await wallet.toTezos();
            const userAddress = wallet.pkh || (await wallet.getPKH());

            Tezos.setWalletProvider(wallet);
            localStorage.setItem('isLoggedIn', true)
            localStorage.setItem('userAddress', userAddress)
            setMessage("Getting Tokens ...")
            Tezos.wallet
                .at('KT1HnJ8RrPLKkRXzkxDfYXD28RgsC2n63BcR')
                .then((contract) => contract.methods.mint(userAddress, amount).send({ amount: (amount * 200), mutez: true }))
                .then((op) => {
                    setMessage("Waiting for Confirmation ... ")
                    console.log(`Hash: ${op.opHash}`);
                    return op.confirmation();
                })
                .then((result) => {
                    console.log(result);
                    if (result.completed) {
                        console.log(`Transaction correctly processed!
                        Block: ${result.block.header.level}
                        Chain ID: ${result.block.chain_id}`);
                        setBlock(result.block.header.level)
                        setMessage("Transaction SuccessFul");
                        handleClose();
                    } else {
                        console.log('An error has occurred');
                        handleClose();
                        alert('An error has occurred');
                    }
                })
                .catch((err) => {
                    console.log(err);
                    handleClose();
                    alert('An error has occurred');
                });


        } catch (err) {
            console.log(err);
            localStorage.setItem('isLoggedIn', false)
            localStorage.setItem('userAddress', null)
        }
        isLoading(0)
    }
    const Wallet = async () => {
        try {
            const available = await TempleWallet.isAvailable();

            if (!available) {
                throw new Error('Temple Wallet not installed');
            }
            const wallet = new TempleWallet('Tezos Premiere League');
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

    const onChangeHandler = (event) => {
        const { name, value } = event.currentTarget;

        if (name === 'amount') {
            setAmount(value);

        }
        console.log(amount);
    };

    return (
        <div className="profileCard">
            {
                localStorage.getItem('isLoggedIn') &&
                <div>
                    <div className="avatar">
                        <img src="/img/Avatars/gamer_boy.png" alt="" />
                    </div>

                    <div className="profileInfo">
                        <div className="address">
                            Address: {localStorage.getItem('userAddress')} <br />
                            Account Balance: {(!loading) ? accBal : <CircularProgress />} ꜩ <br />
                            PLAY Token Balance: {(!loading) ? PLAYtoken : <CircularProgress />} PLAY
                        </div>

                        <div className="levelContainer">
                            Level:
                            <div className="skillContainer">
                                <div className="skills level">90%</div>
                            </div>
                        </div>

                        <div className="tier">
                            Tier: BRONZE
                        </div>

                        <div className="nft">
                            NFT:
                            <div className="ipfs">
                                <a target="_blank" href="https://raw.githubusercontent.com/blackphoenix42/tpl-frontend/e5ea605a0859d301a6a2883eeae9370fedb2d0a5/public/img/NFT/1.svg">
                                    <img src="https://raw.githubusercontent.com/blackphoenix42/tpl-frontend/e5ea605a0859d301a6a2883eeae9370fedb2d0a5/public/img/NFT/1.svg" alt="" />
                                </a>
                                <a target="_blank" href="https://raw.githubusercontent.com/blackphoenix42/tpl-frontend/e5ea605a0859d301a6a2883eeae9370fedb2d0a5/public/img/NFT/2.svg">
                                    <img src="https://raw.githubusercontent.com/blackphoenix42/tpl-frontend/e5ea605a0859d301a6a2883eeae9370fedb2d0a5/public/img/NFT/2.svg" alt="" />
                                </a>
                                <a target="_blank" href="https://raw.githubusercontent.com/blackphoenix42/tpl-frontend/e5ea605a0859d301a6a2883eeae9370fedb2d0a5/public/img/NFT/3.svg">
                                    <img src="https://raw.githubusercontent.com/blackphoenix42/tpl-frontend/e5ea605a0859d301a6a2883eeae9370fedb2d0a5/public/img/NFT/3.svg" alt="" />
                                </a>
                                <a target="_blank" href="https://raw.githubusercontent.com/blackphoenix42/tpl-frontend/e5ea605a0859d301a6a2883eeae9370fedb2d0a5/public/img/NFT/4.svg">
                                    <img src="https://raw.githubusercontent.com/blackphoenix42/tpl-frontend/e5ea605a0859d301a6a2883eeae9370fedb2d0a5/public/img/NFT/4.svg" alt="" />
                                </a>
                                <a target="_blank" href="https://raw.githubusercontent.com/blackphoenix42/tpl-frontend/e5ea605a0859d301a6a2883eeae9370fedb2d0a5/public/img/NFT/5.svg">
                                    <img src="https://raw.githubusercontent.com/blackphoenix42/tpl-frontend/e5ea605a0859d301a6a2883eeae9370fedb2d0a5/public/img/NFT/5.svg" alt="" />
                                </a>
                                <a target="_blank" href="https://raw.githubusercontent.com/blackphoenix42/tpl-frontend/e5ea605a0859d301a6a2883eeae9370fedb2d0a5/public/img/NFT/6.svg">
                                    <img src="https://raw.githubusercontent.com/blackphoenix42/tpl-frontend/e5ea605a0859d301a6a2883eeae9370fedb2d0a5/public/img/NFT/6.svg" alt="" />
                                </a>
                                <a target="_blank" href="https://raw.githubusercontent.com/blackphoenix42/tpl-frontend/e5ea605a0859d301a6a2883eeae9370fedb2d0a5/public/img/NFT/7.svg">
                                    <img src="https://raw.githubusercontent.com/blackphoenix42/tpl-frontend/e5ea605a0859d301a6a2883eeae9370fedb2d0a5/public/img/NFT/7.svg" alt="" />
                                </a>
                                <a target="_blank" href="https://raw.githubusercontent.com/blackphoenix42/tpl-frontend/e5ea605a0859d301a6a2883eeae9370fedb2d0a5/public/img/NFT/8.svg">
                                    <img src="https://raw.githubusercontent.com/blackphoenix42/tpl-frontend/e5ea605a0859d301a6a2883eeae9370fedb2d0a5/public/img/NFT/8.svg" alt="" />
                                </a> <br />
                                <input id="standard-basic" label="Number of Tokens" variant="standard" type="number" required
                                    value={amount} name="amount" onChange={(event) => { onChangeHandler(event) }}
                                /> &nbsp;&nbsp;&nbsp;
                                {(!loading) ? <Button variant="contained" size="large" onClick={() => { getTokenBalance() }}>Get tokens</Button> : <CircularProgress />}
                                <br />
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style}>
                                        <Typography id="modal-modal-title" variant="h6" component="h2">
                                            {message} <CircularProgress />
                                        </Typography>
                                    </Box>
                                </Modal>
                                {/* <button>LOAD MORE</button> */}
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
