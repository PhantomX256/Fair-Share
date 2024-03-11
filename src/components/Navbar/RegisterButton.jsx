import React from "react";
import { useNavigate } from "react-router-dom";

function RegisterButton() {
    const navigate = useNavigate();
    return (
        <button
            onClick={() => navigate("/register")}
            className="navbar-register-button"
        >
            Sign Up
        </button>
    );
}

export default RegisterButton;
