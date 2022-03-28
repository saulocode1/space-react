import React from "react";
import Data from "./SectionData";
import SectionImage from "./SectionImage/styled";
import NavBar from "./SectionNav";
import SectionFirstTitle from "./SectionText";
import { MainTitle, SectionText, TextWrapper } from "./SectionText/styled";
import { StyledSection, SectionLine, AosDiv } from "./styled";

const Section = ({
   background,
   firstTitle,
   titleNumber,
   width,
   height,
   src,
   mainTitle,
   sectionText,
   distance,
   travelTime,
}) => (
   <>
      <StyledSection background={background} width={width} height={height}>
         <SectionFirstTitle firstTitle={firstTitle} titleNumber={titleNumber} />
         <AosDiv data-aos="fade-in">
            <SectionImage src={src} />
         </AosDiv>
         <NavBar />
         <AosDiv data-aos="fade-in">
            <MainTitle>{mainTitle}</MainTitle>
            <TextWrapper>
               <SectionText>{sectionText}</SectionText>
            </TextWrapper>
         </AosDiv>
         <SectionLine />
         <AosDiv data-aos="fade-in">
            <Data dataTitle="AVG. DISTANCE" dataText={distance} />
            <Data dataTitle="Est. travel time" dataText={travelTime} />
         </AosDiv>
      </StyledSection>
   </>
);

export default Section;
