import React from 'react'
import './Games.css'
let pacman = require('./List/Pacman/index.html')

const Games = () => {
    return (
        <div className="GamesComp">
            <p id="tagline">PLAY AND WIN!!</p>
            <div dangerouslySetInnerHTML={{ __html: pacman }} id="game1"></div>
        </div>

    )
}

export default Games