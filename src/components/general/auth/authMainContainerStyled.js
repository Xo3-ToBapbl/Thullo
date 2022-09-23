import styled from "styled-components";
import { sizes } from "../../../resources/constants/sizes";

export const Background = styled.div`
  z-index: -1;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  background-color: ${(props) => props.theme.secondary};
`;

export const MainContainer = styled.main`
  z-index: 0;
  margin-top: ${(props) => props.sizes.containerTopOffset}rem;
`;

export const FormSection = styled.section`
  width: 100%;
  max-width: ${(props) => props.sizes.maxWidthPx}px;
  margin: auto;
  padding: ${sizes.doubleOffsetRem}rem;
  background-color: ${(props) => props.theme.secondary};
  border-radius: ${sizes.cornerRadiusRem}rem;
  box-shadow: 0px 2px 4px 2px ${(props) => props.theme.onPrimaryShadow};
`;