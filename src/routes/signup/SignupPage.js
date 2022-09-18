import React from "react";
import ApplicationLogo from "../../components/logos/ApplicationLogo";
import * as styled from "./SignupPageStyled";
import useDeviceProps, { PropsPerDevice } from "../../hooks/UseDeviceProps";
import { useTranslation } from "react-i18next";
import { mobileMaxWidth } from "../../components/media/MediaQueries";
import { sizes } from "../../resources/constants/Sizes";
import { media } from "../../components/media/MediaQueries";

const sizesLocal = {
  maxWidthPx: mobileMaxWidth,
  imgHeightPx: 450,
  imgWidthPx: 347,
  fontSizeRation: 1,
  contentOffset: sizes.doubleOffsetRem,
  containerTopOffset: 0,
};

const applicationLogoStyle = {
  alignSelf: "center",
  transform: "scale(1.2)",
  marginTop: "1rem",
  marginBottom: `${sizes.contentOffsetRem}rem`,
};

const propsPerDevice = new PropsPerDevice(
  sizesLocal,
  {...sizesLocal, containerTopOffset: 0,},
  {...sizesLocal, containerTopOffset: -sizes.navBarHeightRem,},
);

export default function SignupPage(props) {
  const sizes = useDeviceProps(propsPerDevice);
  return (
    <styled.MainContainer sizes={sizes}>
      <media.Mobile>
        <styled.Background />
      </media.Mobile>

      <FormSection sizes={sizes} />
    </styled.MainContainer>
  );
}

function FormSection(props) {
  const isMobile = media.IsMobile();
  const content = isMobile ? 
    <Form sizes={props.sizes}/> :
    <styled.FormSection sizes={props.sizes} children={<Form sizes={props.sizes}/>}/>

  return content;
}

function Form(props) {
  const [t] = useTranslation();
  return (
    <styled.Form sizes={props.sizes}>
      <media.Mobile>
        <ApplicationLogo style={applicationLogoStyle} title={t("thullo")} />
      </media.Mobile>

      <styled.FormHeader>{t("loginFormHeader")}</styled.FormHeader>

      <styled.FormInput type="text" placeholder={t("firstName")} />
      <styled.FormInput type="text" placeholder={t("lastName")} />
      <styled.FormInput type="email" placeholder={t("email")} />
      <styled.FormInput type="password" placeholder={t("password")} />
      <styled.FormInput type="password" placeholder={t("confirmPassword")} />

      <styled.ContinueButton>{t("continue")}</styled.ContinueButton>
    </styled.Form>
  );
}