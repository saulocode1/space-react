import styled from "styled-components";

const CrewImage = styled.img.attrs((props) => ({ src: props.src }))`
   width: ${(props) => props.imageWidth};
   height: auto;
   margin-left: ${(props) => props.imageMargin};
`;

export default CrewImage;
