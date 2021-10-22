import React, { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useHistory } from 'react-router-dom';
import { TempleWallet } from "@temple-wallet/dapp";
import Button from '@mui/material/Button';
import './Marketplace.css';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#000000bb',
    boxShadow: 24,
    color: 'white',
    textAlign: 'center',
    p: 4,
};


const Marketplace = () => {
    const [open, setOpen] = useState(false);

    const [message, setMessage] = useState("Click To Buy");
    const history = useHistory();
    const [nftName, setNftName] = useState();
    const [nftAmount, setNftAmount] = useState();
    const [address, setAddress] = useState();
    const [nftImage, setImage] = useState();
    const handleOpen = (name, amount, address, imageurl) => {
        setNftName(name);
        setNftAmount(amount);
        setAddress(address);
        setImage(imageurl);
        setOpen(true);
    }
    const handleClose = () => setOpen(false);

    const makeTransaction = async () => {
        try {
            setMessage("Connecting to Wallet");
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
            setMessage(`Transfering NFT amount ...`);
            Tezos.wallet
                .at('KT1HnJ8RrPLKkRXzkxDfYXD28RgsC2n63BcR')
                .then((contract) => contract.methods.transfer(userAddress, 'KT1HnJ8RrPLKkRXzkxDfYXD28RgsC2n63BcR', nftAmount).send())
                .then((op) => {
                    setMessage("Waiting for Confirmation ...")
                    console.log(`Hash: ${op.opHash}`);
                    return op.confirmation();
                })
                .then((result) => {
                    setMessage("Success");
                    console.log(result);
                    if (result.completed) {
                        console.log(`Transaction correctly processed!
                        Block: ${result.block.header.level}
                        Chain ID: ${result.block.chain_id}`);
                        handleClose();
                        history.push('/#marketplace');
                    } else {
                        console.log('An error has occurred');
                        setMessage("Failed Try Again !");
                        handleClose();
                    }
                })
                .catch((err) => {
                    console.log(err);
                    setMessage("Failed Try Again !");
                    handleClose();
                });


        } catch (err) {
            console.log(err);
            localStorage.setItem('isLoggedIn', false)
            localStorage.setItem('userAddress', null)
            setMessage("Failed Try Again !");
        }
    }
    return (
        <div className="marketplaceComp" style={{ marginTop: "4.5%" }}>

            <p className="marketabout">
                <span id="marketwelcome">Welcome to Marketplace</span> <br />
                Buy, sell, discover and trade the super cool NFT's
            </p>

            <div className="px-lg-5">
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
                        <div className="bg-white rounded shadow-sm"><img src="https://raw.githubusercontent.com/blackphoenix42/tpl-frontend/master/public/img/NFT/pacman.png" alt="" className="img-fluid card-img-top" />
                            <div className="p-4">
                                <h5> <a href="#!" className="text-dark">Inky Ghost</a></h5>
                                <p className="small text-muted mb-0">tz1LXRS2zgh12gbGix6R9xSLJwfwqM9VdpPW</p>
                                <div onClick={() => { handleOpen("Inky Ghost", 170, "tz1LXRS2zgh12gbGix6R9xSLJwfwqM9VdpPW", "https://raw.githubusercontent.com/blackphoenix42/tpl-frontend/master/public/img/NFT/pacman.png") }} className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                                    <p className="small mb-0"><img style={{ width: "15%", height: "15%" }} src="/img/Logo/token.png" alt="PLAY token" /><span className="font-weight-bold">&nbsp;&nbsp;170</span></p>
                                    <div className="badge badge-danger px-3 rounded-pill font-weight-normal">New</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
                        <div className="bg-white rounded shadow-sm"><img src="https://raw.githubusercontent.com/blackphoenix42/tpl-frontend/master/public/img/NFT/pacman_tattoo.png" alt="" className="img-fluid card-img-top" />
                            <div className="p-4">
                                <h5> <a href="#!" className="text-dark">Pacman Tattoo</a></h5>
                                <p className="small text-muted mb-0">tz1LXRS2zgh12gbGix6R9xSLJwfwqM9VdpPW</p>
                                <div onClick={() => { handleOpen("Pacman Tattoo", 1000, "tz1LXRS2zgh12gbGix6R9xSLJwfwqM9VdpPW", "https://raw.githubusercontent.com/blackphoenix42/tpl-frontend/master/public/img/NFT/pacman_tattoo.png") }} className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                                    <p className="small mb-0"><img style={{ width: "15%", height: "15%" }} src="/img/Logo/token.png" alt="PLAY token" /><span className="font-weight-bold">&nbsp;&nbsp;1000</span></p>
                                    <div className="badge badge-primary px-3 rounded-pill font-weight-normal">Trend</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
                        <div className="bg-white rounded shadow-sm"><img src="https://raw.githubusercontent.com/blackphoenix42/tpl-frontend/master/public/img/NFT/Ms_Pacman.png" alt="" className="img-fluid card-img-top" />
                            <div className="p-4">
                                <h5> <a href="#!" className="text-dark">Ms. Pacman</a></h5>
                                <p className="small text-muted mb-0">tz1QuV6ZKSKRpnbr1SXkWpDQec4mzh3iHiMA</p>
                                <div onClick={() => { handleOpen("Ms. Pacman", 1220, "tz1QuV6ZKSKRpnbr1SXkWpDQec4mzh3iHiMA", "https://raw.githubusercontent.com/blackphoenix42/tpl-frontend/master/public/img/NFT/Ms_Pacman.png") }} className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                                    <p className="small mb-0"><img style={{ width: "15%", height: "15%" }} src="/img/Logo/token.png" alt="PLAY token" /><span className="font-weight-bold">&nbsp;&nbsp;1220</span></p>
                                    <div className="badge badge-warning px-3 rounded-pill font-weight-normal text-white">Featured</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
                        <div className="bg-white rounded shadow-sm"><img src="https://raw.githubusercontent.com/blackphoenix42/tpl-frontend/master/public/img/NFT/Pacman_flyer.png" alt="" className="img-fluid card-img-top" />
                            <div className="p-4">
                                <h5> <a href="#!" className="text-dark">Pacman Flyer</a></h5>
                                <p className="small text-muted mb-0">tz1LXRS2zgh12gbGix6R9xSLJwfwqM9VdpPW</p>
                                <div onClick={() => { handleOpen("Pacman Flyer", 1270, "tz1LXRS2zgh12gbGix6R9xSLJwfwqM9VdpPW", "https://raw.githubusercontent.com/blackphoenix42/tpl-frontend/master/public/img/NFT/Pacman_flyer.png") }} className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                                    <p className="small mb-0"><img style={{ width: "15%", height: "15%" }} src="/img/Logo/token.png" alt="PLAY token" /><span className="font-weight-bold">&nbsp;&nbsp;1270</span></p>
                                    <div className="badge badge-success px-3 rounded-pill font-weight-normal">Hot</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
                        <div className="bg-white rounded shadow-sm"><img src="https://raw.githubusercontent.com/blackphoenix42/tpl-frontend/master/public/img/NFT/pacman_spirit.png" alt="" className="img-fluid card-img-top" />
                            <div className="p-4">
                                <h5> <a href="#!" className="text-dark">Spiritful Pacman</a></h5>
                                <p className="small text-muted mb-0">tz1QuV6ZKSKRpnbr1SXkWpDQec4mzh3iHiMA</p>
                                <div onClick={() => { handleOpen("Spiritful Pacman", 150, "tz1QuV6ZKSKRpnbr1SXkWpDQec4mzh3iHiMA", "https://raw.githubusercontent.com/blackphoenix42/tpl-frontend/master/public/img/NFT/pacman_spirit.png") }} className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                                    <p className="small mb-0"><img style={{ width: "15%", height: "15%" }} src="/img/Logo/token.png" alt="PLAY token" /><span className="font-weight-bold">&nbsp;&nbsp;150</span></p>
                                    <div className="badge badge-primary px-3 rounded-pill font-weight-normal">New</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
                        <div className="bg-white rounded shadow-sm"><img src="https://raw.githubusercontent.com/blackphoenix42/tpl-frontend/master/public/img/NFT/arcade_pacman_machine.png" alt="" className="img-fluid card-img-top" />
                            <div className="p-4">
                                <h5> <a href="#!" className="text-dark">Vintage Pacman Arcade</a></h5>
                                <p className="small text-muted mb-0">tz1fdhwQ2ubNgzm3UdAzsFUqp6mevqD8R895</p>
                                <div onClick={() => { handleOpen("Vintage Pacman Arcade", 430, "tz1fdhwQ2ubNgzm3UdAzsFUqp6mevqD8R895", "https://raw.githubusercontent.com/blackphoenix42/tpl-frontend/master/public/img/NFT/arcade_pacman_machine.png") }} className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                                    <p className="small mb-0"><img style={{ width: "15%", height: "15%" }} src="/img/Logo/token.png" alt="PLAY token" /><span className="font-weight-bold">&nbsp;&nbsp;430</span></p>
                                    <div className="badge badge-warning px-3 rounded-pill font-weight-normal text-white">Featured</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
                        <div className="bg-white rounded shadow-sm"><img src="https://bootstrapious.com/i/snippets/sn-gallery/img-7.jpg" alt="" className="img-fluid card-img-top" />
                            <div className="p-4">
                                <h5> <a href="#!" className="text-dark">Game Console</a></h5>
                                <p className="small text-muted mb-0">tz1QuV6ZKSKRpnbr1SXkWpDQec4mzh3iHiMA</p>
                                <div onClick={() => { handleOpen("Game Console", 340, "tz1QuV6ZKSKRpnbr1SXkWpDQec4mzh3iHiMA", "https://bootstrapious.com/i/snippets/sn-gallery/img-7.jpg") }} className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                                    <p className="small mb-0"><img style={{ width: "15%", height: "15%" }} src="/img/Logo/token.png" alt="PLAY token" /><span className="font-weight-bold">&nbsp;&nbsp;340</span></p>
                                    <div className="badge badge-info px-3 rounded-pill font-weight-normal">Hot</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
                        <div className="bg-white rounded shadow-sm"><img src="https://raw.githubusercontent.com/blackphoenix42/tpl-frontend/master/public/img/NFT/clyde_ate_pacman.png" alt="" className="img-fluid card-img-top" />
                            <div className="p-4">
                                <h5> <a href="#!" className="text-dark">Clyde ate Pacman.</a></h5>
                                <p className="small text-muted mb-0">tz1fdhwQ2ubNgzm3UdAzsFUqp6mevqD8R895</p>
                                <div onClick={() => { handleOpen("Clyde ate Pacman", 1020, "tz1fdhwQ2ubNgzm3UdAzsFUqp6mevqD8R895", "https://raw.githubusercontent.com/blackphoenix42/tpl-frontend/master/public/img/NFT/clyde_ate_pacman.png") }} className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                                    <p className="small mb-0"><img style={{ width: "15%", height: "15%" }} src="/img/Logo/token.png" alt="PLAY token" /><span className="font-weight-bold">&nbsp;&nbsp;1020</span></p>
                                    <div className="badge badge-warning px-3 rounded-pill font-weight-normal text-white">Featured</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="py-5 text-right"><a href="#!!" className="btn btn-dark px-5 py-3 text-uppercase">Show me more</a></div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {nftName}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div className="bg-white rounded shadow-sm"><img src={nftImage} alt="IPFS Img" className="img-fluid card-img-top" />
                        </div>
                        to: {address}<br />
                        <Button variant="contained" color="warning" >Marketplace is closed right now.
                        </Button>
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}

export default Marketplace