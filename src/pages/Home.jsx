import React from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import FirstSection from "../components/First-Section/FirstSection.jsx";
import SecondSection from "../components/Second-Section/SecondSection.jsx";
import ThirdSection from "../components/Third-Section/ThirdSection.jsx";
import FourthSection from "../components/Fourth-Section/FourthSection.jsx";
import FifthSection from "../components/Fifth-Section/FifthSection.jsx";
import Footer from "../components/Footer/Footer.jsx";

function Home() {
    return (
        <div>
            <Navbar />
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <FourthSection />
            <FifthSection />
            <Footer />
        </div>
    )
}

export default Home;