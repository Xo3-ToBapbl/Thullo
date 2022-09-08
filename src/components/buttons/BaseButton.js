import styled from "styled-components";

const BaseButtonStyled = styled.button`
  height: 4rem;
  border-radius: 0.8rem;
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