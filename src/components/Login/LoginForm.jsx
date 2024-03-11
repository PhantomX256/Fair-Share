import React, { useState } from "react";
import Input from "./Input";
import Border from "./Border";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

function LoginForm() {
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
            <button type="submit" className="login-btn">
                Log In
            </button>
            <a className="forgot" href="/forgot-password">
                Forgot Password?
            </a>
            <Border />
            <span
                style={{
                    marginTop: "2vh",
                    fontFamily: "Inter",
                    fontSize: "2.5vh",
                    color: "#969AB8",
                }}
            >
                Don't have an account?{" "}
                <a style={{ color: "#19C4A5" }} href="/register">
                    Sign up
                </a>
            </span>
        </form>
    );
}

export default LoginForm;
