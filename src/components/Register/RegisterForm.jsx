import React, { useState } from "react";
import Input from "../Login/Input";
import Border from "../Login/Border";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

function RegisterForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("Email: ", email);
        console.log("Password: ", password);
    };

    return (
        <form className="login-form" onSubmit={handleSubmit}>
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
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
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
