import React from "react";

const backgroundStyles = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '1'
}

const popupStyles = {
    backgroundColor: 'white',
    padding: '1vh 2vw',
    borderRadius: '2vh',
    textAlign: 'center',
    position: 'relative'
}

function GeneralPopup({children}) {
    return (
        <div style={backgroundStyles}>
            <div style={popupStyles}>
                {children}
            </div>
        </div>
    )
}

export default GeneralPopup;