import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <div className="homeComp">

            <div className="tplContainer">
                <p className="title">
                    <span className="tez">TEZOS</span><br />
                    PREMIERE<br />
                    LEAGUE
                </p>
                <p className="tplAbout">
                    TPL Platform aims to develop a platform where players can play games online on a decentralized platform. Players can win/purchase Non-Fungible Tokens (NFTs) which they can showcase/trade on their profile. Game Developers interested to host games can collaborate with the TPL Platform to develop and deploy game on TPL Platform.
                </p>
            </div>

            <div className="person">
                <img src="/img/extras/joystick.svg" alt="Person with Joystick" className="joystick"></img>
            </div>
        </div>
    )
}
export default Home

