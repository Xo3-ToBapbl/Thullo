import projectImage from "../../../resources/images/project.jpg";
import * as styled from "./addProjectStyled";
import NeutralButton from "../../shared/buttons/NeutralButton";
import AccentButton from "../../shared/buttons/AccentButton";
import OutlineButton from "../../shared/buttons/OutlineButton";
import { ModalPortal } from "../../shared/portals/ModalPortal";
import { useTranslation } from "react-i18next";
import { TextedIcon } from "../../shared/icons/TextedIcon";

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
  const [ t ] = useTranslation();

  return (
    <styled.AddProjectCard>
      <styled.ImageContainer>
        <styled.CloseButton 
          onClick={() => props.hideAddProject()} 
          children={"✖"} />

        <styled.Image 
          src={projectImage} />
      </styled.ImageContainer>

      <styled.ProjectTitleInput placeholder={t("addBoardTitle")}/>

      <styled.OptionButtonsContainer>
        <OptionButton iconName="image" text="Cover" />
        <OptionButton iconName="lock" text="Private" />
      </styled.OptionButtonsContainer>

      <styled.CompleteButtonsContainer>
        <OutlineButton children={<TextedIcon iconName="close" text="Cancel" />} />
        <AccentButton children={<TextedIcon iconName="add" text="Create" />} />
      </styled.CompleteButtonsContainer>
    </styled.AddProjectCard>
  );
}

function OptionButton(props) {
  return (
    <NeutralButton style={{"width": "100%"}}>
      <TextedIcon iconName={props.iconName} text={props.text} />
    </NeutralButton>
  );
}