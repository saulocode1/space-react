import styled from 'styled-components';

const SectionImage = styled.img.attrs((props) => ({src: props.src}))`
    width: 10.625rem;
    height: auto;
    margin-bottom: 1.625rem;
`;

export default SectionImage;