import styled from "styled-components";
import { sizes } from "../../resources/constants/Sizes";
import { Trans } from 'react-i18next';

const FooterContainer = styled.footer`
  padding: ${sizes.contentOffset}rem ${sizes.doubleOffset}rem ;
`;

const Text = styled.p`
  text-align: center;
  color: ${props => props.theme.neutral};
`;

export default function Footer() {
  return (
    <FooterContainer>
      <Text>        
        <Trans 
          i18nKey="footerText"
          values={{appVersion: process.env.REACT_APP_APP_VERSION}} />
      </Text>
    </FooterContainer>
  );
}