import ApplicationLogo from "../../../shared/logos/ApplicationLogo";
import UserAvatar from "../../avatars/UserAvatar";
import ProjectsSearchForm from "../../search/ProjectsSearchForm";
import styled from "styled-components";
import * as styledComponents from "./navigationBarStyled";
import useDeviceProps, { PropsPerDevice } from "../../../../hooks/useDeviceProps";
import { useTranslation } from "react-i18next";
import { media } from "../../../shared/media/MediaQueries";
import { sizes } from "../../../../resources/constants/sizes";

export default function ProjectsNavigationBar(props) {
  const [ t ] = useTranslation();

  return (
    <styledComponents.NavigationBar>

      <media.Desktop>
        <ApplicationLogo title={t("thullo")}/>
        <UtilityContainer />
      </media.Desktop>

      <media.Tablet>
        <ApplicationLogo />
        <UtilityContainer />
      </media.Tablet>

      <media.Mobile>
        <ApplicationLogo />
        <UtilityContainer />
      </media.Mobile>

    </styledComponents.NavigationBar>
  );
}

export const UtilityContainerStyled = styled.div`
  height: 100%;
  width: ${(props) => props.sizes.width};
  display: flex;
  justify-content: space-between;
  gap: ${sizes.contentOffsetRem}rem;
`;

const propsPerDevice = new PropsPerDevice(
  {width: "none"},
  {width: "100%"},
  {width: "100%"},
);

function UtilityContainer(props) {
  const sizes = useDeviceProps(propsPerDevice);

  return (
    <UtilityContainerStyled sizes={sizes}>
      <ProjectsSearchForm />
      <UserAvatar />
    </UtilityContainerStyled>
  );
}