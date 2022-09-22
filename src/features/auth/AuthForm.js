import ApplicationLogo from "../../components/logos/ApplicationLogo";
import LoadingSpinner from "../../components/loaders/LoadingSpinner";
import ErrorModal from "../../components/modals/ErrorModal";
import * as styled from "./AuthFormStyled";
import { useTranslation } from "react-i18next";
import { media } from "../../components/media/MediaQueries";
import { thunkStatuses } from "../../resources/constants/ThunkStatuses";
import { useDispatch } from "react-redux";
import { resetSliceStatus } from "./AuthSlice";

export default function AuthForm(props) {
  const [t] = useTranslation();
  const dispatch = useDispatch();
  const authState = props.authState;
  const isLoading = authState.status === thunkStatuses.loading;
  const isFailed = authState.status === thunkStatuses.failed;
  const errorMessage = authState.errorCode ? t(authState.errorCode) : t("errorGeneric");

  return (
    <styled.Form sizes={props.sizes} onSubmit={props.submit}>
      <media.Mobile>
        <ApplicationLogo style={styled.applicationLogoStyle} title={t("thullo")} />
      </media.Mobile>

      <styled.FormHeader>{props.headerText}</styled.FormHeader>

      {props.children}
      
      <styled.ContinueButton disabled={isLoading} type="submit">
        { isLoading ? <LoadingSpinner /> : t("continue")}
      </styled.ContinueButton>
      
      <ErrorModal 
        isVisible={isFailed} 
        message={errorMessage}
        onCloseClicked={closeErrorClicked}/>
    </styled.Form>
  );
  
  function closeErrorClicked() {
    dispatch(resetSliceStatus());
  }
}