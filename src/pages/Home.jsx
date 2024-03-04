import React from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import FirstSection from "../components/First-Section/FirstSection.jsx";
import SecondSection from "../components/Second-Section/SecondSection.jsx";
import ThirdSection from "../components/Third-Section/ThirdSection.jsx";

function Home() {
    return (
        <div>
            <Navbar />
            <FirstSection />
            <SecondSection />
            <ThirdSection />
        </div>
    )
}

export default Home;