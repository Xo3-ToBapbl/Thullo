import styled from "styled-components";
import FillButton from "../../shared/buttons/AccentButton";
import { sizes } from "../../../resources/constants/sizes";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { StateToObjectFactory } from "../../../factories/stateToObjectFactory";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${sizes.componentHeightRem}rem;
  width: 100%;
  max-width: ${props => sizes[props.device].mainContentMaxWidthPx}px;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  color: ${(props) => props.theme.onPrimary};
`;

export default function ProjectHeader(props) {
  const projectsState = useSelector((state) => state.getProjects);
  const headerContentFactory = new StateToObjectFactory({
    success: () => <HeaderContent onClick={addProjectButtonClicked} />,
    successWhenEmpty: () => <HeaderContent onClick={addProjectButtonClicked} />,
  });

  function addProjectButtonClicked() {
    props.showAddProject();
  }

  return (
    <Header device={props.device}>
      { headerContentFactory.getFor(projectsState) }
    </Header>
  );
}
  
function HeaderContent(props) {
  const [ t ] = useTranslation();
  const buttonChildren = `+ ${t("add")}`;
  return <>
    <Title>{t("allBoards")}</Title>
    <FillButton 
      children={buttonChildren} 
      onClick={props.onClick} />
  </>;
}