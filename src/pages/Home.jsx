import React from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import FirstSection from "../components/First-Section/FirstSection.jsx";
import SecondSection from "../components/Second-Section/SecondSection.jsx";

function Home() {
    return (
        <div>
            <Navbar />
            <FirstSection />
            <SecondSection />
        </div>
    )
}

export default Home;