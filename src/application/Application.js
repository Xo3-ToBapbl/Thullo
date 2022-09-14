import Menu from '../features/menu/Menu';
import LoginPage from '../routes/login/LoginPage';
import HomePage from '../routes/home/HomePage';
import NavigationBar from "../features/navigation/NavigationBar";
import styled, { ThemeProvider } from 'styled-components'; 
import { useEffect } from 'react';
import { useSelector } from "react-redux";
import { routeNames } from '../resources/constants/RouteNames';
import { BrowserRouter, Outlet, Route, Routes, useNavigate, useLocation } from 'react-router-dom';

const ApplicationStyled = styled.div`
  background-color: ${props => props.theme.primary};
  height: 100%;
`;

export default function Application() {
  const theme = useSelector(state => state.theme.value);
  
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path={routeNames.root} element={<ApplicationRoot/>}>
            <Route path={routeNames.home} element={<HomePage/>}/>
            <Route path={routeNames.login} element={<LoginPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

function ApplicationRoot() {
  const isMenuVisible = useSelector(state => state.navigationBar.isMenuVisible);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === routeNames.root) {
      navigate(routeNames.home);
    }
  }, [navigate, location.pathname]);
  
  return(
    <ApplicationStyled>
      <NavigationBar/>
      <Outlet/>

      <Menu isMenuVisible={isMenuVisible} />
    </ApplicationStyled>
  );
}