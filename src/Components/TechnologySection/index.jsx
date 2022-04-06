import { StyledSection } from "../Section/styled";
import TecBackground from "../../assets/technology/background-technology-mobile.jpg";
import Header from "../Header";
import SectionFirstTitle from "../Section/SectionText";
import { TechImage } from "./styled";

import Image from "../../assets/technology/image-launch-vehicle-landscape.png";
import LinkWrapper from "./TechLink";

const TechnologySection = ({ src }) => (
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
         <TechImage src={Image} />
         <LinkWrapper />
      </StyledSection>
   </>
);
export default TechnologySection;
