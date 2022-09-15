import { useLocation } from "react-router-dom";
import styled from "styled-components";
import AppLogoNavigationBar from "./bars/AppLogoNavigationBar";
import HomeNavigationBar from "./bars/HomeNavigationBar";

const HeaderContainer = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
`;

const headers = {
  home: (<HomeNavigationBar />),
  login: (<AppLogoNavigationBar />),
  signup: (<AppLogoNavigationBar />),
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