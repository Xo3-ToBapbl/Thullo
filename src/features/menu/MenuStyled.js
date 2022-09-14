import "./Animation.css";
import styled from "styled-components";
import { sizes } from "../../resources/constants/Sizes";

export const MenuStyled = styled.div`
  position: fixed;
  top: ${sizes.navBarHeight}rem;
  bottom: 0;
  width: 100%;
  padding: ${sizes.contentOffset}rem;
  padding-top: 1px;
  background-color: ${(props) => props.theme.secondary};
  border-top: 1px solid ${props => props.theme.divider};
  overflow: auto;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${sizes.contentOffset}rem;
  padding-top: ${sizes.contentOffset}rem;
`;