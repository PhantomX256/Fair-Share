import React from "react";

function Illustration(props) {
    return (
        <img src={props.source} className={props.class} alt="Illustration" />
    )
}

export default Illustration;