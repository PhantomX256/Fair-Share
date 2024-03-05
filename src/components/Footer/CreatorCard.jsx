import React from "react";
import SocialIcon from "./SocialIcon";

function CreatorCard(props) {
    return (
        <div className="creator-card">
            <h4 className="creator-name">{props.name}: </h4>
            <SocialIcon />
        </div>
    )
}

export default CreatorCard;