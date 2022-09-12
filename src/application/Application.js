import styled, { ThemeProvider } from 'styled-components';
import { useSelector } from "react-redux";
import NavigationBar from "../features/home/navigation/NavigationBar";
import MainContent from '../features/home/content/MainContent';
import Menu from '../features/home/menu/Menu';

const ApplicationStyled = styled.div`
  background-color: ${props => props.theme.primary};
  height: 100%;
`;

export default function Application() {
  const theme = useSelector(state => state.theme.value);
  const isMenuVisible = useSelector(state => state.navigationBar.isMenuVisible);
  
  return (
    <ThemeProvider theme={theme}>
      <ApplicationStyled>
        <NavigationBar/>
        <MainContent/>
        <Menu isMenuVisible={isMenuVisible} />
      </ApplicationStyled>
    </ThemeProvider>
  );
}