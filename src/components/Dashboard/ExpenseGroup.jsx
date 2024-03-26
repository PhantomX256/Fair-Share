import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function ExpenseGroup({ groupTitle }) {
    return (
        <div style={{ cursor: 'pointer', display: 'flex', gap: '1vw', alignItems: 'center' }}>
            <FontAwesomeIcon style={{ color: 'white', fontSize: '3vh' }} icon={ faPeopleGroup } />
            <span style={{ fontFamily: 'Poppins', color: 'white', fontSize: '3vh', fontWeight: '300' }}>{ groupTitle }</span>
        </div>
    )
}

export default ExpenseGroup;