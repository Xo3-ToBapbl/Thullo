import BaseButtonStyled from "./BaseButton.js";
import styled from 'styled-components';

const OutlineButtonStyled = styled(BaseButtonStyled)`
  color: var(--neutral);
  background-color: var(--primary);
  border: 1px solid var(--neutral);
`;

export default function OutlineButton(props) {
  return (
    <OutlineButtonStyled>
      {props.children}
    </OutlineButtonStyled>
  );
}