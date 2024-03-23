import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { database } from "../../firebase";

function SignoutButton() {
    const navigate = useNavigate();
    const handleClick = async () => {
        await signOut(database);
        navigate('/');
    }

    return (
        <button onClick={handleClick}>Log Out</button>
    )
}

export default SignoutButton;