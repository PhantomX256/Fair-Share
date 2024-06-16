import React from "react";
import Input from "../Login/Input";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function AddGuest({ guestName, setGuestName, error }) {
    return (
        <div>
            <h3
                style={{
                    fontFamily: "Poppins",
                    fontSize: "3vh",
                    fontWeight: "500",
                    textAlign: "left",
                    marginLeft: "1.5vw",
                }}
            >
                Name of the guest:
            </h3>
            <Input
                type="text"
                class="add-member-input"
                name="guestName"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder="Enter name"
                icon={faUser}
            />
            <span className="add-member-error">{error}</span>
        </div>
    );
}

export default AddGuest;
