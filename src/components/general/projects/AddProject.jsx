import "./addProjectAnimation.css";
import projectImage from "../../../resources/images/project.jpg";
import NeutralButton from "../../shared/buttons/NeutralButton";
import AccentButton from "../../shared/buttons/AccentButton";
import OutlineButton from "../../shared/buttons/OutlineButton";
import * as styled from "./addProjectStyled";
import useDeviceProps, { PropsPerDevice } from "../../../hooks/useDeviceProps";
import { ModalPortal } from "../../shared/portals/ModalPortal";
import { useTranslation } from "react-i18next";
import { TextedIcon } from "../../shared/icons/TextedIcon";
import { CSSTransition } from "react-transition-group";
import { mobileMaxWidth } from "../../shared/media/MediaQueries";
import { sizes } from "../../../resources/constants/sizes";
import { useEffect } from "react";
import { preventMainContentScrolling } from "../../../utils/domUtils";
import { media } from "../../shared/media/MediaQueries";

export function AddProject(props) {
  return (
    <ModalPortal>
      <CSSTransition
        in={props.isVisible}
        unmountOnExit={true}
        timeout={300}
        classNames="addProject">

        <styled.Container>
          <AddProjectCard hideAddProject={props.hideAddProject}/>
        </styled.Container>

      </CSSTransition>
    </ModalPortal>
  );
}

const formSizesPerDevice = new PropsPerDevice(
  { width: `${mobileMaxWidth}px`, height: "none", padding: sizes.doubleOffsetRem, cornerRadius: `${sizes.cornerRadiusRem}rem`},
  { width: `${mobileMaxWidth}px`, height: "none", padding: sizes.doubleOffsetRem, cornerRadius: `${sizes.cornerRadiusRem}rem`},
  { width: "100%", height: "100%", padding: sizes.contentOffsetRem, cornerRadius: 0 },
);

function AddProjectCard(props) {
  const [ t ] = useTranslation();
  const [ formSizes ] = useDeviceProps(formSizesPerDevice);
  
  useEffect(preventMainContentScrolling, []);

  function submitProject(e) {
    e.preventDefault();
  }

  return (
    <styled.AddProjectForm sizes={formSizes} onSubmit={submitProject}>
      <media.Mobile>
        <styled.Title>Add board</styled.Title>
      </media.Mobile>
    
      <styled.ImageContainer>
        <media.Desktop>
          <styled.CloseButton 
            onClick={() => props.hideAddProject()} 
            children={"✖"} />
        </media.Desktop>
        <media.Tablet>
          <styled.CloseButton 
            onClick={() => props.hideAddProject()} 
            children={"✖"} />
        </media.Tablet>

        <styled.Image 
          src={projectImage} />
      </styled.ImageContainer>

      <styled.ProjectTitleInput placeholder={t("addBoardTitle")}/>

      <styled.OptionButtonsContainer>
        <OptionButton iconName="image" text="Cover" />
        <OptionButton iconName="lock" text="Private" />
      </styled.OptionButtonsContainer>

      <styled.CompleteButtonsContainer>
        <OutlineButton 
          children={<TextedIcon iconName="close" text="Cancel" />} 
          onClick={() => props.hideAddProject()} />
        <AccentButton children={<TextedIcon iconName="add" text="Create" />} />
      </styled.CompleteButtonsContainer>
    </styled.AddProjectForm>
  );
}

function OptionButton(props) {
  return (
    <NeutralButton disabled={true} style={{"width": "100%"}}>
      <TextedIcon iconName={props.iconName} text={props.text} />
    </NeutralButton>
  );
}