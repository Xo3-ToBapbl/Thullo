import React from 'react';
import styled from 'styled-components';

const LabelStyled = styled.label`
  display: flex;
  align-items: center;
  color: var(--onPrimary);
  font-family: notosans;
  font-size: 1.6rem;
  gap: 1rem;
`;

const inputSize = 1.8;
const InputStyled = styled.input`
  appearance:none;
  width:${inputSize}rem;
  height:${inputSize}rem;
  border: 2px solid var(--onPrimary);
  border-radius:50%;
  outline:none;

  &:checked {
    border: 2px solid var(--accent);
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
    background-color:var(--accent);
  }
`;

const IconStyled = styled.p`
  font-size: 1.6rem;
`;

export default function ThemeList() {
  return (
    <React.Fragment>
      <LabelStyled>
        <InputStyled type="radio" name="theme" />
        Light
        <IconStyled className="material-icons">light_mode</IconStyled>
      </LabelStyled>

      <LabelStyled>
        <InputStyled type="radio" name="theme" />
        Dark
        <IconStyled className="material-icons">dark_mode</IconStyled>
      </LabelStyled>
    </React.Fragment>
  );
}