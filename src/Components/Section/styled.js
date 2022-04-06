import styled from "styled-components";

export const StyledSection = styled.section`
   display: flex;
   flex-direction: column;
   align-items: center;
   max-height: ${(props) => props.maxHeight};
   max-width: ${(props) => props.maxWidth};
   width: ${(props) => props.width};
   height: ${(props) => props.height};
   background-image: url(${(props) => props.background});
   background-repeat: no-repeat;
`;

export const SectionLine = styled.div`
   height: 2px;
   width: 20.4375rem;
   background-color: var(--third-grey);
`;

export const AosDiv = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`;
