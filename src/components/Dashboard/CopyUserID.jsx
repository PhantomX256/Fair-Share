import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function CopyUserID({ userID }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        setCopied(true);
        await navigator.clipboard.writeText(userID);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <div style={{ display: "flex", marginTop: "2vh", width: "36vw" }}>
            <span
                style={{
                    fontFamily: "Red Hat Display",
                    fontSize: "3vh",
                    fontWeight: "500",
                    backgroundColor: "white",
                    padding: "1vh 1vw",
                    color: "#4d4d4d",
                    borderRadius: "3vh 0vh 0vh 3vh",
                }}
            >
                {userID}
            </span>
            <span
                style={{
                    fontFamily: "Red Hat Display",
                    fontSize: copied ? '3vh' : '2.8vh',
                    fontWeight: "500",
                    backgroundColor: "#0e6757",
                    padding: "1vh 1vw",
                    color: "white",
                    borderRadius: "0vh 3vh 3vh 0vh",
                    cursor: "pointer",
                    width: '7vw',
                    textAlign: 'center',
                    transition: '0.3s',
                }}
                onClick={handleCopy}
            >
                {copied ? <FontAwesomeIcon className='check' icon={faCheck} /> : 'Copy UID'}
            </span>
        </div>
    );
}

export default CopyUserID;
