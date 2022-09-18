import { useTranslation } from "react-i18next";
import * as styled from "./AuthFormStyled";
import { media } from "../../components/media/MediaQueries";
import ApplicationLogo from "../../components/logos/ApplicationLogo";

export default function AuthForm(props) {
  const [t] = useTranslation();
  return (
    <styled.Form sizes={props.sizes} onSubmit={props.submit}>
      <media.Mobile>
        <ApplicationLogo style={styled.applicationLogoStyle} title={t("thullo")} />
      </media.Mobile>

      <styled.FormHeader>{props.headerText}</styled.FormHeader>

      {props.children}
      
      <styled.ContinueButton type="submit">{t("continue")}</styled.ContinueButton>
    </styled.Form>
  );
}