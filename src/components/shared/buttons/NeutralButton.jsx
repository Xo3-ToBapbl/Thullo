import BaseButtonStyled from "./baseButtonStyled";
import styled from 'styled-components';

export const NeutralButtonStyled = styled(BaseButtonStyled)`
  color: ${props => props.theme.onNeutral};
  background-color: ${props => props.theme.neutral};

  &:hover {
    filter: brightness(103%);
  }

  &:active {
    filter: brightness(98%);
  }
`;

export default function NeutralButton(props) {
  return (
    <NeutralButtonStyled style={props.style} onClick={props.onClick}>
      {props.children}
    </NeutralButtonStyled>
  );
}