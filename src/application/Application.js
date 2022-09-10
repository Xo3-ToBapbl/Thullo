import styled, { ThemeProvider } from 'styled-components';
import { useSelector } from "react-redux";
import NavigationBar from "../features/home/navigation/NavigationBar";
import MainContent from '../features/home/content/MainContent';

const ApplicationStyled = styled.div`
  background-color: ${props => props.theme.primary};
  height: 100%;
`;

export default function Application() {
  const theme = useSelector((state) => state.theme.value);
  return (
    <ThemeProvider theme={theme}>
      <ApplicationStyled>
        <NavigationBar/>
        <MainContent/>
      </ApplicationStyled>
    </ThemeProvider>
  );
}