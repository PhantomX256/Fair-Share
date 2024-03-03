import React from "react";

function SuitableCard(props) {
    return (
        <div className="suitable-card">
            <img className="suitable-image" src={props.link} alt={props.heading} />
            <h3 className="suitable-heading">{props.heading}</h3>
            <p className="suitable-content">{props.content}</p>
        </div>
    )
}

export default SuitableCard;