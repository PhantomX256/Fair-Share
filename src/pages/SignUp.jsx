import React from "react";
import Illustration from "../components/Illustration";
import RegisterFrom from "../components/Register/RegisterForm";
import BackToHome from "../components/Register/BackToHome";
import "../CSS/register.css";

function SignUp() {
    const returnToHomeStyles = {
        top: '2vh',
        right: '2vh',
    };
    return (
        <div id="register-page">
            <Illustration
                source="https://i.ibb.co/BKpwsn9/unsplash-KPSQ9-G5-Q.png"
                class="register-illustration"
            />
            <div className="signup-form-container">
                <BackToHome style={returnToHomeStyles}  />
                <span>
                    <h1 style={{ fontFamily: "Red Hat Display", fontWeight: 500 }}>Sign Up</h1>
                    <RegisterFrom />
                </span>
            </div>
        </div>
    );
}

export default SignUp;
