import React from "react";
import * as styled from "./AuthMainContainerStyled";
import useDeviceProps, { PropsPerDevice } from "../../hooks/UseDeviceProps";
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

const propsPerDevice = new PropsPerDevice(
  sizesLocal,
  {...sizesLocal, containerTopOffset: 0,},
  {...sizesLocal, containerTopOffset: -sizes.navBarHeightRem,},
);

export default function AuthMainContainer(props) {
  const sizes = useDeviceProps(propsPerDevice);
  return (
    <styled.MainContainer sizes={sizes}>
      <media.Mobile>
        <styled.Background />
      </media.Mobile>

      <FormSection sizes={sizes} formFactory={props.formFactory} />
    </styled.MainContainer>
  );
}

function FormSection(props) {
  const isMobile = media.IsMobile();
  const form = props.formFactory(props.sizes);
  const content = isMobile ? form : <styled.FormSection sizes={props.sizes} children={form}/>

  return content;
}