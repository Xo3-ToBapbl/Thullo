import Header from "../../components/general/header/Header";
import Footer from "../../components/general/footer/Footer";
import Menu from "../../components/general/menu/Menu";
import useDeviceProps, { PropsPerDevice } from "../../hooks/useDeviceProps";
import styled from "styled-components";
import { sizes } from "../../resources/constants/sizes";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { routeNames } from "../../resources/constants/routeNames";

const propsPerDevice = new PropsPerDevice(
  sizes.doubleOffsetRem, 
  sizes.doubleOffsetRem, 
  sizes.contentOffsetRem);

const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: inherit;
  padding: 0 ${props => props.contentOffset}rem;
  padding-top: ${props => sizes.navBarHeightRem + props.contentOffset}rem;
  background-color: ${props => props.theme.primary};
`;

export default function Root() {
  const isMenuVisible = useSelector(state => state.menu.isMenuVisible);
  const contentOffset = useDeviceProps(propsPerDevice);
  const location = useLocation();

  if (location.pathname === routeNames.root) {
    return <Navigate to={routeNames.home}/>;
  }
  
  return(
    <RootContainer contentOffset={contentOffset}>
      <Header/>
      <Outlet/>
      <Footer/>

      <Menu isMenuVisible={isMenuVisible} />
    </RootContainer>
  );
}