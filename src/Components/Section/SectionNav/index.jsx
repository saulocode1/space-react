import React from "react";
import { NavLink, StyledNavBar } from "./styled";

const NavBar = () => (
    <StyledNavBar>
        <NavLink>MOON</NavLink>
        <NavLink>MARS</NavLink>
        <NavLink>EUROPA</NavLink>
        <NavLink>TITAN</NavLink>
    </StyledNavBar>
)

export default NavBar;