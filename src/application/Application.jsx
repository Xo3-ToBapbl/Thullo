import Menu from '../components/general/menu/Menu';
import LoginPage from '../pages/login/LoginPage';
import HomePage from '../pages/home/HomePage';
import SignupPage from '../pages/signup/SignupPage';
import Footer from '../components/general/footer/Footer';
import Header from '../components/general/header/Header';
import * as styled from "./applicationStyled"
import useDeviceProps, { PropsPerDevice } from '../hooks/useDeviceProps';
import { ThemeProvider } from 'styled-components'; 
import { useEffect } from 'react';
import { useSelector } from "react-redux";
import { routeNames } from '../resources/constants/routeNames';
import { BrowserRouter, Outlet, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { sizes } from '../resources/constants/sizes';
import { requestExecutorEventTarget } from '../services/api/requestExecutor';
import { refreshCurrentUser } from '../slices/authSlice';
import { eventNames } from '../resources/constants/eventNames';

requestExecutorEventTarget.addEventListener(eventNames.userRefreshed, (e) => refreshCurrentUser(e.detail));

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

const propsPerDevice = new PropsPerDevice(
  sizes.doubleOffsetRem, 
  sizes.doubleOffsetRem, 
  sizes.contentOffsetRem);

function ApplicationRoot() {
  const isMenuVisible = useSelector(state => state.menu.isMenuVisible);
  const contentOffset = useDeviceProps(propsPerDevice);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === routeNames.root) {
      navigate(routeNames.home);
    }
  }, [navigate, location.pathname]);
  
  return(
    <styled.ApplicationContainer id="application" contentOffset={contentOffset}>
      <Header/>
      <Outlet/>
      <Footer/>

      <Menu isMenuVisible={isMenuVisible} />
    </styled.ApplicationContainer>
  );
}