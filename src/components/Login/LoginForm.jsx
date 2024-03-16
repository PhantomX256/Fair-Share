import React, { useState } from "react";
import Input from "./Input";
import Border from "./Border";
import { database } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        signInWithEmailAndPassword(database, email, password).then(data => {
            console.log(data);
            navigate("/home");
        }).catch(err => {
            if (err.code === "auth/invalid-credential")
                setError('Invalid email or password');
        })
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
            <div className="error-input">
                {error}
            </div>
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
                <a style={{ color: "#19C4A5", fontWeight: 600 }} href="/register">
                    Sign up
                </a>
            </span>
        </form>
    );
}

export default LoginForm;
