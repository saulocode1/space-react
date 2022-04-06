import React from "react";
import CrewSection from "../..";
import MarkImage from "../../../../assets/crew/image-mark-shuttleworth.png";

const MarkSection = () => {
   return (
      <>
         <CrewSection
            imageWidth="9.62rem"
            src={MarkImage}
            crewSubtitle="Mission Specialist"
            crewTitle="MARK SHUTTLEWORTH"
            crewText="Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
         />
      </>
   );
};

export default MarkSection;
