import React, { useState } from 'react'
import Profile from '../Profile/Profile'
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
        <div className="nav" >

            <div className="logo" >
                <img src="/img/Logo/black_bg.png" alt="" />
            </div>

            <div className="menu">
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
                <Profile buttonLabel="Open text modal">
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <p>
                        Nullam tincidunt, nisl eget vestibulum rhoncus, elit nisi faucibus
                        quam, sollicitudin posuere massa lacus cursus ligula. Quisque vel
                        turpis a quam posuere lobortis.
                    </p>
                    <p>
                        Aenean risus nunc, pretium eu massa tincidunt, dignissim tincidunt
                        arcu. Integer et mauris vestibulum, pharetra eros nec, feugiat orci.
                    </p>
                </Profile>
            </div>

        </div >
    )
}

export default Navigation
