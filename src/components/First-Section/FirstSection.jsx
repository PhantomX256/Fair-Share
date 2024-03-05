import React from "react";
import Slogan from "./Slogan";
import Illustration from "../Illustration";
import "../../CSS/first-section.css";

function FirstSection() {
    return (
        <div className="first-section">
            <Slogan />
            <Illustration class="illustration" source="https://i.ibb.co/0FSnwdT/Illustration.png" />
        </div>
    )
}

export default FirstSection;