import React from 'react'
import { Link } from 'react-router-dom'
import './Games.css'

const Games = () => {
    return (
        <div className="GamesComp" >
            <p id="tagline">PLAY AND WIN!!</p>

            <div className="gameGallery">
                <Link to="/games/about/pacman">
                    <img src="/img/games/pacman.jpg" alt="" width="50%" />
                </Link>
            </div>
        </div>

    )
}

export default Games