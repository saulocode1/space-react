import GlobalStyled from "./globalStyled";
import AOS from "aos";
import "aos/dist/aos.css";

import TechnologySection from "./Components/TechnologySection";

const App = () => {
   AOS.init({
      duration: 1500,
   });

   return (
      <>
         <GlobalStyled />
         <TechnologySection />
      </>
   );
};

export default App;
