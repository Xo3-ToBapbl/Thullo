import styled from "styled-components";
import ProjectsGrid from "../../components/general/projects/ProjectsGrid";
import ProjectHeader from "../../components/general/projects/ProjectsHeader";
import useDeviceProps from "../../hooks/useDeviceProps";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { eventNames } from "../../resources/constants/eventNames";
import { routeNames } from "../../resources/constants/routeNames";
import { authService } from "../../services/authentication/authService";
import { sizes } from "../../resources/constants/sizes";
import { useState } from "react";
import { AddProject } from "../../components/general/projects/AddProject";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${props => sizes[props.device].contentOffsetRem}rem;
`;

export default function ProjectsPage() {
  const navigate = useNavigate();
  const [ showAddProject, setShowAddProject ] = useState(false);
  const device = useDeviceProps()[1];

  useEffect(() => {
    function navigateToHome() {
      navigate(routeNames.home);
    }
    
    authService.eventTarget.addEventListener(eventNames.authIsRequired, navigateToHome);
    return () => { authService.eventTarget.removeEventListener(eventNames.authIsRequired, navigateToHome); };
  }, [navigate]);

  return(
    <MainContainer device={device}>
      <ProjectHeader 
        device={device} 
        showAddProject={() => setShowAddProject(true)} />

      <ProjectsGrid 
        device={device} />

      <AddProject 
        isVisible={showAddProject} 
        hideAddProject={() => setShowAddProject(false)}/>
    </MainContainer>
  );
}