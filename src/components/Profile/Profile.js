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
                    <img src="/img/extras/profile.svg" alt="Profile" className="svgProfile" ></img>
                }
                {
                    localStorage.getItem('isLoggedIn') &&
                    <img src="/img/extras/profile_connected.svg" alt="Profile" className="svgProfile" ></img>
                }
            </div>

            {showModal && (
                <Modal onCloseRequest={() => setShowModal(false)}><Temple /></Modal>
            )}
        </div>
    )
}

export default Profile
