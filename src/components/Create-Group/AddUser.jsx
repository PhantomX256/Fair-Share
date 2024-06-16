import React from "react";
import Input from "../Login/Input";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function AddUser({ userID, setUserID, error }) {

    return (
        <div>
            <h3
                style={{
                    fontFamily: "Poppins",
                    fontSize: "3vh",
                    fontWeight: "500",
                    textAlign: 'left',
                    marginLeft: '1.5vw'
                }}
            >
                User ID:
            </h3>
            <Input
                type="text"
                class="add-member-input"
                name="guestName"
                value={userID}
                onChange={(e) => setUserID(e.target.value)}
                placeholder="Enter UID"
                icon={faUser}
            />
            <span className="add-member-error">{error}</span>
        </div>
    );
}

export default AddUser;
