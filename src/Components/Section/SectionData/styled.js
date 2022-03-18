import styled from "styled-components";

export const DataTitle = styled.h1`
    font: 400 var(--font-5) "Barlow Condensed";
    color: var(--first-grey);
    text-transform: uppercase;
`;

export const DataText = styled.p`
    font: 400 var(--font-7) "Bellefair";
    color: var(--color-white);
    line-height: var(--line-height-3);
    text-transform: uppercase;
`;

export const DataWrapper = styled.div`
    width: 13.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    margin-top: 2rem;
`;
