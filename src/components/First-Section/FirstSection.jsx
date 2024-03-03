import React from "react";
import Slogan from "./Slogan";
import Illustration from "./Illustraction";
import "../../CSS/first-section.css";

function FirstSection() {
    return (
        <div className="first-section">
            <Slogan />
            <Illustration />
        </div>
    )
}

export default FirstSection;