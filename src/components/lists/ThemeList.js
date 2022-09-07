import React, { useState } from 'react';
import styled from 'styled-components';
import { themeNames } from '../../resources/constants/ThemeNames';
import { themeService } from '../../services/user-interface/ThemeService';

const LabelStyled = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--onPrimary);
  font-family: notosans;
  font-size: 1.6rem;
  gap: 1rem;
  cursor: pointer;
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

function ThemeListItem(props) { 
  return (
    <LabelStyled>
      <InputStyled type="radio" name="theme" defaultChecked={props.isChecked} onClick={props.onChange} />
      {props.text}
      <IconStyled className="material-icons">{props.icon}</IconStyled>
    </LabelStyled>
  );
}

export default function ThemeList() {
  const [theme, setTheme] = useState(themeService.theme.name);

  return (
    <React.Fragment>
      <ThemeListItem 
        text="Light theme"
        icon="light_mode"
        onChange={changed.bind(null, themeNames.light)} 
        isChecked={theme === themeNames.light} />

      <ThemeListItem 
        text="Dark theme"
        icon="dark_mode"
        onChange={changed.bind(null, themeNames.dark)}
        isChecked={theme === themeNames.dark} />
    </React.Fragment>
  );

  function changed(theme, e) {
    themeService.setCurrent(theme);
    setTheme(theme);
  }
}