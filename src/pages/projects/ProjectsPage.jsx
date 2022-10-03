import styled from "styled-components";
import ProjectsGrid from "../../components/general/projects/ProjectsGrid";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { eventNames } from "../../resources/constants/eventNames";
import { routeNames } from "../../resources/constants/routeNames";
import { authService } from "../../services/authentication/authService";

export const MainContainer = styled.main`
  width: 100%;
`;

export default function ProjectsPage(props) {
  const navigate = useNavigate();

  useEffect(() => {
    function navigateToHome() {
      navigate(routeNames.home);
    }
    
    authService.eventTarget.addEventListener(eventNames.authIsRequired, navigateToHome);
    return () => { authService.eventTarget.removeEventListener(eventNames.authIsRequired, navigateToHome); };
  }, [navigate]);

  return(
    <MainContainer>
      {/* <ProjectsGrid /> */}
    </MainContainer>
  );
}