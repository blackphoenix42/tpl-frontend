import React from 'react'
import Footer from '../Footer/Footer'
import Games from '../Games/Games'
import Home from '../Home/Home'
import Marketplace from '../Marketplace/Marketplace'
import Navigation from '../Navigation/Navigation'

const Main = () => {
    return (
        <div className="mainComp">
            <div className="navigation">
                <Navigation />
            </div>
            <div className="home" id="home">
                <Home />
            </div>

            <div className="Games" id="games">
                <Games />
            </div>
            <div className="marketplace" id="marketplace">

            </div>
            <div className="marketplace" id="marketplace">
                <Marketplace />
            </div>

            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}

export default Main
