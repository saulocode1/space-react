import React from "react";

import Background from "../../assets/destination/background-destination-mobile.jpg";
import EuropaImage from "../../assets/destination/image-europa.png";
import Section from "../../Components/Section";

const EuropaSection = () => (
   <Section
      background={Background}
      titleNumber="01"
      firstTitle="Pick your destination"
      width="100vw"
      height="53.125rem"
      maxHeight="53.125rem"
      src={EuropaImage}
      mainTitle="Europa"
      sectionText="The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."
      distance="628 MIL. km"
      travelTime="3 years"
   />
);

export default EuropaSection;