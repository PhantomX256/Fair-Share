import React from "react";
import SignoutButton from "./SignoutButton";

function ProfilePopup() {
    const popupStyles = {
        position: "absolute",
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        right: "0vh",
        bottom: "-7vh",
        backgroundColor: "red",
        width: "10vw",
        boxShadow: '0.1vh 0.1vh 1vh 0px rgba(0,0,0,0.75)',
        transition: '0.3s',
    };
    return (
        <div style={ popupStyles }>
            <SignoutButton />
        </div>
    );
}

export default ProfilePopup;
