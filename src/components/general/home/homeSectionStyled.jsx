import styled from "styled-components";
import { sizes } from "../../../resources/constants/sizes";

export const SectionContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${sizes.doubleOffsetRem}rem;
  flex-wrap: wrap-reverse;
  max-width: ${props => props.sizes.maxWidthPx}px;
  margin: auto;
`;

export const Introduction = styled.div`
  flex: 1 1 0px;
  display: grid;
  grid-template-rows: auto auto;
  gap: ${sizes.doubleOffsetRem}rem;
  height: auto;
`;

export const Image = styled.img`
  height: ${props => props.sizes.imgHeightPx}px;
  width: ${props => props.sizes.imgWidthPx}px;
  aspect-ratio: auto 465.5 / 602.5;
  object-fit: contain;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${sizes.contentOffsetRem}rem;
`;

export const Title = styled.h1`
  font-size: ${props => props.sizes.fontSizeRation * 4.4}rem;
  line-height: 1.2;
  color: ${props => props.theme.onPrimary};
`;

export const Information = styled.p`
  font-size: ${props => props.sizes.fontSizeRation * 2.2}rem;
  color: ${props => props.theme.onPrimary};
`;