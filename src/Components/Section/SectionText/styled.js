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

export const TextWrapper = styled.div`
   width: 20.4375rem;
   text-align: center;
   margin-bottom: 2rem;
`;

export const StyledTextSpan = styled.span`
   font-family: "Barlow Condensed", sans-serif;
   font-weight: 400;
   font-size: var(--font-1);
   color: var(--second-grey);
`;

export const TitleWrapper = styled.div`
   max-width: 13.8125rem;
   display: flex;
   justify-content: center;
   gap: 2rem;
   align-items: center;
   margin-top: 5.5rem;
   margin-bottom: 2rem;
   margin-inline: auto;
`;

export const MainTitle = styled.h1`
   font: 400 var(--font-6) "Bellafair";
   color: var(--color-white);
   text-transform: uppercase;
   line-height: 4.0113rem;
`;
