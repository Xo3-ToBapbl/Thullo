import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../../../slices/projectsSlice";

const ProjectsContainer = styled.section`
  width: 100px;
  height: 100px;
  background-color: red;
`;

export default function ProjectsGrid(props) {
  const dispatch = useDispatch();
  const projectsState = useSelector((state) => state.projects);

  useEffect(() => {
    dispatch(getProjects());
    return () => { };
  }, [dispatch]);

  return(
    <ProjectsContainer>

    </ProjectsContainer>
  );
}