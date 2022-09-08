import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { themeNames } from '../../resources/constants/ThemeNames';
import { setTheme } from "./ThemeListSlice"

import { LabelStyled, InputStyled, IconStyled } from './ThemeListStyled';

function ThemeListItem(props) { 
  return (
    <LabelStyled>
      <InputStyled 
        type="radio" 
        name="theme" 
        defaultChecked={props.isChecked} 
        onClick={props.onChange} />

      {props.text}
      
      <IconStyled className="material-icons">{props.icon}</IconStyled>
    </LabelStyled>
  );
}

export default function ThemeList() {
  const themeName = useSelector((state) => state.theme.name);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <ThemeListItem 
        text="Light theme"
        icon="light_mode"
        onChange={changed.bind(null, themeNames.light)} 
        isChecked={themeName === themeNames.light} />

      <ThemeListItem 
        text="Dark theme"
        icon="dark_mode"
        onChange={changed.bind(null, themeNames.dark)}
        isChecked={themeName === themeNames.dark} />
    </React.Fragment>
  );

  function changed(theme) {
    dispatch(setTheme(theme));
  }
}