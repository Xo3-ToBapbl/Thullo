import ApplicationLogo from "../../../components/logos/ApplicationLogo";
import FillButton from "../../../components/buttons/FillButton";
import OutlineButton from "../../../components/buttons/OutlineButton";
import DropdownButton from "../../../components/buttons/DropdownButton";
import ThemeList from "../../theming/ThemeList";
import LanguageList from "../../language/LanguageList";
import About from "../../about/About";
import IconButton from "../../../components/buttons/IconButton";
import { media } from "../../../components/media/MediaQueries";
import { NavStyled, DropdownsContainerStyled, ButtonsContainerStyled } from "./NavigationBarStyled";
import { useTranslation } from 'react-i18next';

export default function NavigationBar(props) {
  const [ t ] = useTranslation();
  return (
    <NavStyled>
      <ApplicationLogo title="Thullo"/>

      <media.Desktop>
        <DropdownsContainerStyled>
          <DropdownButton text={t("theme")} dropdownContent={(<ThemeList/>)}/>
          <DropdownButton text={t("about")} dropdownContent={(<About/>)} width={45}/>
          <DropdownButton text={t("language")} dropdownContent={(<LanguageList/>)}/>
        </DropdownsContainerStyled>

        <ButtonsContainerStyled>
          <OutlineButton children={t("logIn")} />
          <FillButton children={t("signIn")} />
        </ButtonsContainerStyled>
      </media.Desktop>

      <media.TabletAndBellow>
        <IconButton icon="menu" />
      </media.TabletAndBellow>
    </NavStyled>
  );
}