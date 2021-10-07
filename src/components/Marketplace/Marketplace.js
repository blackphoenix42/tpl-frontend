import React from 'react'
import './Marketplace.css'

const Marketplace = () => {
    return (
        <div className="marketplaceComp">

            <p className="marketabout">
                <span id="marketwelcome">Welcome to Marketplace</span> <br />
                Buy, sell, discover and trade the super cool NFT's
            </p>

            <div className="NFT">
                <div className="gallery">
                    <a target="_blank" href="/img/NFT/forest.jpg">
                        <img src="/img/NFT/forest.jpg" alt="Forest" width="600" height="400"></img>
                    </a>
                    <div className="desc">Forest</div>
                </div>

                <div className="gallery">
                    <a target="_blank" href="/img/NFT/forest.jpg">
                        <img src="/img/NFT/forest.jpg" alt="Forest" width="600" height="400"></img>
                    </a>
                    <div className="desc">Forest</div>
                </div>

                <div className="gallery">
                    <a target="_blank" href="/img/NFT/forest.jpg">
                        <img src="/img/NFT/forest.jpg" alt="Forest" width="600" height="400"></img>
                    </a>
                    <div className="desc">Forest</div>
                </div>

                <div className="gallery">
                    <a target="_blank" href="/img/NFT/forest.jpg">
                        <img src="/img/NFT/forest.jpg" alt="Forest" width="600" height="400"></img>
                    </a>
                    <div className="desc">Forest</div>
                </div>

                <div className="gallery">
                    <a target="_blank" href="/img/NFT/forest.jpg">
                        <img src="/img/NFT/forest.jpg" alt="Forest" width="600" height="400"></img>
                    </a>
                    <div className="desc">Forest</div>
                </div>

                <div className="gallery">
                    <a target="_blank" href="/img/NFT/forest.jpg">
                        <img src="/img/NFT/forest.jpg" alt="Forest" width="600" height="400"></img>
                    </a>
                    <div className="desc">Forest</div>
                </div>

                <div className="gallery">
                    <a target="_blank" href="/img/NFT/forest.jpg">
                        <img src="/img/NFT/forest.jpg" alt="Forest" width="600" height="400"></img>
                    </a>
                    <div className="desc">Forest</div>
                </div>

                <div className="gallery">
                    <a target="_blank" href="/img/NFT/forest.jpg">
                        <img src="/img/NFT/forest.jpg" alt="Forest" width="600" height="400"></img>
                    </a>
                    <div className="desc">Forest</div>
                </div>
            </div>
            {/* <button id="Load More"> Load More...</button> */}
        </div>
    )
}

export default Marketplace
