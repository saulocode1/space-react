import React from "react";
import { StyledSection } from "../../Components/Section";
import SectionImage from "../../Components/SectionImage/styled";
import SectionFirstTitle from "../../Components/Text";

import Background from "../../assets/destination/image-moon.png"

const MoonSection = () => (
    <StyledSection
        background={Background}
        maxHeight="53.125rem"
        width="23.4375rem"
        height="53.125rem"
    >
        <SectionFirstTitle title="Pick your destination" number="01" />
        <SectionImage src="./assets/destination/image-moon.png" />
    </StyledSection>
);

export default MoonSection;
