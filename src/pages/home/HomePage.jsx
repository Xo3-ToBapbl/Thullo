import React from "react";
import styled from "styled-components";
import HomeSection from "../../components/general/home/HomeSection";
import useDeviceProps, { PropsPerDevice } from "../../hooks/useDeviceProps";
import { sizes } from "../../resources/constants/sizes";

const propsPerDevice = new PropsPerDevice(
  { maxWidthPx: sizes.desktop.homeContentMaxWidthPx, imgHeightPx: 450, imgWidthPx: 347, fontSizeRation: 1 },
  { maxWidthPx: sizes.tablet.homeContentMaxWidthPx, imgHeightPx: 373, imgWidthPx: 288, fontSizeRation: 0.9 },
  { maxWidthPx: sizes.mobile.homeContentMaxWidthPx, imgHeightPx: 270, imgWidthPx: 208, fontSizeRation: 0.8 }
);

export const MainContainer = styled.main`
  padding-bottom: ${sizes.contentOffsetRem}rem;
`;

export default function HomePage() {
  const sizes = useDeviceProps(propsPerDevice);
  return (
    <MainContainer sizes={sizes}>
      <HomeSection sizes={sizes} />
    </MainContainer>
  );
}