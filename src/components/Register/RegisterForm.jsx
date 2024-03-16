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
    const [cont, setCont] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (password.length < 8 || password.length > 24) {
            setError("Password must be between 8 - 24 characters");
            setCont(false);
        } else if (password !== confirmPassword) {
            setError("Passwords do not match");
            setCont(false);
        } else if (password.toLowerCase() === password) {
            setError("Password must have an uppercase letter");
            setCont(false);
        } else if (password !== "" && password === confirmPassword && (password.length >= 8 || password.length <= 24)){
            setCont(true);
        }

        if (cont) {
            createUserWithEmailAndPassword(database, email, password)
                .then((data) => {
                    console.log(data, "authData");
                    alert("Account created successfully!");
                    navigate("/login");
                })
                .catch((err) => {
                    console.log(err.code);
                    if (err.code === "auth/email-already-in-use")
                        setError("Email is already in use");
                });
        }
    };

    return (
        <form
            className="login-form"
            onSubmit={handleSubmit}
        >
            <Input
                icon={faEnvelope}
                placeholder="Your Email"
                type="email"
                class="input"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Input
                icon={faLock}
                placeholder="Your Password"
                type="password"
                class="input"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Input
                icon={faLock}
                placeholder="Repeat Password"
                type="password"
                class="input"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div className="error-input">{error}</div>
            <button type="submit" className="login-btn">
                Sign Up
            </button>
            <Border />
            <span
                style={{
                    marginTop: "2vh",
                    fontFamily: "Inter",
                    fontSize: "2.5vh",
                    color: "#969AB8",
                }}
            >
                Already have an account?{" "}
                <a style={{ color: "#19C4A5", fontWeight: 600 }} href="/login">
                    Log In
                </a>
            </span>
        </form>
    );
}

export default RegisterForm;
