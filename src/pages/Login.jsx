import React from "react";
import Illustration from "../components/Illustration";
import LoginForm from "../components/Login/LoginForm";
import BackToHome from "../components/Register/BackToHome";
import "../CSS/login.css";

function Login() {
    const returnToHomeStyles = {
        top: '2vh',
        left: '2vh',
    };
    return (
        <div className="login-page">
            <div className="login-form-container">
                <BackToHome style={returnToHomeStyles} />
                <span className="login-content">
                    <h2 style={{ fontFamily: "Red Hat Display", fontSize: "5vh" }}>
                        Welcome back!
                    </h2>
                    <h1 style={{ fontFamily: "Red Hat Display", fontWeight: 600, fontSize: "5vh", marginTop: "6vh" }}>
                        Log In
                    </h1>
                    <LoginForm />
                </span>
            </div>
            <Illustration
                source="https://i.ibb.co/M90rzPS/Rectangle-2775.png"
                class="login-illustration"
            />
        </div>
    );
}

export default Login;
