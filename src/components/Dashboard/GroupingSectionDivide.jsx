import React from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function GroupingSectionDivide({sectionTitle, onClick}) {
    return (
        <div className="grouping-section-divide">
            <h2 style={{ fontFamily: 'Poppins', fontWeight: '400', fontSize: '3vh', color: '#05A18B' }}>{sectionTitle}</h2>
            <FontAwesomeIcon className="grouping-section-divide-plus" onClick={onClick} style={{ color: '#05A18B', fontSize: '3vh', cursor: 'pointer' }} icon={faPlus} />
        </div>
    )
}

export default GroupingSectionDivide;