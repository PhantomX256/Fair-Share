import React from "react";
import CreatorCard from "./CreatorCard";
import "../../CSS/footer.css";

function Footer() {
    return (
        <div className="footer">
            <div style={{ textAlign: "center" }}>
                <img className="logo" src="https://i.ibb.co/mR4rNZS/Logo.png" alt="FairShare" />
                <p style={{ fontFamily: "Poppins", color: "white", fontWeight: "500" }}>Made by</p>
                <CreatorCard name="Ved Verma" />
                <CreatorCard name="Aayushi Roy" />
            </div>
        </div>
    )
}

export default Footer;