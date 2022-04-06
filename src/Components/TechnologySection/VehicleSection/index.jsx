import TechnologySection from "..";
import VehicleImage from "../../../assets/technology/image-launch-vehicle-landscape.png";

const VehicleSection = () => (
   <TechnologySection
      src={VehicleImage}
      marginTop="1.625rem"
      fontFamily="Barlow Condensed"
      fontColor="var(--first-grey)"
      fontHeight="1.0625rem"
      fontSize="var(--font-9)"
      sectionSubtitle="THE TERMINOLOGY…"
      sectionTitle="LAUNCH VEHICLE"
      sectionText="A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
   />
);

export default VehicleSection;
