import BaseButtonStyled from "./BaseButton.js";
import styled from 'styled-components';

const FillButtonStyled = styled(BaseButtonStyled)`
  color: ${props => props.theme.onAccent};
  background-color: ${props => props.theme.accent};
`;

export default function FillButton(props) {
  return (
    <FillButtonStyled>
      {props.children}
    </FillButtonStyled>
  );
}