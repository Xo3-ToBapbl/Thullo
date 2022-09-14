import Menu from '../features/menu/Menu';
import LoginPage from '../routes/login/LoginPage';
import HomePage from '../routes/home/HomePage';
import SignupPage from '../routes/signup/SignupPage';
import Header from "../features/header/Header";
import Footer from '../features/footer/Footer';
import * as styled from "./ApplicationStyled"
import { ThemeProvider } from 'styled-components'; 
import { useEffect } from 'react';
import { useSelector } from "react-redux";
import { routeNames } from '../resources/constants/RouteNames';
import { BrowserRouter, Outlet, Route, Routes, useNavigate, useLocation } from 'react-router-dom';

export default function Application() {
  const theme = useSelector(state => state.theme.value);
  
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path={routeNames.root} element={<ApplicationRoot/>}>
            <Route path={routeNames.home} element={<HomePage/>}/>
            <Route path={routeNames.signup} element={<SignupPage/>}/>
            <Route path={routeNames.login} element={<LoginPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

function ApplicationRoot() {
  const isMenuVisible = useSelector(state => state.menu.isMenuVisible);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === routeNames.root) {
      navigate(routeNames.home);
    }
  }, [navigate, location.pathname]);
  
  return(
    <styled.ApplicationContainer>
      <Header/>
      <Outlet/>
      <Footer/>

      <Menu isMenuVisible={isMenuVisible} />
      <styled.Background/>
    </styled.ApplicationContainer>
  );
}