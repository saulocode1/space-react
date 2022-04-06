import styled from "styled-components";

export const SectionSubtitle = styled.h2`
   font-size: ${props => props.fontSize};
   font-family: ${props => props.fontFamily};
   color: ${props => props.fontColor};
   line-height: ${props => props.fontHeight};
   font-weight: 400;
   margin-bottom: 0.5625rem;
   text-transform: uppercase;
`;

export const SectionTitle = styled.h1`
   font-size: var(--font-8);
   text-transform: uppercase;
   font-family: "Bellefair";
   color: var(--color-white);
   line-height: 1.75rem;
   font-weight: 400;
   margin-bottom: 1.125rem;
`;

export const StyledSectionText = styled.p`
   font-size: var(--font-3);
   font-family: "Barlow";
   color: var(--first-grey);
   line-height: 1.5625rem;
   font-weight: 400;
   text-align: center;
`;

export const WrapperText = styled.div`
   margin-top: ${props => props.marginTop};
   width: 20.4375rem;
   height: auto;
   max-height: 10.625rem;
   display: flex;
   flex-direction: column;
   align-items: center;
`;
