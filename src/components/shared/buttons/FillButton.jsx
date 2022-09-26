import BaseButtonStyled from "./baseButtonStyled";
import styled from 'styled-components';

export const FillButtonStyled = styled(BaseButtonStyled)`
  color: ${props => props.theme.onAccent};
  background-color: ${props => props.theme.accent};
`;

export default function FillButton(props) {
  return (
    <FillButtonStyled style={props.style} onClick={props.onClick}>
      {props.children}
    </FillButtonStyled>
  );
}