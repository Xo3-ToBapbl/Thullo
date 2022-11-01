import "./addProjectAnimation.css";
import projectImage from "../../../resources/images/project.jpg";
import NeutralButton from "../../shared/buttons/NeutralButton";
import AccentButton from "../../shared/buttons/AccentButton";
import OutlineButton from "../../shared/buttons/OutlineButton";
import ErrorModal from "../../shared/errors/ErrorModal";
import * as styled from "./addProjectStyled";
import useDeviceProps, { mobile, PropsPerDevice } from "../../../hooks/useDeviceProps";
import { sizes } from "../../../resources/constants/sizes";
import { media } from "../../shared/media/MediaQueries";
import { useRef } from "react";
import { useEffect } from "react";
import { TextedIcon } from "../../shared/icons/TextedIcon";
import { useDispatch } from "react-redux";
import { ModalPortal } from "../../shared/portals/ModalPortal";
import { reducersNames } from "../../../resources/constants/reducersNames";
import { useSelectorBy } from "../../../hooks/useSelector";
import { CSSTransition } from "react-transition-group";
import { useTranslation } from "react-i18next";
import { mobileMaxWidth } from "../../shared/media/MediaQueries";
import { useErrorMessageBy } from "../../../hooks/useErrorMessage";
import { OnColoredLoadingSpinner } from "../../shared/loaders/LoadingSpinner";
import { preventMainContentScrolling } from "../../../utils/domUtils";
import { addProject, addProjectAction, resetAddProjectState, setAddProjectVisibilityAction } from "../../../slices/projectsSlice";

const formSizesPerDevice = new PropsPerDevice(
  { width: `${mobileMaxWidth}px`, height: "none", padding: sizes.doubleOffsetRem, cornerRadius: `${sizes.cornerRadiusRem}rem`},
  { width: `${mobileMaxWidth}px`, height: "none", padding: sizes.doubleOffsetRem, cornerRadius: `${sizes.cornerRadiusRem}rem`},
  { width: "100%", height: "100%", padding: sizes.contentOffsetRem, cornerRadius: 0 },
);

export function AddProject() {
  const showAddProjectForm = useSelectorBy(reducersNames.addProjectVisibility);
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

function AddProjectForm() {
  const dispatch = useDispatch();
  const [ t ] = useTranslation();
  const [ formSizes ] = useDeviceProps(formSizesPerDevice);
  const addProjectState = useSelectorBy(reducersNames.addProject);
  const errorMessage = useErrorMessageBy(addProjectState.errorCode);
  const titleRef = useRef();
  const addProjectPromiseRef = useRef(null);
  
  useEffect(preventMainContentScrolling, []);
  useEffect(() => {
    if (addProjectState.isSuccess) {
      dispatch(addProjectAction(addProjectState.data));
      dispatch(resetAddProjectState());
      dispatch(setAddProjectVisibilityAction(false));
    }
    return () => { };
  }, [ dispatch, addProjectState ]);

  function submitProject(e) {
    e.preventDefault();

    const newProject = { id: crypto.randomUUID(), title: titleRef.current.value };
    const promiseToCancel = dispatch(addProject(newProject));
    addProjectPromiseRef.current = promiseToCancel;
  }

  function close(e) {
    e?.preventDefault();

    addProjectPromiseRef.current?.abort();
    dispatch(setAddProjectVisibilityAction(false));
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
        ref={titleRef}
        required={true}
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