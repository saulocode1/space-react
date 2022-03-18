import styled from "styled-components";

export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: ${(props) => props.maxHeight};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background-image: url(${(props) => props.background});
    background-repeat: no-repeat;
`;
