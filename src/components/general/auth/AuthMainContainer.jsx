import React from "react";
import * as styled from "./authMainContainerStyled";
import useDeviceProps, { PropsPerDevice } from "../../../hooks/useDeviceProps";
import { sizes } from "../../../resources/constants/sizes";
import { mobileMaxWidth, media } from "../../../components/shared/media/MediaQueries";

const sizesLocal = {
  maxWidthPx: mobileMaxWidth,
  imgHeightPx: 450,
  imgWidthPx: 347,
  fontSizeRation: 1,
  contentOffset: sizes.doubleOffsetRem,
  containerTopOffset: 0,
};

const propsPerDevice = new PropsPerDevice({
  desktop: sizesLocal,
  tablet: {...sizesLocal, containerTopOffset: 0,},
  mobile: {...sizesLocal, containerTopOffset: -sizes.navBarHeightRem,}
});

export default function AuthMainContainer(props) {
  const [ sizes ] = useDeviceProps(propsPerDevice);
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
  const content = isMobile ? form : <styled.FormSection sizes={props.sizes} children={form}/>;

  return content;
}