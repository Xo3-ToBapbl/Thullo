import BaseButtonStyled from "./baseButtonStyled";
import styled from 'styled-components';

export const AccentButtonStyled = styled(BaseButtonStyled)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.onAccent};
  background-color: ${props => props.theme.accent};
`;

export default function AccentButton(props) {
  return (
    <AccentButtonStyled style={props.style} onClick={props.onClick}>
      {props.children}
    </AccentButtonStyled>
  );
}