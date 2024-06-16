import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function GroupMemberDisplay({ name, id, removeGroupMember }) {
    const handleClick = () => {
        removeGroupMember(id);
    }

    return (
        <div
            style={{
                fontFamily: "Inter",
                color: "#969AB8",
                display: "flex",
                alignItems: "center",
                gap: '2vh'
            }}
        >
            <img
                style={{ width: "6vh" }}
                src="https://cdn-icons-png.freepik.com/512/1144/1144709.png?ga=GA1.1.53858213.1712683271&"
            />
            <span
                style={{
                    backgroundColor: "#F9F9F9",
                    border: "solid 0.1vh #E0E2E9",
                    padding: '1vh 1vh',
                    boxSizing: 'border-box',
                    width: '65%',
                    borderRadius: '1vh',
                    textAlign: 'left',
                    marginRight: '4vh',
                }}
            >
                {name}
            </span>
            <FontAwesomeIcon onClick={handleClick} className="group-member-delete-icon" icon={faTrash} />
        </div>
    );
}

export default GroupMemberDisplay;
