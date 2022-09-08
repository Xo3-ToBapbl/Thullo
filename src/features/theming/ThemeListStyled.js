import styled from 'styled-components';

export const LabelStyled = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${props => props.theme.onSecondary};
  font-family: notosans;
  font-size: 1.6rem;
  gap: 1rem;
  cursor: pointer;
`;

const inputSize = 1.8;
export const InputStyled = styled.input`
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
    content:'';
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

export const IconStyled = styled.p`
  font-size: 1.6rem;
`;