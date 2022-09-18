import { useLocation } from "react-router-dom";
import styled from "styled-components";
import AppLogoNavigationBar from "./bars/AppLogoNavigationBar";
import HomeNavigationBar from "./bars/HomeNavigationBar";
import SignupNavigationBar from "./bars/SignupNavigationBar";

const HeaderContainer = styled.header`
  z-index: 999;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
`;

const headers = {
  home: (<HomeNavigationBar />),
  login: (<AppLogoNavigationBar />),
  signup: (<SignupNavigationBar />),
}

export default function Header() {
  const location = useLocation();
  const pathKey = location.pathname.slice(1);
  const header = headers[pathKey];

  return (
    <HeaderContainer>
      {header}
    </HeaderContainer>
  );
}