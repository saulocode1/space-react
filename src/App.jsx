import GlobalStyled from "./globalStyled";
import AOS from "aos";
import "aos/dist/aos.css";

// import TechnologySection from "./Components/TechnologySection";
import VehicleSection from "./Components/TechnologySection/VehicleSection";

const App = () => {
   AOS.init({
      duration: 1500,
   });

   return (
      <>
         <GlobalStyled />
         <VehicleSection />
      </>
   );
};

export default App;
