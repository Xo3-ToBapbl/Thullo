import "./Animation.css";
import About from "../about/About";
import ThemeList from "../theming/ThemeList";
import LoginButton from "../login/LoginButton";
import SignupButton from "../signup/SignupButton";
import LanguageList from "../language/LanguageList";
import ExpandableButton from "../../components/buttons/expandable/ExpandableButton";
import * as styled from "./MenuStyled"
import React, { useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { setIsMenuVisible } from "./MenuSlice";
import { CSSTransition } from "react-transition-group";
import { media } from "../../components/media/MediaQueries";
import { useDispatch } from "react-redux";

export default function Menu(props) {
  const isTabletAndBelow = media.IsTabletAndBelow();
  const isVisible = isTabletAndBelow && props.isMenuVisible;

  return (
    <React.Fragment>
      <CSSTransition in={isVisible} unmountOnExit={true} timeout={300} classNames="menu">
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

  function preventMainContentScrolling() {
    document.body.style.overflow = "hidden";
    return () => document.body.style.overflow = "auto";
  }
}

function ButtonContainer() {
  const dispatch = useDispatch();
  const style = {flex: "1 1 0rem", height: "5rem"};

  return(
    <styled.ButtonsContainer>
      <LoginButton style={style} clickCallback={hideMenu}/>
      <SignupButton style={style} clickCallback={hideMenu}/>
    </styled.ButtonsContainer>
  );

  function hideMenu() {
    dispatch(setIsMenuVisible(false));
  }
}