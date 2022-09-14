import ApplicationLogo from "../../../components/logos/ApplicationLogo";
import DropdownButton from "../../../components/buttons/dropdown/DropdownButton";
import ThemeList from "../../theming/ThemeList";
import LanguageList from "../../language/LanguageList";
import About from "../../about/About";
import LoginButton from "../../login/LoginButton"
import SignupButton from "../../signup/SignupButton"
import IconButton from "../../../components/buttons/IconButton";
import * as styled from "./HomeNavigationBarStyled";
import { media } from "../../../components/media/MediaQueries";
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux'
import { setIsMenuVisible } from "../../menu/MenuSlice";
import { useLocation } from 'react-router-dom';
import { routeNames } from "../../../resources/constants/RouteNames";

export default function HomeNavigationBar(props) {
  const [ t ] = useTranslation();
  const dispatch = useDispatch();
  const location = useLocation();
  const isMenuVisible = useSelector(state => state.menu.isMenuVisible);
  const makeVisible = !isMenuVisible;
  const isHomeLocation = location.pathname === routeNames.home;

  return (
    <styled.NavigationBar>
      <ApplicationLogo title={t("thullo")}/>

      <media.Desktop>
        <styled.DropdownsContainer>
          <DropdownButton text={t("theme")} dropdownContent={(<ThemeList/>)}/>
          <DropdownButton text={t("about")} dropdownContent={(<About/>)} width={45}/>
          <DropdownButton text={t("language")} dropdownContent={(<LanguageList/>)}/>
        </styled.DropdownsContainer>

        { isHomeLocation ? <ButtonsContainer/> : null }
      </media.Desktop>

      <media.TabletAndBellow>
        <IconButton 
          icon={isMenuVisible ? "close" : "menu"}
          onClick={menuButtonClicked.bind(null, makeVisible)}/>
      </media.TabletAndBellow>
    </styled.NavigationBar>
  );

  function menuButtonClicked(makeVisible) {
    dispatch(setIsMenuVisible(makeVisible));
  }
}

function ButtonsContainer(props) {
  return(
    <styled.ButtonsContainer>
      <LoginButton />
      <SignupButton />
    </styled.ButtonsContainer>
  );
}