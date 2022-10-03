import ApplicationLogo from "../../../../components/shared/logos/ApplicationLogo";
import DropdownButton from "../../../../components/shared/buttons/dropdown/DropdownButton";
import ThemeList from "../../theming/ThemeList";
import LanguageList from "../../language/LanguageList";
import About from "../../../../components/general/about/About";
import LoginButton from "../../login/LoginButton";
import SignupButton from "../../signup/SignupButton";
import IconButton from "../../../../components/shared/buttons/IconButton";
import styled from "styled-components";
import * as styledComponents from "./navigationBarStyled";
import { media } from "../../../../components/shared/media/MediaQueries";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { setIsMenuVisible } from "../../../../slices/menuSlice";
import { sizes } from "../../../../resources/constants/sizes";

export const DropdownsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-grow: 1;
  margin-left: ${sizes.contentOffsetRem}rem;
  gap: ${sizes.contentOffsetRem}rem;
`;

export default function HomeNavigationBar(props) {
  const [ t ] = useTranslation();
  const dispatch = useDispatch();
  const isMenuVisible = useSelector(state => state.menu.isMenuVisible);
  const makeVisible = !isMenuVisible;

  return (
    <styledComponents.NavigationBar>
      <ApplicationLogo title={t("thullo")}/>

      <media.Desktop>
        <DropdownsContainer>
          <DropdownButton text={t("theme")} dropdownContent={(<ThemeList/>)}/>
          <DropdownButton text={t("about")} dropdownContent={(<About/>)} width={45}/>
          <DropdownButton text={t("language")} dropdownContent={(<LanguageList/>)}/>
        </DropdownsContainer>
        
        <ButtonsContainer/>
      </media.Desktop>

      <media.TabletAndBellow>
        <IconButton 
          icon={isMenuVisible ? "close" : "menu"}
          onClick={() => dispatch(setIsMenuVisible(makeVisible))}/>
      </media.TabletAndBellow>
    </styledComponents.NavigationBar>
  );
}

function ButtonsContainer(props) {
  return(
    <styledComponents.UtilityContainer>
      <LoginButton />
      <SignupButton />
    </styledComponents.UtilityContainer>
  );
}