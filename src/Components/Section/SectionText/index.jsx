import React from "react";
import { FirstTitle, StyledTextSpan, TitleWrapper } from "./styled";

const SectionFirstTitle = ({title, number}) => (
    <TitleWrapper>
        <FirstTitle>
            <StyledTextSpan>{number}</StyledTextSpan>
            {title}
        </FirstTitle>
    </TitleWrapper>
)

export default SectionFirstTitle;