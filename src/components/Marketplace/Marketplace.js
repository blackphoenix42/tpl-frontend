import React from 'react'
import './Marketplace.css'

const Marketplace = () => {
    return (
        <div className="marketplaceComp">

            <p className="marketabout">
                <span id="marketwelcome">Welcome to Marketplace</span> <br />
                Buy, sell, discover and trade the super cool NFT's
            </p>

            <div className="marketIpfs">
                <a target="_blank" href="img/nft/forest.jpg">
                    <img src="img/nft/forest.jpg" alt="Forest" />
                </a>
                <a target="_blank" href="img/nft/forest.jpg">
                    <img src="img/nft/forest.jpg" alt="Forest" />
                </a>
                <a target="_blank" href="img/nft/forest.jpg">
                    <img src="img/nft/forest.jpg" alt="Forest" />
                </a>
                <a target="_blank" href="img/nft/forest.jpg">
                    <img src="img/nft/forest.jpg" alt="Forest" />
                </a>
                <a target="_blank" href="img/nft/forest.jpg">
                    <img src="img/nft/forest.jpg" alt="Forest" />
                </a>
                <a target="_blank" href="img/nft/forest.jpg">
                    <img src="img/nft/forest.jpg" alt="Forest" />
                </a>
                <a target="_blank" href="img/nft/forest.jpg">
                    <img src="img/nft/forest.jpg" alt="Forest" />
                </a>
                <a target="_blank" href="img/nft/forest.jpg">
                    <img src="img/nft/forest.jpg" alt="Forest" />
                </a>
            </div>
            <button>LOAD MORE</button>
        </div>
    )
}

export default Marketplace
