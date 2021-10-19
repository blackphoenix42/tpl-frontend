import React from 'react'
import { Link } from 'react-router-dom'

const pacmanAbout = () => {
    return (
        <div className="aboutGame">
            <h1>About Pacman:</h1>
            <p>
                Pac-Man is an action maze chase video game; the player controls the eponymous character through an enclosed maze. The objective of the game is to eat all of the dots placed in the maze while avoiding four colored ghosts — Blinky (red), Pinky (pink), Inky (cyan), and Clyde (orange) — that pursue him. When Pac-Man eats all of the dots, the player advances to the next level. If Pac-Man makes contact with a ghost, he will lose a life; the game ends when all lives are lost. Each of the four ghosts have their own unique, distinct artificial intelligence (A.I.), or "personalities"; Blinky gives direct chase to Pac-Man, Pinky and Inky try to position themselves in front of Pac-Man, usually by cornering him, and Clyde will switch between chasing Pac-Man and fleeing from him.

                Placed at the four corners of the maze are large flashing "energizers", or "power pellets". Eating these will cause the ghosts to turn blue with a dizzied expression and reverse direction. Pac-Man can eat blue ghosts for bonus points; when eaten, their eyes make their way back to the center box in the maze, where the ghosts "regenerate" and resume their normal activity. Eating multiple blue ghosts in succession increases their point value. After a certain amount of time, blue-colored ghosts will flash white before turning back into their normal, lethal form. Eating a certain number of dots in a level will cause a bonus item - usually in the form of a fruit – to appear underneath the center box, which can be eaten for bonus points.

                The game increases in difficulty as the player progresses; the ghosts become faster and the energizers' effect decreases in duration to the point where the ghosts will no longer turn blue and edible. To the sides of the maze are two "warp tunnels", which allow Pac-Man and the ghosts to travel to the opposite side of the screen. Ghosts become slower when entering and exiting these tunnels. Levels are indicated by the fruit icon at the bottom of the screen.
            </p>

            <div className="playButton">
                <Link to="/games/play/pacman">
                    <button> Click To Play</button>
                </Link>
            </div>
        </div>
    )
}

export default pacmanAbout
