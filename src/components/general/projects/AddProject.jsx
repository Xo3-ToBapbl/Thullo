import "./addProjectAnimation.css";
import projectImage from "../../../resources/images/project.jpg";
import NeutralButton from "../../shared/buttons/NeutralButton";
import AccentButton from "../../shared/buttons/AccentButton";
import OutlineButton from "../../shared/buttons/OutlineButton";
import * as styled from "./addProjectStyled";
import ErrorModal from "../../shared/errors/ErrorModal";
import useDeviceProps, { mobile, PropsPerDevice } from "../../../hooks/useDeviceProps";
import { addProject, resetAddProjectState } from "../../../slices/projectsSlice";
import { ModalPortal } from "../../shared/portals/ModalPortal";
import { useTranslation } from "react-i18next";
import { TextedIcon } from "../../shared/icons/TextedIcon";
import { CSSTransition } from "react-transition-group";
import { mobileMaxWidth } from "../../shared/media/MediaQueries";
import { sizes } from "../../../resources/constants/sizes";
import { useEffect } from "react";
import { preventMainContentScrolling } from "../../../utils/domUtils";
import { media } from "../../shared/media/MediaQueries";
import { useDispatch, useSelector } from "react-redux";
import { OnColoredLoadingSpinner } from "../../shared/loaders/LoadingSpinner";
import { useState } from "react";

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
  const dispatch = useDispatch();
  const [ t ] = useTranslation();
  const [ formSizes ] = useDeviceProps(formSizesPerDevice);
  const [title, _] = useState("");
  const addProjectState = useSelector((state) => state.addProject);
  
  useEffect(preventMainContentScrolling, []);

  function submitProject(e) {
    e.preventDefault();
    dispatch(addProject({
      id: "1",
      title: title,
    }));
  }

  function close(e) {
    e.preventDefault();  
    props.hideAddProject();
  }

  return (
    <styled.AddProjectForm sizes={formSizes} onSubmit={submitProject}>
      <media.Mobile>
        <styled.Title>{t("addBoard")}</styled.Title>
      </media.Mobile>
    
      <styled.ImageContainer>
        <CloseButton addProjectState={addProjectState} onClick={close} />
        <styled.Image src={projectImage} />
      </styled.ImageContainer>

      <styled.ProjectTitleInput 
        required={true}
        placeholder={t("addBoardTitle")}/>

      <styled.OptionButtonsContainer>
        <OptionButton iconName="image" text={t("cover")} />
        <OptionButton iconName="lock" text={t("private")} />
      </styled.OptionButtonsContainer>

      <styled.CompleteButtonsContainer>
        <OutlineButton 
          style={styled.CompleteButtonStyle}
          children={<TextedIcon iconName="close" text={t("cancel")} />} 
          onClick={close} />
        <CreateButton addProjectState={addProjectState}/>
      </styled.CompleteButtonsContainer>

      <ErrorModal 
        isVisible={addProjectState.isFailed} 
        message="Generic error message"
        onCloseClicked={() => dispatch(resetAddProjectState())} />
    </styled.AddProjectForm>
  );
}

function CloseButton(props) {
  const device = useDeviceProps()[1];

  return device === mobile ? null : 
    <styled.CloseButton 
      disabled={props.addProjectState.isLoading}
      onClick={props.onClick} 
      children={"✖"} />;
}

function CreateButton(props) {
  const [ t ] = useTranslation();
  const isLoading =  props.addProjectState.isLoading;

  return <AccentButton 
    style={styled.CompleteButtonStyle}
    disabled={isLoading}
    children={ isLoading ? 
      <OnColoredLoadingSpinner /> : 
      <TextedIcon iconName="add" text={t("create")} />} />;
}

function OptionButton(props) {
  return (
    <NeutralButton disabled={true} style={{"width": "100%"}}>
      <TextedIcon iconName={props.iconName} text={props.text} />
    </NeutralButton>
  );
}