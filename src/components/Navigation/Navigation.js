import React from 'react'
import './Navigation.css'

const Navigation = (props) => {
    const handleProfileClick = () => {

    }

    return (
        <div className="nav">

            <div className="logo">
                <img src="/img/Logo/white_bg.svg" alt="Logo" width="100px" />
            </div>

            <div className="menu">
                <ul className="menuList">
                    <li className="li" id="selected">
                        <a href="#home">HOME</a>
                    </li>

                    <li className="li">
                        <a href="#games">GAMES</a>
                    </li>

                    <li className="li">
                        <a href="#marketplace">MARKETPLACE</a>
                    </li>

                </ul>
            </div>

            <div className="profile">
                <img src="/img/profile.svg" alt="Profile" onClick={handleProfileClick} ></img>
            </div>

        </div>
    )
}

export default Navigation
