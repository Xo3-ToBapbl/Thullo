import styled, { ThemeProvider } from 'styled-components';
import { useSelector } from "react-redux";
import NavigationBar from "../features/home/navigation/NavigationBar";

const ApplicationStyled = styled.div`
  background-color: var(--primary);
`;

export default function Application() {
  const theme = useSelector((state) => state.theme.value);
  return (
    <ThemeProvider theme={theme}>
      <ApplicationStyled>
        <NavigationBar/>
      </ApplicationStyled>
    </ThemeProvider>
  );
}