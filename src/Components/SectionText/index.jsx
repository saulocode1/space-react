import {
   WrapperText,
   StyledSectionText,
   SectionSubtitle,
   SectionTitle,
} from "./styled";

const SectionText = ({
   sectionTitle,
   sectionSubtitle,
   sectionText,
   fontFamily,
   fontHeight,
   fontColor,
   fontSize,
   marginTop
}) => (
   <WrapperText marginTop={marginTop} >
      <SectionSubtitle
         fontFamily={fontFamily}
         fontHeight={fontHeight}
         fontColor={fontColor}
         fontSize={fontSize}
      >
         {sectionSubtitle}
      </SectionSubtitle>
      <SectionTitle>{sectionTitle}</SectionTitle>
      <StyledSectionText>{sectionText}</StyledSectionText>
   </WrapperText>
);

export default SectionText;
