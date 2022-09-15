import styled from "styled-components";
import { media } from "../../../components/media/MediaQueries";
import { Trans } from "react-i18next";
import { Divider } from "../../../components/dividers/Divider";
import { sizes } from "../../../resources/constants/Sizes";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${sizes.contentOffsetRem}rem;
  padding-bottom: ${sizes.contentOffsetRem}rem;
`;

const Text = styled.p`
  text-align: center;
  color: ${props => props.theme.neutral};
`;

export default function HomeFooterContent(props) {
  return (
    <Container>
      <media.Desktop>
        <Divider sizes={{maxWidthPx: sizes.desktop.homeContentMaxWidthPx }}/>
      </media.Desktop>

      <media.Tablet>
        <Divider sizes={{maxWidthPx: sizes.tablet.homeContentMaxWidthPx }}/>
      </media.Tablet>

      <media.Mobile>
        <Divider sizes={{maxWidthPx: sizes.mobile.homeContentMaxWidthPx }}/>
      </media.Mobile>


      <Text>        
        <Trans 
          i18nKey="footerText"
          values={{appVersion: process.env.REACT_APP_APP_VERSION}} />
      </Text>
    </Container>
  );
}