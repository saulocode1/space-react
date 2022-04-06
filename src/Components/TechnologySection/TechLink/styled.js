import styled from "styled-components";

export const TechLink = styled.a`
   display: flex;
   align-items: center;
   justify-content: center;
   font-family: "Bellefair";
   width: 2.5rem;
   height: 2.5rem;
   border-radius: 50%;
   border: 1.5px solid var(--fifth-grey);
   color: var(--color-white);
   font-weight: 400;
   cursor: pointer;

   &:first-child {
      background-color: var(--color-white);
      color: var(--color-black);
      border: none;
   }
`;

export const StyledLinkWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   width: 9.5rem;
`;
