import { t } from "i18next";
import styled from "styled-components";
import ApplicationLogo from "../../../../components/shared/logos/ApplicationLogo";
import { sizes } from "../../../../resources/constants/sizes";

export const NavigationBar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${sizes.navBarLargeHeight}rem;
  width: 100%;
  z-index: 999;
`;

export default function AppLogoNavigationBar(props) {
  return(
    <NavigationBar>
      <ApplicationLogo style={{transform: "scale(1.2)"}} title={t("thullo")} />
    </NavigationBar>
  );
}