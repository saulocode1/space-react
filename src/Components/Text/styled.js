import styled from "styled-components";

export const FirstTitle = styled.h2`
    font-family: "Barlow Condensed", sans-serif;
    font-weight: 400;
    font-size: var(--font-1);
    color: var(--first-grey);
    text-transform: uppercase;
`;

export const SectionText = styled.p`
    font-weight: 400;
    font-family: "Barlow", sans-serif;
    font-size: var(--font-3);
    color: var(--first-grey);
    text-align: center;
    line-height: var(--line-height-1);
`;

export const StyledTextSpan = styled.span`
    font-family: "Barlow Condensed", sans-serif;
    font-weight: 400;
    font-size: var(--font-1);
    color: var(--second-grey);
    margin-right: 1.125rem;

`;

export const TitleWrapper = styled.div`
    max-width: 13.8125rem;
    display: flex;
    justify-content: space-between;
    margin-top: 5.5rem;
    margin-bottom: 2rem;
`;
