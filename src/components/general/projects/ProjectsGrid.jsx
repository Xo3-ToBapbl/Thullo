import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import Error from "../../shared/errors/Error";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../../../slices/projectsSlice";
import { sizes } from "../../../resources/constants/sizes";
import { useTranslation } from "react-i18next";
import { StateToObjectFactory } from "../../../factories/stateToObjectFactory";
import { LoadingSpinner } from "../../shared/loaders/LoadingSpinner";

const ProjectsContainer = styled.section`
  display: grid;
  grid-auto-rows: 250px;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: ${props => sizes[props.device].contentOffsetRem}rem;
  width: 100%;
  max-width: ${props => sizes[props.device].mainContentMaxWidthPx}px;
  margin: auto;
  margin-bottom: ${props => sizes[props.device].contentOffsetRem}rem;
`;

export default function ProjectsGrid(props) {
  const dispatch = useDispatch();
  const [ t ] = useTranslation();
  const projectsState = useSelector((state) => state.getProjects);
  const componentFactory = new StateToObjectFactory({
    loading: () => <LoadingSpinner 
      style={{alignSelf: "center"}} 
      size={4} />,

    success: () => <ProjectCardsContainer 
      projectsData={projectsState.data} 
      device={props.device}/>,
      
    successWhenEmpty: () => <Error 
      noData={true} 
      title={t("errorDontHaveProjectsTitle")} 
      description={t("errorDontHaveProjectsDescription")} />,

    failed: () => <Error 
      title={t("errorGenericTitle")} 
      description={t("errorGenericDescription")} />,
  });
  
  useEffect(() => {
    dispatch(getProjects());
    return () => { };
  }, [dispatch]);

  return componentFactory.getFor(projectsState);
}

function ProjectCardsContainer(props) {
  const projectCards = props.projectsData.map((projectData) => <ProjectCard key={projectData.id} data={projectData} />);
  return (
    <ProjectsContainer device={props.device}>
      {projectCards}
    </ProjectsContainer>
  );
}