import BaseButtonStyled from "./BaseButton.js";
import styled from 'styled-components';

const FillButtonStyled = styled(BaseButtonStyled)`
  color: var(--onAccent);
  background-color: var(--accent);
`;

export default function FillButton(props) {
  return (
    <FillButtonStyled>
      {props.children}
    </FillButtonStyled>
  );
}