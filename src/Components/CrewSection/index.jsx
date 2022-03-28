import Header from "../Header";
import { SectionLine, StyledSection } from "../Section/styled";
import CrewBackground from "../../assets/crew/background-crew-mobile.jpg";
import SectionFirstTitle from "../Section/SectionText";
import CrewImage from "./CrewSectionImage/styled";
import ImageWrapper from "./styled";

import ImageTest from "../../assets/crew/image-douglas-hurley.png"

const CrewSection = ({ src }) => (
   <>
      <StyledSection
         maxHeight="44.375rem"
         width="23.4375rem"
         height="44.375rem"
         background={CrewBackground}
      >
         <Header />
         <SectionFirstTitle titleNumber="02" firstTitle="meet your crew" />
         <ImageWrapper>
            <CrewImage src={ImageTest} />
            <SectionLine />
         </ImageWrapper>
      </StyledSection>
   </>
);

export default CrewSection;
