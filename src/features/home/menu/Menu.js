import "./Animation.css";
import React, { useEffect } from "react";
import styled from "styled-components";
import ThemeList from "../../theming/ThemeList";
import LanguageList from "../../language/LanguageList";
import FillButton from "../../../components/buttons/FillButton";
import OutlineButton from "../../../components/buttons/OutlineButton";
import About from "../../about/About";
import ExpandableButton from "../../../components/buttons/expandable/ExpandableButton";
import { CSSTransition } from "react-transition-group";
import { sizes } from "../../../resources/constants/Sizes";
import { useTranslation } from 'react-i18next';
import { media } from "../../../components/media/MediaQueries";

const MenuStyled = styled.div`
  position: fixed;
  top: ${sizes.navBarHeight}rem;
  bottom: 0;
  width: 100%;
  padding: ${sizes.contentOffset}rem;
  padding-top: 1px;
  background-color: ${(props) => props.theme.secondary};
  border-top: 1px solid ${props => props.theme.divider};
  overflow: auto;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${sizes.contentOffset}rem;
  padding-top: ${sizes.contentOffset}rem;
`;

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
  useEffect(setBodyOverflow, []);

  return (
    <MenuStyled>
      <ExpandableButton text={t("theme")} dropdownContent={<ThemeList />} />
      <ExpandableButton text={t("about")} dropdownContent={(<About/>)} />
      <ExpandableButton text={t("language")} dropdownContent={(<LanguageList/>)} />

      <ButtonContainer />
    </MenuStyled>
  );

  function setBodyOverflow() {
    document.body.style.overflow = "hidden";
    return () => document.body.style.overflow = "auto";
  }
}

function ButtonContainer() {
  const [ t ] = useTranslation();
  const style = {flex: "1 1 0rem", height: "5rem"};

  return(
    <ButtonsContainer>
      <OutlineButton style={style} children={t("logIn")} />
      <FillButton style={style} children={t("signIn")} />
    </ButtonsContainer>
  );
}
