import React, { useState } from 'react'
import Modal from './Modal'
import Temple from '../TempleWallet/Temple'
import './Profile.css'

const Profile = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="wrapper">
            <div
                className="profileModalButton"
                onClick={() => setShowModal(true)}
            >
                {
                    !localStorage.getItem('isLoggedIn') &&
                    <img src="https://raw.githubusercontent.com/blackphoenix42/tpl-frontend/e5ea605a0859d301a6a2883eeae9370fedb2d0a5/public/img/Extras/Profile.svg" alt="Profile" className="svgProfile" ></img>
                }
                {
                    localStorage.getItem('isLoggedIn') &&
                    <img src="https://raw.githubusercontent.com/blackphoenix42/tpl-frontend/e5ea605a0859d301a6a2883eeae9370fedb2d0a5/public/img/Extras/Profile_Connected.svg" alt="Profile" className="svgProfile" ></img>
                }
            </div>

            {showModal && (
                <Modal onCloseRequest={() => setShowModal(false)}><Temple /></Modal>
            )}
        </div>
    )
}

export default Profile
