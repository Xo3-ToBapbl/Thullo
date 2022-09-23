import styled from "styled-components";
import { Trans } from "react-i18next";
import { Divider } from "../../../shared/dividers/Divider";
import { sizes } from "../../../../resources/constants/sizes";

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

export default function BaseFooterContent(props) {
  return (
    <Container>
      <Divider sizes={{maxWidthPx: props.maxWidthPx }}/>
      <Text>        
        <Trans 
          i18nKey="footerText"
          values={{appVersion: process.env.REACT_APP_APP_VERSION}} />
      </Text>
    </Container>
  );
}