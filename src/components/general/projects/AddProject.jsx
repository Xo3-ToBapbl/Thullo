import "./addProjectAnimation.css";
import projectImage from "../../../resources/images/project.jpg";
import NeutralButton from "../../shared/buttons/NeutralButton";
import AccentButton from "../../shared/buttons/AccentButton";
import OutlineButton from "../../shared/buttons/OutlineButton";
import * as styled from "./addProjectStyled";
import ErrorModal from "../../shared/errors/ErrorModal";
import useDeviceProps, { mobile, PropsPerDevice } from "../../../hooks/useDeviceProps";
import { addProject, addProjectAction, resetAddProjectState, setAddProjectVisibility, setAddProjectVisibilityAction } from "../../../slices/projectsSlice";
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

export function AddProject() {
  const showAddProjectForm = useSelector((state) => state.showAddProject);
  return (
    <ModalPortal>
      <CSSTransition
        in={showAddProjectForm}
        unmountOnExit={true}
        timeout={300}
        classNames="addProject">

        <styled.Container>
          <AddProjectForm />
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

function InitialNewProject() {
  this.id = crypto.randomUUID();
  this.title = "";
}

function AddProjectForm() {
  const dispatch = useDispatch();
  const [ t ] = useTranslation();
  const [ formSizes ] = useDeviceProps(formSizesPerDevice);
  const [ newProject, setNewProject ] = useState(new InitialNewProject());
  const [ addProjectPromise, setAddProjectPromise ] = useState(null);
  const addProjectState = useSelector((state) => state.addProject);
  const isSuccess = addProjectState.isSuccess;
  const errorMessage = addProjectState.errorCode ? t(addProjectState.errorCode) : t("errorGeneric");
  
  useEffect(preventMainContentScrolling, []);
  useEffect(() => {
    if (isSuccess) {
      dispatch(addProjectAction(newProject));
      dispatch(resetAddProjectState());
      dispatch(setAddProjectVisibilityAction(false));
    }
    return () => { };
  }, [dispatch, isSuccess, newProject]);

  function submitProject(e) {
    e.preventDefault();
    const promiseToCancel = dispatch(addProject(newProject));
    setAddProjectPromise(promiseToCancel);
  }

  function close(e) {
    e?.preventDefault();
    addProjectPromise?.abort();
    dispatch(setAddProjectVisibilityAction(false));
  }

  function titleChanged(e) {
    const { value } = e.target;
    setNewProject({...newProject, title: value});
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
        value={newProject.title}
        onChange={titleChanged} 
        disabled={addProjectState.isLoading}
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
        message={errorMessage}
        onCloseClicked={() => dispatch(resetAddProjectState())} />
    </styled.AddProjectForm>
  );
}

function CloseButton(props) {
  const device = useDeviceProps()[1];

  return device === mobile ? null : 
    <styled.CloseButton 
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