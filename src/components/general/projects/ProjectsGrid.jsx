import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../../../slices/projectsSlice";
import { sizes } from "../../../resources/constants/sizes";

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
  const projectsState = useSelector((state) => state.projects);

  useEffect(() => {
    dispatch(getProjects());
    return () => { };
  }, [dispatch]);

  return(
    <ProjectsContainer device={props.device}>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </ProjectsContainer>
  );
}