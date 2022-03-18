import React from "react";
import { SectionLogo } from "../Logo/styled";
import MenuIcon from "../Menu/styled";
import { StyledHeader } from "./styled";

const Header = () => (
    <StyledHeader>
        <SectionLogo/>
        <MenuIcon/>
    </StyledHeader>
)

export default Header;