import React from "react";

function ListContent(props) {
    return (
        <span className="list-item">
            <img className="list-icon" src="https://i.ibb.co/nnrfGJF/List.png" alt="-" />
            <h4 className="list-content">{props.content}</h4>
        </span>
    )
}

export default ListContent;