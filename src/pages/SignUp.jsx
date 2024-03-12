import React from "react";
import Illustration from "../components/Illustration";
import RegisterFrom from "../components/Register/RegisterForm";
import "../CSS/register.css";

function SignUp() {
    return (
        <div id="register-page">
            <Illustration
                source="https://i.ibb.co/BKpwsn9/unsplash-KPSQ9-G5-Q.png"
                class="register-illustration"
            />
            <div className="signup-form-container">
                <span>
                    <h1 style={{ fontFamily: "Red Hat Display", fontWeight: 500 }}>Sign Up</h1>
                    <RegisterFrom />
                </span>
            </div>
        </div>
    );
}

export default SignUp;
