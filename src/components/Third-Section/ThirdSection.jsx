import React from "react";
import Illustration from "./Illustration";
import "../../CSS/third-section.css";

function ThirdSection() {
    return (
        <div className="third-section">
            <Illustration />
            <div className="third-section-container">
                <h2 className="third-section-title">Empowering Fairness in Finances</h2>
                <p className="third-section-content">
                    At FairShare, we're dedicated to revolutionizing the way you
                    manage group expenses, empowering you with intuitive tools
                    for fair and transparent financial collaboration. Our
                    mission is to simplify shared finances, fostering harmony
                    and transparency among friends, family, and colleagues, one
                    bill at a time.
                </p>
                <button className="third-section-button">Learn More</button>
            </div>
        </div>
    );
}

export default ThirdSection;
