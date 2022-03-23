import React from "react";
import { Link, StyledNavBar } from "./styled";

import { NavLink as NavLinkRouter } from "react-router-dom";

const NavBar = () => (
   <StyledNavBar>
      <Link
         as={NavLinkRouter}
         to="/space-react/moon"
      >
         MOON
      </Link>
      <Link as={NavLinkRouter} to="/space-react/mars">
         MARS
      </Link>
      <Link as={NavLinkRouter} to="/space-react/europa">
         EUROPA
      </Link>
      <Link as={NavLinkRouter} to="/space-react/titan">
         TITAN
      </Link>
   </StyledNavBar>
);

export default NavBar;
