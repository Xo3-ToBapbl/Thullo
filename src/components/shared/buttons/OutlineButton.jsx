import BaseButtonStyled from "./baseButtonStyled.js";
import styled from 'styled-components';

export const OutlineButtonStyled = styled(BaseButtonStyled)`
  background-color: transparent;
  color: ${props => props.theme.neutralAccent};
  border: 2px solid ${props => props.theme.neutralAccent};

  &:hover {
    color: ${props => props.theme.accent};
    border: 2px solid ${props => props.theme.accent};
  }

  &:active {
    filter: brightness(95%);
  }
`;

export default function OutlineButton(props) {
  return (
    <OutlineButtonStyled style={props.style} onClick={props.onClick}>
      {props.children}
    </OutlineButtonStyled>
  );
}