import styled from "styled-components";

const inputSize = 1.8;
export const ListInputStyled = styled.input`
  appearance:none;
  width:${inputSize}rem;
  height:${inputSize}rem;
  border: 2px solid ${props => props.theme.onSecondary};
  border-radius:50%;
  outline:none;

  &:checked {
    border: 2px solid ${props => props.theme.accent};
  }

  &:before {
    content:"";
    display:block;
    width:60%;
    height:60%;
    margin: 20% auto;    
    border-radius:50%;    
}

  &:checked:before {
    background-color: ${props => props.theme.accent};
  }
`;