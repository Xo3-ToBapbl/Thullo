import { useLocation } from "react-router-dom";
import styled from "styled-components";
import LoginFooterContent from "./content/LoginFooterContent";
import MainFooterContent from "./content/MainFooterContent";
import SignupFooterContent from "./content/SignupFooterContent";

const FooterContainer = styled.footer`
  z-index: 997;
`;

const locationsContent = {
  home: <MainFooterContent />,
  signup: <SignupFooterContent />,
  login: <LoginFooterContent />,
  projects: <MainFooterContent />,
};

export default function Footer() {
  const location = useLocation();
  return (
    <FooterContainer>
      { locationsContent[location.pathname.slice(1)] }
    </FooterContainer>
  );
}