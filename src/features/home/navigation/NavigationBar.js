import ApplicationLogo from "../../../components/logos/ApplicationLogo";
import FillButton from "../../../components/buttons/FillButton";
import OutlineButton from "../../../components/buttons/OutlineButton";
import DropdownButton from "../../../components/buttons/DropdownButton";
import ThemeList from "../../theming/ThemeList";
import { NavStyled, DropdownsContainerStyled, ButtonsContainerStyled } from "./NavigationBarStyled";

export default function NavigationBar(props) {
  return (
    <NavStyled>
      <ApplicationLogo/>

      <DropdownsContainerStyled>
        <DropdownButton text="Theme" dropdownContent={(<ThemeList/>)}/>
      </DropdownsContainerStyled>

      <ButtonsContainerStyled>
        <OutlineButton children="Log in" />
        <FillButton children="Sign in" />
      </ButtonsContainerStyled>
    </NavStyled>
  );
}