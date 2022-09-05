import NavigationBar from "../features/initial/navigation_bar/NavigationBar";
import styled from 'styled-components';

const ApplicationStyled = styled.div`
  background-color: var(--primary);
`;

export default function Application() {
  return (
    <ApplicationStyled>
      <NavigationBar/>
    </ApplicationStyled>
  );
}