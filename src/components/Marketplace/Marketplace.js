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
                    <img src="https://kwhs.wharton.upenn.edu/wp-content/uploads/2021/06/nfts.jpg" alt="Forest" />
                </a>
                <a target="_blank" href="img/nft/forest.jpg">
                    <img src="https://img.money.com/2021/03/DollarScholar-84-NFT.jpg?quality=85" alt="Forest" />
                </a>
                <a target="_blank" href="img/nft/forest.jpg">
                    <img src="https://cdn.ramseysolutions.net/daveramsey.com/media/blog/retirement/investing/what-is-nft-crypto-art.jpg" alt="Forest" />
                </a>
                <a target="_blank" href="img/nft/forest.jpg">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCZptLBKjnW-mf6Id6yNVcLc6rOpXD-0mwA4mx5SlAiQnM_3_MWjFpL3fejBuHaF9acJ0&usqp=CAU" alt="Forest" />
                </a>
                <a target="_blank" href="img/nft/forest.jpg">
                    <img src="https://static.dezeen.com/uploads/2021/05/gucci-garden-roblox-exhibition_dezeen_2364_hero.jpg" alt="Forest" />
                </a>
                <a target="_blank" href="img/nft/forest.jpg">
                    <img src="https://media.gucci.com/content/DiaryArticleDouble_Standard_1400x894/1621004403/DiaryArticleDouble_Roblox-01_001_Default.jpg" alt="Forest" />
                </a>
                <a target="_blank" href="img/nft/forest.jpg">
                    <img src="https://academy-public.coinmarketcap.com/optimized-uploads/398920f53c6f48f7ae86da059975eac9.jpg" alt="Forest" />
                </a>
                <a target="_blank" href="img/nft/forest.jpg">
                    <img src="https://picsum.photos/200" alt="Forest" />
                </a>
                <a target="_blank" href="img/nft/forest.jpg">
                    <img src="https://cdn.decrypt.co/resize/1400/wp-content/uploads/2019/11/winklevoss-gemini-crypto-collectible-nft-blockchain-gaming.jpg" alt="Forest" />
                </a>
            </div>
            <button>LOAD MORE</button>
        </div>
    )
}

export default Marketplace
