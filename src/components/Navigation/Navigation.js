import React, { useState } from 'react'
import Profile from '../Profile/Profile'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './Navigation.css'

const Navigation = () => {
    const [activeHome, setActiveHome] = useState(true)
    const [activeGame, setActiveGame] = useState(false)
    const [activeMarket, setActiveMarket] = useState(false)

    const toggleClass = (e) => {
        if (e.target.childNodes[0].data === "HOME") {
            setActiveHome(true); setActiveGame(false); setActiveMarket(false);
        } else if (e.target.childNodes[0].data === "GAMES") {
            setActiveHome(false); setActiveGame(true); setActiveMarket(false);
        } else {
            setActiveHome(false); setActiveGame(false); setActiveMarket(true);
        }
    }

    return (
        <div className="navigation" >

            <div className="logo" >
                <img src="/img/Logo/black_bg.png" alt="" />
            </div>

            <div className="menu">
                {/* <Stack direction="row" spacing={2} >
                    <Button href="#home" style={{ fontFamily: 'Gladerglynn Titling', fontSize: '20px' }}>Home</Button>
                    <Button href="#games" style={{ fontFamily: 'Gladerglynn Titling', fontSize: '20px' }}>Games</Button>
                    <Button href="#marketplace" style={{ fontFamily: 'Gladerglynn Titling', fontSize: '20px' }}>Marketplace</Button>
                </Stack> */}
                <ul className="menuList">
                    <li className="li" id={activeHome ? 'selected' : null} onClick={toggleClass} >
                        <a href="#home" >HOME</a>

                    </li>

                    <li className="li" id={activeGame ? 'selected' : null} onClick={toggleClass} >
                        <a href="#games">GAMES</a>
                    </li>

                    <li className="li" id={activeMarket ? 'selected' : null} onClick={toggleClass} >
                        <a href="#marketplace">MARKETPLACE</a>
                    </li>

                </ul>
            </div>

            <div className="profile">
                <Profile />
            </div>

        </div >
    )
}

export default Navigation
