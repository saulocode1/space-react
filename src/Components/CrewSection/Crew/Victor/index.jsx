import React from "react";
import CrewSection from "../..";
import VictorImage from "../../../../assets/crew/image-victor-glover.png";

const VictorSection = () => {
   return (
      <>
         <CrewSection
            imageWidth="11.30rem"
            src={VictorImage}
            crewSubtitle="PILOT"
            crewTitle="Victor Glover"
            crewText="Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
         />
      </>
   );
};

export default VictorSection;
