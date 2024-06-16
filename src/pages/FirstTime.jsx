import React, { useState, useContext } from "react";
import Input from "../components/Login/Input";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { Context } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import "../CSS/first-time.css";

function FirstTime() {
    const containerStyles = {
        backgroundColor: "#f5f5f5",
        backgroundImage: "url('https://i.ibb.co/z8thf64/Signup-redirect.png')",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        gap: "1vh",
    };

    const headingStyles = {
        fontFamily: "Red Hat Display",
        fontSize: "6vh",
        marginBottom: "0vh",
    };

    const sublineStyles = {
        fontFamily: "Red Hat Display",
        fontSize: "4vh",
        fontWeight: "500",
        marginBottom: "4vh",
    };

    const navigate = useNavigate();
    const { user } = useContext(Context);
    const [name, setName] = useState("");
    const [error, setError] = useState();
    const [errorClass, setErrorClass] = useState("error-input")

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!name.trim()) {
            setError("Enter a valid name");
            setErrorClass("error-input first-name-error")
            return;
        }
        const userDocRef = doc(db, "users", user.uid);
        try {
            await updateDoc(userDocRef, {
                fullName: name,
                isNewUser: false,
                numberOfGroups: 0,
                groupIds: [],
                friendIds: []
            });
            console.log(name);
            navigate('/dashboard');
        } catch(err) {
            console.log("Error Updating user doc: ", err);
        }
    };

    return (
        <div style={containerStyles}>
            <h2 style={headingStyles}>Welcome to FairShare!</h2>
            <h3 style={sublineStyles}>
                Financial Independence just a click away
            </h3>
            <form onSubmit={handleSubmit}>
                <Input
                    name="fullName"
                    onChange={(e) => setName(e.target.value)}
                    class="first-time-name"
                    value={name}
                    type="text"
                    placeholder="Your Full Name"
                    icon={faUser}
                />
                <div className={errorClass}>{error}</div>
                <button type="submit" className="first-time-submit">
                    Next
                </button>
            </form>
        </div>
    );
}

export default FirstTime;
