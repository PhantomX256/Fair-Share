import React from "react";
import SuitableCard from "./SuitableCard";
import { suitableContent } from "./SuitableContent";
import "../../CSS/second-section.css"

function SecondSection() {
    return (
        <div className="second-section">
            <span>
                <h2 className="second-section-heading">Manage all your expenses in one place</h2>
                <p className="second-section-content">Who is FairShare suitable for?</p>
                <div className="suitable-card-container">
                    { suitableContent.map((content) => {
                        return <SuitableCard key={content.id} heading={content.heading} content={content.content} link={content.link} />
                    }) }
                </div>
            </span>
        </div>
    )
}

export default SecondSection;