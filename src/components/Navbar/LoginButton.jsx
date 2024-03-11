import React from "react";
import { useNavigate } from "react-router-dom";

function LoginButton() {
    const navigate = useNavigate();
    return (
        <button
            onClick={() => navigate("/login")}
            className="navbar-login-button"
        >
            Login
        </button>
    );
}

export default LoginButton;
