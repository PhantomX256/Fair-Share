import React from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function GroupingSectionDivide({sectionTitle}) {
    return (
        <div className="grouping-section-divide">
            <h2 style={{ fontFamily: 'Poppins', fontWeight: '400', fontSize: '3vh', color: '#05A18B' }}>{sectionTitle}</h2>
            <FontAwesomeIcon style={{ color: '#05A18B', fontSize: '3vh', cursor: 'pointer' }} icon={faPlus} />
        </div>
    )
}

export default GroupingSectionDivide;