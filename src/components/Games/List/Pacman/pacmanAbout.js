import React from 'react'
import { Link } from 'react-router-dom'

const pacmanAbout = () => {
    return (
        <div className="aboutGame" style={{ marginBottom: "auto" }}>
            <img style={{ bordeRadius: "4px", padding: "5px", width: "500px", display: "block", marginLeft: "auto", marginRight: "auto", marginTop: "2%" }} src="https://3.bp.blogspot.com/-ZMhIRJl64x0/VhHOFTZ26qI/AAAAAAAAATo/eWPom45ZUXU/s1600/Packman%2Bstrikes%2Bagain.jpg" alt="Pacman" />
            <center>
                <h1>Pacman Rules:</h1>
            </center>
            <div style={{ marginLeft: "15%", marginRight: "15%" }}>
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
                    <Link to="/games/play/pacman"><br /><br />
                        Entry Fee: <span style={{ color: "yellow" }}>5 <strong>PLAY Tokens</strong></span> <br /><br />
                        <button> Click To Play</button>
                    </Link>
                </span>
            </div>

        </div>
    )
}

export default pacmanAbout
