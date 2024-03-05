import React from "react";
import Illustration from "../Illustration";
import "../../CSS/third-section.css";

function ThirdSection() {
    return (
        <div className="third-section">
            <Illustration class="third-section-illustration" source="https://i.ibb.co/Lz5HL1H/Third-Sectiion.png" />
            <div className="third-section-container">
                <h2 className="third-section-title">
                    Empowering Fairness in Finances
                </h2>
                <p className="third-section-content">
                    At FairShare, we're dedicated to revolutionizing the way you
                    manage group expenses, empowering you with intuitive tools
                    for fair and transparent financial collaboration. Our
                    mission is to simplify shared finances, fostering harmony
                    and transparency among friends, family, and colleagues, one
                    bill at a time.
                </p>
                <a href="#fourth-section">
                    <button className="third-section-button">Learn More</button>
                </a>
            </div>
        </div>
    );
}

export default ThirdSection;
