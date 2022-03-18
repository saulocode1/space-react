import React from "react";

import Background from "../../assets/destination/background-destination-mobile.jpg";
import MoonImage from "../../assets/destination/image-moon.png";
import Section from "../../Components/Section";

const MoonSection = () => (
    <Section
        background={Background}
        titleNumber="01"
        firstTitle="Pick your destination"
        width="100vw"
        height="53.125rem"
        maxHeight="53.125rem"
        src={MoonImage}
        mainTitle="moon"
        sectionText="See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
    />
);

export default MoonSection;
