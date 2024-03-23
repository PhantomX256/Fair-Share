import React from "react";

function BackToHome({ style }) {
    return (
        <a href="/"><button style={style} className="back-to-home">Return to Home</button></a>
    )
}

export default BackToHome;