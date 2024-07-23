import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddGuest from "./AddGuest";
import AddUser from "./AddUser";
import React, { useState } from "react";
import { getAddUserData } from "./firebaseData";

function AddMemberPopup({ closePopup, addGroupMember, groupMembers }) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [memberType, setMemberType] = useState("user");
    const [guestName, setGuestName] = useState("");
    const [userID, setUserID] = useState("");

    const handleMemberTypeChange = (event) => {
        setMemberType(event.target.value);
    };

    const handleSubmit = async (e) => {
        // put loading
        setLoading(true);
        e.preventDefault();

        // member is a user
        if (memberType === "user") {
            // user is already added
            const idExists = groupMembers.some(
                (member) => member.id === userID.trim()
            );
            if (idExists) {
                setError("User is already added");
                setLoading(false);
                return;
            }

            // checks if user exists and adds them
            const userExists = await getAddUserData(
                userID.trim(),
                addGroupMember
            );
            if (userExists === false) {
                setError("User does not exist");
                setLoading(false);
                return;
            }

            setLoading(false);
            closePopup();
        } else {
            // adding a guest
            if (guestName.trim() === "") {
                setError("Invalid Name");
                setLoading(false);
                return;
            }
            addGroupMember(guestName, Date.now(), "guest");
            setLoading(false);
            closePopup();
        }
    };

    return (
        <div className="add-member-popup-container">
            <div className="add-member-popup">
                <FontAwesomeIcon
                    icon={faXmark}
                    className="add-member-close"
                    onClick={closePopup}
                />
                <h2
                    style={{
                        fontFamily: "Red Hat Display",
                        fontWeight: "500",
                        marginBottom: "1vh",
                    }}
                >
                    Add a Member
                </h2>

                <input
                    type="radio"
                    name="slider"
                    id="user"
                    value="user"
                    checked={memberType === "user"}
                    onChange={handleMemberTypeChange}
                ></input>
                <input
                    type="radio"
                    name="slider"
                    id="guest"
                    value="guest"
                    checked={memberType === "guest"}
                    onChange={handleMemberTypeChange}
                ></input>

                <div className="add-member-tab-container">
                    <div className="add-member-tab-slider"></div>
                    <label className="add-member-tabs user" for="user">
                        User
                    </label>
                    <label className="add-member-tabs guest" for="guest">
                        Guest
                    </label>
                </div>

                <form onSubmit={handleSubmit}>
                    {memberType === "user" ? (
                        <AddUser
                            error={error}
                            userID={userID}
                            setUserID={setUserID}
                        />
                    ) : (
                        <AddGuest
                            guestName={guestName}
                            setGuestName={setGuestName}
                            error={error}
                        />
                    )}
                    <button className="add-member-submit" type="submit">
                        {loading
                            ? "Adding"
                            : `Add ${memberType === "user" ? "User" : "Guest"}`}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AddMemberPopup;
