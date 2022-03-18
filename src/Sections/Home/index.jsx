import React from "react";
import { StyledSection } from "../../Components/Section/styled";
import { FirstTitle, SectionText } from "../../Components/Section/SectionText/styled";
import { HomeButton, MainTitle, TextWrapper } from "./styled";

import Background from "../../assets/home/background-home-mobile.jpg"

const HomeSection = () => (
    <StyledSection
        background={Background}
        maxHeight="41.6875rem"
        width="100vw"
        height="41.6875rem"
    >
        <TextWrapper>
            <FirstTitle>SO, YOU WANT TO TRAVEL TO</FirstTitle>
            <MainTitle>SPACE</MainTitle>
            <SectionText>
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
            </SectionText>
        </TextWrapper>
        <HomeButton>EXPLORE</HomeButton>
    </StyledSection>
);

export default HomeSection;
