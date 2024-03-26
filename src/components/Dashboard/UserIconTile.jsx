import React, { useState } from 'react';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProfilePopup from './ProfilePopup';

function UserIconTile({ name }) {
    const [profilePopup, setProfilePopup] = useState(false);

    function togglePopup() {
        setProfilePopup(!profilePopup);
    }

    return (
        <div onClick={togglePopup} className='user-icon-container'>
            <div className='user-image'></div>
            <h2 className='user-name'>{ name }</h2>
            <FontAwesomeIcon style={{ fontSize: '2.5vh', color: '#4D4D4D' }} icon={profilePopup ? faChevronUp : faChevronDown} />
            <div className={`profile-popup ${profilePopup ? 'visible' : ''}`}>
                {profilePopup && <ProfilePopup />}
            </div>
        </div>
    )
}

export default UserIconTile;