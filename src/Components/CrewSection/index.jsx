import React from "react";
import Header from "../Header";
import { SectionLine, StyledSection } from "../Section/styled";
import CrewBackground from "../../assets/crew/background-crew-mobile.jpg";
import SectionFirstTitle from "../Section/SectionText";
import CrewImage from "./CrewSectionImage/styled";
import ImageWrapper from "./styled";
import CrewText from "./CrewSectionText";

const CrewSection = ({
   src,
   crewSubtitle,
   crewTitle,
   crewText,
   imageWidth,
   imageMargin,
}) => {
   return (
      <>
         <StyledSection
            maxHeight="44.375rem"
            width="23.4375rem"
            maxWidth="23.4375rem"
            height="44.375rem"
            background={CrewBackground}
         >
            <Header />
            <SectionFirstTitle titleNumber="02" firstTitle="meet your crew" />
            <ImageWrapper>
               <CrewImage
                  imageWidth={imageWidth}
                  imageMargin={imageMargin}
                  src={src}
               />
               <SectionLine />
            </ImageWrapper>
            <CrewText
               crewSubtitle={crewSubtitle}
               crewTitle={crewTitle}
               crewText={crewText}
            />
         </StyledSection>
      </>
   );
};

export default CrewSection;
