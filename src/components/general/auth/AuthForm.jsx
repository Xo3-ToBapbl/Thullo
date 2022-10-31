import ApplicationLogo from "../../shared/logos/ApplicationLogo";
import ErrorModal from "../../shared/errors/ErrorModal";
import * as styled from "./authFormStyled";
import { useTranslation } from "react-i18next";
import { media } from "../../shared/media/MediaQueries";
import { useDispatch } from "react-redux";
import { resetAuthStateAction } from "../../../slices/authSlice";
import { OnColoredLoadingSpinner } from "../../shared/loaders/LoadingSpinner";
import { useErrorMessageBy } from "../../../hooks/useErrorMessage";

export default function AuthForm(props) {
  const [t] = useTranslation();
  const dispatch = useDispatch();
  const authState = props.authState;
  const errorMessage = useErrorMessageBy(authState.errorCode);

  return (
    <styled.Form sizes={props.sizes} onSubmit={props.submit}>
      <media.Mobile>
        <ApplicationLogo style={styled.applicationLogoStyle} title={t("thullo")} />
      </media.Mobile>

      <styled.FormHeader>{props.headerText}</styled.FormHeader>

      {props.children}
      
      <styled.ContinueButton disabled={authState.isLoading} type="submit">
        { authState.isLoading ? <OnColoredLoadingSpinner /> : t("continue")}
      </styled.ContinueButton>
      
      <ErrorModal 
        isVisible={authState.isFailed} 
        message={errorMessage}
        onCloseClicked={() => dispatch(resetAuthStateAction())}/>
    </styled.Form>
  );
}