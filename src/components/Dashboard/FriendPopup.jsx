import { faUserPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Input from "../Login/Input";
import React, { useState } from "react";
import CopyUserID from "./CopyUserID";
import { addFriends } from "./firebaseData";

function FriendPopup({
    friends,
    setFriends,
    userID,
    setToggleFriendPopup,
    setFriendDetails,
}) {
    const [friendUserID, setFriendUserID] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        // Call addFriends and wait for it to complete
        await addFriends(
            friends,
            setFriends,
            friendUserID.trim(),
            userID,
            setFriendDetails,
            setError,
            setResult
        );

        console.log(result);

        // Check the result after addFriends completes
        if (result === true) {
            
            setTimeout(() => {
                setLoading(false);
                setToggleFriendPopup(false);
            }, 2000);
        } else {
            setLoading(false);
            // Error message will already be set by addFriends
        }
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
                    <div className="error-input">{error}</div>
                    <button
                        style={{
                            width: "36vw",
                            border: "none",
                            backgroundColor: "#0e6757",
                            color: "white",
                            fontFamily: "Poppins",
                            padding: "1vh",
                            borderRadius: "1.5vh",
                            cursor: "pointer",
                        }}
                        type="submit"
                        className="friend-popup-addbtn"
                    >
                        {loading ? "Adding" : "Add Friend"}
                    </button>
                </form>
                <CopyUserID userID={userID} />
            </div>
        </div>
    );
}

export default FriendPopup;
