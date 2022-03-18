import React from "react";
import Data from "./SectionData";
import SectionImage from "./SectionImage/styled";
import NavBar from "./SectionNav";
import SectionFirstTitle from "./SectionText";
import { MainTitle, SectionText, TextWrapper } from "./SectionText/styled";
import { StyledSection, SectionLine } from "./styled";

const Section = ({
    background,
    firstTitle,
    titleNumber,
    width,
    height,
    src,
    mainTitle,
    sectionText,
}) => (
    <>
        <StyledSection background={background} width={width} height={height}>
            <SectionFirstTitle
                firstTitle={firstTitle}
                titleNumber={titleNumber}
            />
            <SectionImage src={src} />
            <NavBar />
            <MainTitle>{mainTitle}</MainTitle>
            <TextWrapper>
                <SectionText>{sectionText}</SectionText>
            </TextWrapper>
            <SectionLine />
            <Data dataTitle="AVG. DISTANCE" dataText="384,400 km" />
            <Data dataTitle="Est. travel time" dataText="3 days" />
        </StyledSection>
    </>
);

export default Section;
