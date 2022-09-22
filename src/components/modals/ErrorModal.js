import "./ErrorModalAnimation.css";
import React from "react";
import * as ReactDOM from 'react-dom';
import * as styled from "./ErrorModalStyled";
import useDeviceProps, { PropsPerDevice } from "../../hooks/UseDeviceProps";
import { sizes } from "../../resources/constants/Sizes";
import { CSSTransition } from "react-transition-group";

const propsPerDevice = new PropsPerDevice(
  {offset: sizes.doubleOffsetRem, left: "none", width: "100%"},
  {offset: sizes.doubleOffsetRem, left: "none", width: "100%"}, 
  {offset: sizes.contentOffsetRem, left: `${sizes.contentOffsetRem}rem`, width: "none" });

const root = document.getElementById("root");

function ModalPortal(props) {
  return ReactDOM.createPortal(
    props.children,
    root,
  );
}

export default function ErrorModal(props) {
  const sizes = useDeviceProps(propsPerDevice);
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