import React from "react";
import CrewSection from "../..";
import DouglasImage from "../../../../assets/crew/image-douglas-hurley.png";

const DouglasSection = () => {
   return (
      <>
         <CrewSection
            imageMargin="1.25rem"
            imageWidth="11.07rem"
            src={DouglasImage}
            crewSubtitle="Commander"
            crewTitle="Douglas Hurley"
            crewText="Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
         />
      </>
   );
};

export default DouglasSection;
