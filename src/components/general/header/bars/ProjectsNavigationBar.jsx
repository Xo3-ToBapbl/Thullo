import ApplicationLogo from "../../../shared/logos/ApplicationLogo";
import UserAvatar from "../../avatars/UserAvatar";
import ProjectsSearchForm from "../../projects/ProjectsSearchForm";
import styled from "styled-components";
import * as styledComponents from "./navigationBarStyled";
import useDeviceProps, { PropsPerDevice } from "../../../../hooks/useDeviceProps";
import { useTranslation } from "react-i18next";
import { media } from "../../../shared/media/MediaQueries";
import { sizes } from "../../../../resources/constants/sizes";

export default function ProjectsNavigationBar() {
  const [ t ] = useTranslation();
  const isDesktop = media.IsDesktop();
  const title = isDesktop ? t("thullo") : "";

  return (
    <styledComponents.NavigationBar>
      <ApplicationLogo title={title}/>
      <UtilityContainer />
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

const propsPerDevice = new PropsPerDevice({
  desktop: {width: "none"},
  defaultDevice: {width: "100%"},
});

function UtilityContainer() {
  const [ sizes ] = useDeviceProps(propsPerDevice);

  return (
    <UtilityContainerStyled sizes={sizes}>
      <ProjectsSearchForm />
      <UserAvatar />
    </UtilityContainerStyled>
  );
}