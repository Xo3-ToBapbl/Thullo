import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import Error from "../../shared/errors/Error";
import LoadingSpinner from "../../shared/loaders/LoadingSpinner";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../../../slices/projectsSlice";
import { sizes } from "../../../resources/constants/sizes";
import { useTranslation } from "react-i18next";
import { thunkStatuses } from "../../../resources/constants/thunkStatuses";

const ProjectsContainer = styled.section`
  display: grid;
  grid-auto-rows: 230px;
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
  const projectsState = useSelector((state) => state.projects);
  const isLoading = projectsState.status === thunkStatuses.loading;
  const isSuccess = projectsState.status === thunkStatuses.success;
  const isFailed = projectsState.status === thunkStatuses.failed;
  
  useEffect(() => {
    dispatch(getProjects());
    return () => { };
  }, [dispatch]);

  if (isLoading) {
    return <LoadingSpinner 
      style={{alignSelf: "center"}} 
      size={4} />;
  }

  if (isSuccess){
    return projectsState.data && projectsState.data.length !== 0 ? 
      <ProjectCardsContainer
        projects={projectsState.data} 
        device={props.device}/> :
        
      <Error 
        noData={true} 
        title={t("errorDontHaveProjectsTitle")} 
        description={t("errorDontHaveProjectsDescription")} />;
  }

  if (isFailed){
    return <Error        
      title={t("errorGenericTitle")} 
      description={t("errorGenericDescription")} />;
  }

  return <></>;
}

function ProjectCardsContainer(props) {
  const projectCards = props.projects.map((project) => <ProjectCard key={project.id}/>);
  return (
    <ProjectsContainer device={props.device}>
      {projectCards}
    </ProjectsContainer>
  );
}