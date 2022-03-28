import Header from "./Components/Header";
import GlobalStyled from "./globalStyled";
import EuropaSection from "./Sections/Europa";
import MarsSection from "./Sections/Mars";
import TitanSection from "./Sections/Titan";
import MoonSection from "./Sections/Moon";
import HomeSection from "./Sections/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import CrewSection from "./Components/CrewSection";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
   AOS.init({
      duration: 1500,
   });

   return (
      <>
         <GlobalStyled />
         <CrewSection />
      </>
      // <>
      //    <Router>
      //       <Header />
      //       <Routes>
      //          <Route path="/space-react/" element={<HomeSection />} />
      //          <Route path="/space-react/moon" element={<MoonSection />} />
      //          <Route path="/space-react/mars" element={<MarsSection />} />
      //          <Route path="/space-react/europa" element={<EuropaSection />} />
      //          <Route path="/space-react/titan" element={<TitanSection />} />
      //       </Routes>
      //    </Router>
      // </>
   );
};

export default App;
