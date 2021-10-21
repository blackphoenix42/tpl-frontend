import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { TempleWallet } from "@temple-wallet/dapp";
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

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

const PacmanAbout = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const history = useHistory();
    const [message, setMessage] = useState("Click To Play");
    const makeTransaction = async () => {
        try {
            setMessage("Connecting to Wallet");
            handleOpen();
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
            setMessage(`Transfering Game Fee ...`);
            Tezos.wallet
                    .at('KT1HnJ8RrPLKkRXzkxDfYXD28RgsC2n63BcR')
                    .then((contract) => contract.methods.transfer(userAddress,'KT1HnJ8RrPLKkRXzkxDfYXD28RgsC2n63BcR',5).send())
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
                        history.push('/games/play/pacman');
                    } else {
                        console.log('An error has occurred');
                        setMessage("Failed Try Again !");
                        handleClose();
                        }
                    })
                    .catch((err) => {console.log(err);
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
        <div className="aboutGame" style={{ marginBottom: "auto" }}>
            <img style={{ bordeRadius: "4px", padding: "5px", width: "500px", display: "block", marginLeft: "auto", marginRight: "auto", marginTop: "2%" }} src="https://3.bp.blogspot.com/-ZMhIRJl64x0/VhHOFTZ26qI/AAAAAAAAATo/eWPom45ZUXU/s1600/Packman%2Bstrikes%2Bagain.jpg" alt="Pacman" />
            <center>
                <h1>Pacman Rules:</h1>
            </center>
            <div style={{ marginLeft: "15%", marginRight: "15%", color: "white"}}>
                Rules to Play are as follows:
                <ul> 
                    <li>Pacman, our hero, munches his way around the room, eating all of the Pac-dots.</li>
                    <li>In each corner of the room there is a "Power Pellet", which when Pacman eats one, the Ghosts turn blue or yellow. Pacman can get extra points by eating the Ghosts. The first one is worth 200 points and each additional Ghost eaten is worth double the number of points.</li>
                    <li>When the player reaches 10,000 points, he gets an additional life - but that only happens once during the game.</li>
                </ul>
                These are the rules under which the game is played and yes, although the game itself appears simple and straightforward, it also quite addictive, as once the first level is completed, the player continues onto higher levels.
            </div>

            <div className="playButton">
                <span style={{ color: "white", textAlign: "center", fontSize: "25px" }}>
                    <br /><br />
                        Entry Fee: <span style={{ color: "yellow" }}>5 <strong>PLAY Tokens</strong></span> <br /><br />
                        <button disabled={!(message === "Click To Play" ||  "Failed Try Again !")} onClick={()=> {makeTransaction()}}> {message}</button>

                </span>
                <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {message} <CircularProgress/>
          </Typography>
        </Box>
      </Modal>
            </div>

        </div>
    )
}

export default PacmanAbout
