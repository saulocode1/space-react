import styled from "styled-components";

export const Link = styled.a`
   font: 400 var(--font-5) "Barlow Condensed";
   line-height: 1.05rem;
   color: var(--color-white);
   cursor: pointer;
   text-decoration: none;
   display: flex;
   flex-direction: column;
   align-items: center;

   /* &:after {
       content: "";
       height: 0.1875rem;
       margin-top: 0.5rem;
       width: 2.25rem;
       background-color: white;
   } */
`;

export const StyledNavBar = styled.nav`
   width: 14.8438rem;
   display: flex;
   justify-content: space-between;
   height: 1.75rem;
   margin-bottom: 1.25rem;
`;
