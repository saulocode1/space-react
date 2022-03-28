import { CrewSubtitle, CrewTitle, StyledCrewText, WrapperText } from "./styled";

const CrewText = ({ crewSubtitle, crewTitle, crewText }) => (
   <WrapperText>
      <CrewSubtitle>{crewSubtitle}</CrewSubtitle>
      <CrewTitle>{crewTitle}</CrewTitle>
      <StyledCrewText>{crewText}</StyledCrewText>
   </WrapperText>
);

export default CrewText;
