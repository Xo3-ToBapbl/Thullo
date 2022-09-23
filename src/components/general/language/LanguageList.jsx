import React from 'react';
import { languageCodes } from '../../../resources/constants/languageCodes';
import { useTranslation } from 'react-i18next';
import { storageKeys } from "../../../resources/constants/storageKeys";
import { ListLabelStyled } from '../../shared/labels/listLabelStyled';
import { ListInputStyled } from "../../shared/inputs/listInputsStyled";

function LanguageListItem(props) { 
  return (
    <ListLabelStyled>
      <ListInputStyled
        type="radio" 
        name="language" 
        defaultChecked={props.isChecked} 
        onClick={props.onChange} />

      {props.text}
      
    </ListLabelStyled>
  );
}

export default function LanguageList() {
  const [ t, i18n ] = useTranslation();
  const language = i18n.language;
  const changeLanguage = (language) => i18n.changeLanguage(language);

  function changed(language) {
    changeLanguage(language);
    localStorage.setItem(storageKeys.language, language);
  }

  return (
    <React.Fragment>
      <LanguageListItem 
        text={t("english")}
        onChange={changed.bind(null, languageCodes.en)} 
        isChecked={language === languageCodes.en} />

      <LanguageListItem 
        text={t("polish")}
        onChange={changed.bind(null, languageCodes.pl)}
        isChecked={language === languageCodes.pl} />
    </React.Fragment>
  );
}