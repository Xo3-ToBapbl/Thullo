import homeImage from "../../../resources/images/home.webp";
import React from "react";
import HomeForm from "./HomeForm";
import * as styled from "./homeSectionStyled";
import useDeviceProps, { PropsPerDevice } from "../../../hooks/useDeviceProps";
import { useTranslation } from 'react-i18next';
import { sizes } from "../../../resources/constants/sizes";

const propsPerDevice = new PropsPerDevice(
  { maxWidthPx: sizes.desktop.mainContentMaxWidthPx, imgHeightPx: 450, imgWidthPx: 347, fontSizeRation: 1 },
  { maxWidthPx: sizes.tablet.mainContentMaxWidthPx, imgHeightPx: 373, imgWidthPx: 288, fontSizeRation: 0.9 },
  { maxWidthPx: sizes.mobile.mainContentMaxWidthPx, imgHeightPx: 270, imgWidthPx: 208, fontSizeRation: 0.8 }
);

export default function HomeSection() {
  const [ sizes ] = useDeviceProps(propsPerDevice);

  return (
    <styled.SectionContainer sizes={sizes}>
      <styled.Introduction sizes={sizes}>
        <DescriptionInner sizes={sizes} />
        <HomeForm />
      </styled.Introduction>

      <styled.Image 
        sizes={sizes} 
        src={homeImage} 
        width="465.5" 
        height="602.5" />
    </styled.SectionContainer>
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