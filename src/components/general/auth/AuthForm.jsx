import ApplicationLogo from "../../shared/logos/ApplicationLogo";
import LoadingSpinner from "../../shared/loaders/LoadingSpinner";
import ErrorModal from "../../shared/errors/ErrorModal";
import * as styled from "./authFormStyled";
import { useTranslation } from "react-i18next";
import { media } from "../../shared/media/MediaQueries";
import { thunkStatuses } from "../../../resources/constants/thunkStatuses";
import { useDispatch } from "react-redux";
import { resetAuthState } from "../../../slices/authSlice";

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
        onCloseClicked={() => dispatch(resetAuthState())}/>
    </styled.Form>
  );
}