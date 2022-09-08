import styled, { ThemeProvider } from 'styled-components';
import { useSelector } from "react-redux";
import NavigationBar from "../features/home/navigation/NavigationBar";
import Content from '../features/home/content/Content';

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
        <Content/>
      </ApplicationStyled>
    </ThemeProvider>
  );
}