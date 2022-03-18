import React from "react";
import SectionImage from "./SectionImage/styled";
import NavBar from "./SectionNav";
import SectionFirstTitle from "./SectionText";
import { StyledSection } from "./styled";

const Section = ({ background, title, number, width, height, src }) => (
    <>
        <StyledSection background={background} width={width} height={height}>
            <SectionFirstTitle title={title} number={number} />
            <SectionImage src={src} />
            <NavBar />
        </StyledSection>
    </>
);

export default Section;
