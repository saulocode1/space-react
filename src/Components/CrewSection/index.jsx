import React from "react";
import Header from "../Header";
import { SectionLine, StyledSection } from "../Section/styled";
import CrewBackground from "../../assets/crew/background-crew-mobile.jpg";
import SectionFirstTitle from "../Section/SectionText";
import CrewImage from "./CrewSectionImage/styled";
import ImageWrapper from "./styled";

import ImageTest from "../../assets/crew/image-douglas-hurley.png";
import CrewText from "./CrewSectionText";

const CrewSection = ({ src, crewSubtitle, crewTitle, crewText }) => {
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
               <CrewImage src={ImageTest} />
               <SectionLine />
            </ImageWrapper>
            <CrewText
               crewSubtitle="Commander "
               crewTitle="Douglas Hurley"
               crewText="Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
            />
         </StyledSection>
      </>
   );
};

export default CrewSection;
