import "./Animation.css";
import styled from "styled-components";
import { sizes } from "../../resources/constants/Sizes";

export const MenuStyled = styled.div`
  position: fixed;
  top: ${sizes.navBarHeightRem}rem;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: ${sizes.contentOffsetRem}rem;
  padding-top: 1px;
  background-color: ${(props) => props.theme.secondary};
  border-top: 1px solid ${props => props.theme.divider};
  overflow: auto;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${sizes.contentOffsetRem}rem;
  padding-top: ${sizes.contentOffsetRem}rem;
`;