import ApplicationLogo from "../../../components/logos/ApplicationLogo";
import FillButton from "../../../components/buttons/FillButton";
import OutlineButton from "../../../components/buttons/OutlineButton";
import DropdownButton from "../../../components/buttons/DropdownButton";
import ThemeList from "../../theming/ThemeList";
import About from "../../about/About";
import { NavStyled, DropdownsContainerStyled, ButtonsContainerStyled } from "./NavigationBarStyled";

export default function NavigationBar(props) {
  return (
    <NavStyled>
      <ApplicationLogo title="Thullo"/>

      <DropdownsContainerStyled>
        <DropdownButton text="Theme" dropdownContent={(<ThemeList/>)}/>
        <DropdownButton text="About" dropdownContent={(<About/>)} width={45}/>
      </DropdownsContainerStyled>

      <ButtonsContainerStyled>
        <OutlineButton children="Log in" />
        <FillButton children="Sign in" />
      </ButtonsContainerStyled>
    </NavStyled>
  );
}