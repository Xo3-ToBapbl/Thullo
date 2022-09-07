import NavigationBar from "../features/home/navigation_bar/NavigationBar";
import styled, { ThemeProvider } from 'styled-components';
import { themeService } from "../services/user-interface/ThemeService";

const ApplicationStyled = styled.div`
  background-color: var(--primary);
`;

export default function Application() {
  return (
    <ThemeProvider theme={themeService.theme}>
      <ApplicationStyled>
        <NavigationBar/>
      </ApplicationStyled>
    </ThemeProvider>
  );
}