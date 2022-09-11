import styled from "styled-components";
import { sizes } from "../../resources/constants/Sizes";

const BaseButtonStyled = styled.button`
  height: ${sizes.componentHeight}rem;
  border-radius: ${sizes.cornerRadius}rem;
  padding: 0rem 1.5rem;
  font-size: 1.6rem;
  font-family: poppins, sans-serif;
  cursor: pointer;

  &:hover {
    filter: brightness(105%);
  }

  &:active {
    filter: brightness(95%);
  }
`;

export default BaseButtonStyled;