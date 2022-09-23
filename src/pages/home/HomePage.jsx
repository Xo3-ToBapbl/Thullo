import home from "../../resources/images/home.webp";
import * as styled from "./homePageStyled";
import useDeviceProps, { PropsPerDevice } from "../../hooks/useDeviceProps";
import React, { useState } from "react";
import { sizes } from "../../resources/constants/sizes";
import { useTranslation } from 'react-i18next';
import { routeNames } from "../../resources/constants/routeNames";
import { createSearchParams, useNavigate } from "react-router-dom";

const propsPerDevice = new PropsPerDevice(
  { maxWidthPx: sizes.desktop.homeContentMaxWidthPx, imgHeightPx: 450, imgWidthPx: 347, fontSizeRation: 1 },
  { maxWidthPx: sizes.tablet.homeContentMaxWidthPx, imgHeightPx: 373, imgWidthPx: 288, fontSizeRation: 0.9 },
  { maxWidthPx: sizes.mobile.homeContentMaxWidthPx, imgHeightPx: 270, imgWidthPx: 208, fontSizeRation: 0.8 }
);

export default function HomePage() {
  const sizes = useDeviceProps(propsPerDevice);
  return (
    <styled.MainContainer sizes={sizes}>
      <styled.SectionContainer sizes={sizes}>
        <styled.Introduction sizes={sizes}>
          <DescriptionInner sizes={sizes} />
          <FormInner />
        </styled.Introduction>

        <styled.Image sizes={sizes} src={home} width="465.5" height="602.5" />
      </styled.SectionContainer>
    </styled.MainContainer>
  );
}

function DescriptionInner(props) {
  const [ t ] = useTranslation();
  return (
    <styled.Description>
      <styled.Title sizes={props.sizes}>{t("thulloTitleText")}</styled.Title>
      <styled.Information sizes={props.sizes}>{t("thulloDescriptionText")}</styled.Information>
    </styled.Description>
  );
}

function FormInner(props) {
  const [ t ] = useTranslation();
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  return (
    <styled.Form onSubmit={(e) => navigateToLoginPage.call(null, e, email)}>
      <styled.EmailInput 
        value={email} 
        type="email"
        placeholder={t("email")} 
        onChange={emailChanged} />

      <styled.EmailButton 
        type="submit" 
        children={t("emailButtonText")}/>
    </styled.Form>
  );

  function emailChanged(e) {
    setEmail(e.target.value);
  }
  
  function navigateToLoginPage(e, email) {
    e.preventDefault();

    const searchParams = email ? createSearchParams({email: email}).toString() : "";
    navigate({
      pathname: routeNames.signup,
      search: searchParams,
    });
  }
}