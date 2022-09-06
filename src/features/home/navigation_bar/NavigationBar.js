import ApplicationLogo from "../../../components/logos/ApplicationLogo";
import FillButton from "../../../components/buttons/FillButton";
import OutlineButton from "../../../components/buttons/OutlineButton";
import DropdownButton from "../../../components/buttons/DropdownButton";
import ThemeList from "../../../components/lists/ThemeList";
import styled from 'styled-components';

const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--content-offset);
  height: 8rem;
  padding: 2rem;
  background-color: var(--primary);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
`;

const ButtonsContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  gap: var(--content-offset);
`;

const DropdownsContainerStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-grow:1;
  margin-left: var(--content-offset);
  gap: var(--content-offset);
`;

export default function NavigationBar() {
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