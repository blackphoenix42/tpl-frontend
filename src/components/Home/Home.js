import React from 'react';
import './Home.css';
import Button from '@mui/material/Button';


const Home = () => {
    return (
        <div className="homeComp">

            <div className="tplContainer" style={{ marginTop: "10%", marginLeft: "8%" }}>
                <p className="title">
                    <span className="tez">ꜩ</span><br />
                    PREMIERE<br />
                    LEAGUE
                </p><br /><br />
                <div className="tplAbout">
                    <ul>
                        <li style={{ color: "#ff8656e0" }}>Flaunt Your Gaming Skills</li>
                        <li style={{ color: "#ffffff" }}>Win Exciting Prizes</li>
                        <li style={{ color: "#a1f703d8" }}>Own amazing Gaming NFT Collectibles</li>
                    </ul>
                    <br />

                    <br />
                    <a href="#games" ><Button variant="contained" color="primary" size="large">Start Gaming</Button></a> &nbsp;&nbsp;&nbsp;
                    <a href="#marketplace" ><Button variant="outlined" color="secondary" size="large">View NFT Marketplace</Button></a>
                </div>
            </div>

            <div className="person">
                <img src="https://raw.githubusercontent.com/blackphoenix42/tpl-frontend/e5ea605a0859d301a6a2883eeae9370fedb2d0a5/public/img/Extras/joystick.svg" alt="Person with Joystick" className="joystick"></img>
            </div>
        </div>
    )
}
export default Home

