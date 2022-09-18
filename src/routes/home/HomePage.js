import React from "react";
import home from "../../resources/images/home.webp";
import * as styled from "./HomePageStyled";
import { useTranslation } from 'react-i18next';
import { sizes } from "../../resources/constants/Sizes";
import useDeviceProps, { PropsPerDevice } from "../../hooks/UseDeviceProps";

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
  return (
    <styled.Form>
      <styled.EmailInput type="email" placeholder={t("email")} />
      <styled.EmailButton children={t("emailButtonText")}/>
    </styled.Form>
  );
}