import React from "react";
import NavbarLinks from "./NavbarLinks";
import NavbarLogo from "./NavbarLogo";
import LoginButton from "./LoginButton";
import RegisterButton from "./RegisterButton";
import "../../CSS/navbar.css";


function Navbar() {
    return (
        <div className="navbar-container">
            <NavbarLogo />
            <div className="navbar-links-container">
                <NavbarLinks link="/" heading="Home"/>
                <NavbarLinks link="/download" heading="Download"/>
                <NavbarLinks link="/features" heading="Features"/>
                <NavbarLinks link="/updates" heading="Updates"/>
                <NavbarLinks link="/testimonial" heading="Testimonial"/>
                <NavbarLinks link="/faq" heading="FAQ"/>
            </div>
            <div className="navbar-login-register-container">
                <LoginButton />
                <RegisterButton />
            </div>
        </div>
    )
}

export default Navbar;