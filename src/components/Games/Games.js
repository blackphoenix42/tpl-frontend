import React from 'react'
import { Link } from 'react-router-dom'
import './Games.css'

const Games = () => {
    return (
        <div className="GamesComp">
            <p id="tagline" style={{marginTop:"7%"}}>PLAY AND WIN!!</p>

            <div className="gameGallery">
                <Link to="/games/about/pacman">
                    <img src="/img/games/pacman.jpg" alt="" width="50%" />
                </Link>
            </div>
            <div className="gameGallery">
                    <img src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/ifekali/phpnD7WS1.png" alt="" width="50%" />
            </div>
        </div>

    )
}

export default Games