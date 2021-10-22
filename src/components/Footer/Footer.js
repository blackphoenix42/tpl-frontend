import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className="bottomFooter">
            <footer className="w-100 py-4 flex-shrink-0">
                <div className="container py-4">
                    <div className="row gy-4 gx-5">
                        <div className="col-lg-4 col-md-6">
                            <h5 className="h1 text-white">TPL</h5>
                            <p className="small text-muted">TPL Platform aims to develop a platform where players can play games online on a decentralized platform. Players can win/purchase Non-Fungible Tokens (NFTs).</p>
                            <p className="small text-muted mb-0">&copy; Copyrights. All rights reserved.</p>
                        </div>
                        <div className="col-lg-2 col-lg-4">
                            <h5 className="text-white mb-3">Quick links</h5>
                            <ul className="list-unstyled text-muted">
                                <li><a href="#home">Home</a></li>
                                <li><a href="#games">Games</a></li>
                                <li><a href="#marketplace">Marketplace</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-6" >
                            <h5 className="text-white mb-3">Newsletter</h5>
                            <p className="small text-muted">Subscribe to get the latest news & updates.</p>
                            <form action="#">
                                <div className="input-group mb-3">
                                    <input className="form-control" type="text" placeholder="Your email address" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <button className="btn btn-primary" id="button-addon2" type="button"><i className="fas fa-paper-plane"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>
        </div >
    )
}

export default Footer
