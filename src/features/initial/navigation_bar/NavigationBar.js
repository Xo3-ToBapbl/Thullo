import ApplicationLogo from "../../../components/logos/ApplicationLogo";
import FillButton from "../../../components/buttons/FillButton";
import OutlineButton from "../../../components/buttons/OutlineButton";
import styled from 'styled-components';

const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export default function NavigationBar() {
  return (
    <NavStyled>
      <ApplicationLogo/>
      <ButtonsContainerStyled>
        <OutlineButton children="Log in" />
        <FillButton children="Sign in" />
      </ButtonsContainerStyled>
    </NavStyled>
  );
}