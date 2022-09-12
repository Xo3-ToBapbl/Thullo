import React from 'react';
import styled from 'styled-components';
import { useSelector } from "react-redux";
import { sizes } from '../../../resources/constants/Sizes';
import "./Animation.css";
import { CSSTransition } from 'react-transition-group';

const MenuStyled = styled.div`
  position: absolute;
  top: ${sizes.navBarHeight}rem;
  bottom: 0;
  width: 100%;
  background-color: red;
`;

export default function Menu(props) {
  const theme = useSelector(state => state.theme.value);
  const isVisible = props.isMenuVisible;
  
  return (
    <React.Fragment>
      <CSSTransition 
        in={isVisible} 
        unmountOnExit={true}
        timeout={300} 
        classNames="menu">

        <MenuStyled />
      </CSSTransition>
    </React.Fragment>
  );
}