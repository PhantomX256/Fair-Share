import React from "react";
import Illustration from "../Illustration";
import ListContent from "./ListContent";
import { listItems } from "./ListItems";
import "../../CSS/fifth-section.css";

function FifthSection() {
    return (
        <div className="fifth-section">
            <div>
                { listItems.map((item) => {
                    return <ListContent content={item} />
                }) }
            </div>
            <Illustration source="https://i.ibb.co/d645MT5/Fifth-Section.png" class="fifth-section-illustration" />
        </div>
    )
}

export default FifthSection;