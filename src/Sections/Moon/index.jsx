import React from "react";

import Background from "../../assets/destination/background-destination-mobile.jpg";
import MoonImage from "../../assets/destination/image-moon.png";
import Section from "../../Components/Section";

const MoonSection = () => (
    <Section
        background={Background}
        number="01"
        title="Pick your destination"
        width="100vw"
        height="53.125rem"
        maxHeight="53.125rem"
        src={MoonImage}
    />
);

export default MoonSection;
