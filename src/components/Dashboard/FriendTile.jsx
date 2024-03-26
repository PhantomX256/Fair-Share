import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function FriendTile({ friendName }) {
    return (
        <div style={{ cursor: 'pointer', display: 'flex', gap: '1vw', alignItems: 'center' }}>
            <FontAwesomeIcon style={{ color: 'white', fontSize: '3vh' }} icon={ faUser } />
            <span style={{ fontFamily: 'Poppins', color: 'white', fontSize: '3vh', fontWeight: '300' }}>{ friendName }</span>
        </div>
    )
}

export default FriendTile;