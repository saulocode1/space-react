import React from "react";
import { FirstTitle, StyledTextSpan, TitleWrapper } from "./styled";

const SectionFirstTitle = ({ titleNumber, firstTitle }) => (
   <TitleWrapper>
      <StyledTextSpan>{titleNumber}</StyledTextSpan>
      <FirstTitle>{firstTitle}</FirstTitle>
   </TitleWrapper>
);

export default SectionFirstTitle;
