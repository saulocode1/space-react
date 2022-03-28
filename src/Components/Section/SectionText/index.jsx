import React from "react";
import { FirstTitle, StyledNumber, TitleWrapper } from "./styled";

const SectionFirstTitle = ({ titleNumber, firstTitle }) => (
   <TitleWrapper>
      <StyledNumber>{titleNumber}</StyledNumber>
      <FirstTitle>{firstTitle}</FirstTitle>
   </TitleWrapper>
);

export default SectionFirstTitle;
