import ApplicationLogo from "../../components/logos/ApplicationLogo";
import FillButton from "../../components/buttons/FillButton";
import OutlineButton from "../../components/buttons/OutlineButton";
import DropdownButton from "../../components/buttons/dropdown/DropdownButton";
import ThemeList from "../theming/ThemeList";
import LanguageList from "../language/LanguageList";
import About from "../about/About";
import IconButton from "../../components/buttons/IconButton";
import * as styled from "./NavigationBarStyled";
import { media } from "../../components/media/MediaQueries";
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux'
import { setIsMenuVisible } from "./NavigationBarSlice";
import { useNavigate, useLocation } from 'react-router-dom';
import { routeNames } from "../../resources/constants/RouteNames";

export default function NavigationBar(props) {
  const [ t ] = useTranslation();
  const dispatch = useDispatch();
  const location = useLocation();
  const isMenuVisible = useSelector(state => state.navigationBar.isMenuVisible);
  const makeVisible = !isMenuVisible;
  const isHomeLocation = location.pathname === routeNames.home;

  return (
    <styled.NavigationBar>
      <ApplicationLogo title="Thullo"/>

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
  const [ t ] = useTranslation();
  const navigate = useNavigate();

  return(
    <styled.ButtonsContainer>
      <OutlineButton children={t("logIn")} onClick={loginButtonClicked.bind(null, navigate)} />
      <FillButton children={t("signIn")} />
    </styled.ButtonsContainer>
  );

  function loginButtonClicked(navigate) {
    navigate(routeNames.login);
  }
}