import React from 'react'
import { Link } from 'react-router-dom'
import './Games.css'



const Games = () => {

    return (
        <div className="GamesComp">
            <p id="tagline" style={{ marginTop: "7%" }}>PLAY TO WIN!!</p> <br /><br /><br /><br />

            <div id="carouselExampleIndicators" className="carousel slide w-50" data-ride="carousel" style={{ display: 'block', marginRight: 'auto', marginLeft: 'auto' }}>
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <Link to="/games/about/pacman">
                            <img src="https://raw.githubusercontent.com/blackphoenix42/tpl-frontend/master/public/img/games/pacman.png" className="d-block w-100" alt="" />
                        </Link>
                    </div>
                    <div className="carousel-item">
                        <img src="https://raw.githubusercontent.com/blackphoenix42/tpl-frontend/master/public/img/games/chess.png" className="d-block w-100" alt="" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://raw.githubusercontent.com/blackphoenix42/tpl-frontend/master/public/img/games/carrom.png" className="d-block w-100" alt="" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://raw.githubusercontent.com/blackphoenix42/tpl-frontend/master/public/img/games/snake.png" className="d-block w-100" alt="" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>

    )
}

export default Games