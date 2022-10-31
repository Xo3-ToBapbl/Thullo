import "./menuAnimation.css";
import About from "../about/About";
import ThemeList from "../theming/ThemeList";
import LoginButton from "../login/LoginButton";
import SignupButton from "../signup/SignupButton";
import LanguageList from "../language/LanguageList";
import ExpandableButton from "../../shared/buttons/expandable/ExpandableButton";
import * as styled from "./menuStyled";
import React, { useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { setIsMenuVisibleAction } from "../../../slices/menuSlice";
import { CSSTransition } from "react-transition-group";
import { media } from "../../shared/media/MediaQueries";
import { useDispatch } from "react-redux";
import { preventMainContentScrolling } from "../../../utils/domUtils";

export default function Menu(props) {
  const isTabletAndBelow = media.IsTabletAndBelow();
  const isVisible = isTabletAndBelow && props.isMenuVisible;

  return (
    <React.Fragment>
      <CSSTransition 
        in={isVisible} 
        unmountOnExit={true} 
        timeout={300} 
        classNames="menu">
        
        <MenuContainer />
      </CSSTransition>
    </React.Fragment>
  );
}

function MenuContainer() {
  const [ t ] = useTranslation();
  useEffect(preventMainContentScrolling, []);

  return (
    <styled.MenuStyled>
      <ExpandableButton text={t("theme")} dropdownContent={<ThemeList />} />
      <ExpandableButton text={t("about")} dropdownContent={(<About/>)} />
      <ExpandableButton text={t("language")} dropdownContent={(<LanguageList/>)} />

      <ButtonContainer />
    </styled.MenuStyled>
  );

}

function ButtonContainer() {
  const dispatch = useDispatch();
  const style = {flex: "1 1 0rem", height: "5rem"};

  function hideMenu() {
    dispatch(setIsMenuVisibleAction(false));
  }

  return(
    <styled.ButtonsContainer>
      <LoginButton style={style} clickCallback={hideMenu}/>
      <SignupButton style={style} clickCallback={hideMenu}/>
    </styled.ButtonsContainer>
  );
}