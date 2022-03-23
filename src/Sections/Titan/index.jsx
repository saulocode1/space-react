import Section from "../../Components/Section";
import Background from "../../assets/destination/background-destination-mobile.jpg";
import TitanImage from "../../assets/destination/image-titan.png";

const TitanSection = () => (
   <Section
      background={Background}
      titleNumber="01"
      firstTitle="Pick your destination"
      width="100vw"
      height="53.125rem"
      maxHeight="53.125rem"
      src={TitanImage}
      mainTitle="Titan"
      sectionText="The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.
      "
      distance="1.6 BIL. km"
      travelTime="7 years"
   />
);

export default TitanSection;
