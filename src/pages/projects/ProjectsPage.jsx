import styled from "styled-components";
import ProjectsGrid from "../../components/general/projects/ProjectsGrid";

export const MainContainer = styled.main`
  height: 100vh;
  width: 100%;
`;

export default function ProjectsPage(props) {
  return(
    <MainContainer>
      <ProjectsGrid />
    </MainContainer>
  );
}