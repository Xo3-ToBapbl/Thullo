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
import { sizes } from "../../../../resources/constants/sizes";
import { useDispatch } from "react-redux";
import { reducersNames } from "../../../../resources/constants/reducersNames";
import { useSelectorBy } from "../../../../hooks/useSelector";
import { setIsMenuVisibleAction } from "../../../../slices/menuSlice";

export const DropdownsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-grow: 1;
  margin-left: ${sizes.contentOffsetRem}rem;
  gap: ${sizes.contentOffsetRem}rem;
`;

export default function HomeNavigationBar() {
  const [ t ] = useTranslation();
  const dispatch = useDispatch();
  const isMenuVisible = useSelectorBy(reducersNames.menu);
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
          onClick={() => dispatch(setIsMenuVisibleAction(makeVisible))}/>
      </media.TabletAndBellow>
    </styledComponents.NavigationBar>
  );
}

function ButtonsContainer() {
  return(
    <styledComponents.UtilityContainer>
      <LoginButton />
      <SignupButton />
    </styledComponents.UtilityContainer>
  );
}