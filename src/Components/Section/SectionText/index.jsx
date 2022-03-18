import React from "react";
import { FirstTitle, StyledTextSpan, TitleWrapper } from "./styled";

const SectionFirstTitle = ({titleNumber, firstTitle}) => (
    <TitleWrapper>
        <FirstTitle>
            <StyledTextSpan>{titleNumber}</StyledTextSpan>
            {firstTitle}
        </FirstTitle>
    </TitleWrapper>
)

export default SectionFirstTitle;