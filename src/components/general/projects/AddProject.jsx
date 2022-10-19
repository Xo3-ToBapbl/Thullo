import projectImage from "../../../resources/images/project.jpg";
import * as styled from "./addProjectStyled";
import { ModalPortal } from "../../shared/portals/ModalPortal";

export function AddProject(props) {
  return (
    <ModalPortal>
      <styled.Container>
        <AddProjectCard hideAddProject={props.hideAddProject}/>
      </styled.Container>
    </ModalPortal>
  );
}

function AddProjectCard(props) {
  return (
    <styled.AddProjectCard>
      <styled.ImageContainer>
        <styled.CloseButton 
          onClick={() => props.hideAddProject()} 
          children={"✖"} />

        <styled.Image 
          src={projectImage} />
          
      </styled.ImageContainer>
    </styled.AddProjectCard>
  );
}