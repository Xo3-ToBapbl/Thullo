import { useLocation } from "react-router-dom";
import styled from "styled-components";
import HomeFooterContent from "./content/HomeFooterContent";
import SignupFooterContent from "./content/SignupFooterContent";

const FooterContainer = styled.footer`
  z-index: 999;
`;

const locationsContent = {
  home: <HomeFooterContent />,
  signup: <SignupFooterContent />,
}

export default function Footer() {
  const location = useLocation();
  return (
    <FooterContainer>
      { locationsContent[location.pathname.slice(1)] }
    </FooterContainer>
  );
}