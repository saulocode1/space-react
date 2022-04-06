import { StyledSection } from "../Section/styled";
import TecBackground from "../../assets/technology/background-technology-mobile.jpg";
import Header from "../Header";
import SectionFirstTitle from "../Section/SectionText";
import { TechImage } from "./styled";

import LinkWrapper from "./TechLink";
import SectionText from "../SectionText";

const TechnologySection = ({
   src,
   marginTop,
   fontFamily,
   fontColor,
   fontHeight,
   fontSize,
   sectionSubtitle,
   sectionTitle,
   sectionText,
}) => (
   <>
      <StyledSection
         maxHeight="44.375rem"
         width="23.4375rem"
         maxWidth="23.4375rem"
         height="44.375rem"
         background={TecBackground}
      >
         <Header />
         <SectionFirstTitle titleNumber="03" firstTitle="SPACE LAUNCH 101" />
         <TechImage src={src} />
         <LinkWrapper />
         <SectionText
            marginTop={marginTop}
            fontFamily={fontFamily}
            fontColor={fontColor}
            fontHeight={fontHeight}
            fontSize={fontSize}
            sectionSubtitle={sectionSubtitle}
            sectionTitle={sectionTitle}
            sectionText={sectionText}
         />
      </StyledSection>
   </>
);
export default TechnologySection;
