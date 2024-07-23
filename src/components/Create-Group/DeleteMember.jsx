import GeneralPopup from "../GeneralPopup";
import React from "react";

function DeleteMember({ removeGroupMember, closePopup }) {
    return(
        <GeneralPopup>
            <h2 style={{ fontFamily: 'Poppins', fontSize: '4vh', marginBottom: '2vh' }}>Confirm Action</h2>

            <h4 style={{ fontFamily: 'Inter', fontSize: '3vh', fontWeight: '400', marginBottom: '1.5vh' }}>Are you sure you want to continue?</h4>

            <button onClick={() => removeGroupMember()} className='confirm-action-button'>Yes</button>
            <button onClick={() => closePopup()} className="confirm-action-button">No</button>
        </GeneralPopup>
    )
}

export default DeleteMember;