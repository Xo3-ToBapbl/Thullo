import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'
import { themeNames } from '../../../resources/constants/themeNames';
import { setTheme } from "../../../slices/themeListSlice"
import { ListLabelStyled } from "../../shared/labels/listLabelStyled";
import { ListInputStyled } from "../../shared/inputs/listInputsStyled";
import { useTranslation } from 'react-i18next';

const IconStyled = styled.p`
  font-size: 1.6rem;
  margin-top: 5px;
`;

function ThemeListItem(props) { 
  return (
    <ListLabelStyled>
      <ListInputStyled
        type="radio" 
        name="theme"
        defaultChecked={props.isChecked} 
        onClick={props.onChange} />

      {props.text}

      <IconStyled className="material-icons">{props.icon}</IconStyled>
    </ListLabelStyled>
  );
}

export default function ThemeList() {
  const [ t ] = useTranslation();
  const themeName = useSelector((state) => state.theme.name);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <ThemeListItem 
        text={t("lightTheme")}
        icon="light_mode"
        onChange={changed.bind(null, themeNames.light)} 
        isChecked={themeName === themeNames.light} />

      <ThemeListItem 
        text={t("darkTheme")}
        icon="dark_mode"
        onChange={changed.bind(null, themeNames.dark)}
        isChecked={themeName === themeNames.dark} />
    </React.Fragment>
  );

  function changed(theme) {
    dispatch(setTheme(theme));
  }
}