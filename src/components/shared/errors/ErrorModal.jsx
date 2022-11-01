import "./errorModalAnimation.css";
import React from "react";
import * as styled from "./errorModalStyled";
import useDeviceProps, { PropsPerDevice } from "../../../hooks/useDeviceProps";
import { sizes } from "../../../resources/constants/sizes";
import { CSSTransition } from "react-transition-group";
import { ModalPortal } from "../portals/ModalPortal";

const propsPerDevice = new PropsPerDevice({
  defaultDevice: {offset: sizes.doubleOffsetRem, left: "none", width: "100%"},
  mobile: {offset: sizes.contentOffsetRem, left: `${sizes.contentOffsetRem}rem`, width: "none" }
});

export default function ErrorModal(props) {
  const [ sizes ] = useDeviceProps(propsPerDevice);
  return (
    <ModalPortal>
      <CSSTransition 
        in={props.isVisible}
        unmountOnExit={true}
        timeout={300}
        classNames="errorModal">

        <styled.ErrorContainer sizes={sizes}>
          <styled.Icon className="material-icons">error</styled.Icon>
          <styled.ErrorText>{props.message}</styled.ErrorText>
          <styled.CloseButton 
            type="button" 
            className="material-icons" 
            onClick={props.onCloseClicked}>
            close
          </styled.CloseButton>
        </styled.ErrorContainer>
      </CSSTransition>
    </ModalPortal>
  );
}