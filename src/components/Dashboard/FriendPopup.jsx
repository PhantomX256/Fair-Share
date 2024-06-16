import { faUserPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Input from "../Login/Input";
import React, { useState } from "react";
import CopyUserID from "./CopyUserID";
import { addFriends } from "./firebaseData";

function FriendPopup({ friends, setFriends, userID, setToggleFriendPopup, setFriendDetails }) {
    const [friendUserID, setFriendUserID] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
        addFriends(friends, setFriends, friendUserID, userID, setFriendDetails);
        setTimeout(() => {
            setLoading(false);
            setToggleFriendPopup(false);
        }, 2000)
    };

    return (
        <div className="friend-popup-background">
            <div className="friend-popup-container">
                <h2
                    style={{
                        fontFamily: "Poppins",
                        color: "#4d4d4d",
                        fontSize: "4vh",
                        marginBottom: "2vh",
                    }}
                >
                    Add Friends
                </h2>
                <FontAwesomeIcon
                    icon={faXmark}
                    className="friend-popup-close"
                    style={{
                        cursor: "pointer",
                        color: "#4d4d4d",
                        fontSize: "4vh",
                        position: "absolute",
                        right: "2vw",
                        top: "2.5vh",
                    }}
                    onClick={() => setToggleFriendPopup(false)}
                />
                <form onSubmit={handleSubmit}>
                    <Input
                        width="36vw"
                        icon={faUserPlus}
                        onChange={(e) => setFriendUserID(e.target.value)}
                        name="friendUserID"
                        value={friendUserID}
                        placeholder="Enter Friend's User ID"
                        type="text"
                        class="friend-popup-input"
                    />
                    <button
                        style={{
                            width: "36vw",
                            border: "none",
                            backgroundColor: "#0e6757",
                            color: "white",
                            fontFamily: 'Poppins',
                            padding: '1vh',
                            borderRadius: '1.5vh',
                            cursor: 'pointer'
                        }}
                        type="submit"
                        className="friend-popup-addbtn"
                    >
                        {loading ? 'Adding' : 'Add Friend'}
                    </button>
                </form>
                <CopyUserID userID={userID} />
            </div>
        </div>
    );
}

export default FriendPopup;
