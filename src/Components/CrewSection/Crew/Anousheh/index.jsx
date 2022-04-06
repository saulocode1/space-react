import React from "react";
import CrewSection from "../..";
import AnoushehImage from "../../../../assets/crew/image-anousheh-ansari.png";

const AnoushehSection = () => {
   return (
      <>
         <CrewSection
            imageWidth="14.14rem"
            src={AnoushehImage}
            crewSubtitle="Flight Engineer"
            crewTitle="Anousheh Ansari"
            crewText="Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. "
         />
      </>
   );
};

export default AnoushehSection;
