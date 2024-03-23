import React, { useState } from "react";
import Input from "../Login/Input";
import Border from "../Login/Border";
import { database } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const validatePassword = (password, confirmPassword) => {
        if (password.length < 8 || password.length > 24) {
            return "Password must be between 8 - 24 characters";
        } else if (password !== confirmPassword) {
            return "Passwords do not match";
        } else if (!/[A-Z]/.test(password)) {
            return "Password must have an uppercase letter";
        }
        return "";
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const validationError = validatePassword(password, confirmPassword);

        if (validationError) {
            setError(validationError);
        } else {
            try {
                const userCredential = await createUserWithEmailAndPassword(database, email, password);
                console.log(userCredential, "authData");
                alert("Account created successfully!");
                navigate("/login");
            } catch (err) {
                console.error(err.code);
                if (err.code === "auth/email-already-in-use") {
                    setError("Email is already in use");
                }
            }
        }
    };

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <Input icon={faEnvelope} placeholder="Your Email" type="email" class="input" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input icon={faLock} placeholder="Your Password" type="password" class="input" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Input icon={faLock} placeholder="Repeat Password" type="password" class="input" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            <div className="error-input">{error}</div>
            <button type="submit" className="login-btn">Sign Up</button>
            <Border />
            <span style={{ marginTop: "2vh", fontFamily: "Inter", fontSize: "2.5vh", color: "#969AB8" }}>
                Already have an account? <a style={{ color: "#19C4A5", fontWeight: 600 }} href="/login">Log In</a>
            </span>
        </form>
    );
}

export default RegisterForm;
