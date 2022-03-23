import Section from "../../Components/Section";
import Background from "../../assets/destination/background-destination-mobile.jpg";
import MarsImage from "../../assets/destination/image-mars.png";

const MarsSection = () => (
   <Section
      background={Background}
      titleNumber="01"
      firstTitle="Pick your destination"
      width="100vw"
      height="53.125rem"
      maxHeight="53.125rem"
      src={MarsImage}
      mainTitle="mars"
      sectionText="Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!
      "
      distance="225 MIL. km"
      travelTime="9 months"
   />
);

export default MarsSection;
