import styled from "styled-components";
import { FillButtonStyled } from "../../components/buttons/FillButton";
import { sizes } from "../../resources/constants/Sizes";

export const MainContainer = styled.main`
  height: 100%;
  padding-top: ${sizes.navBarHeight}rem;
`;

export const SectionContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${sizes.doubleOffset}rem;
  flex-wrap: wrap-reverse;
  height: auto;
  max-width: ${props => props.sizes.maxWidthPx}px;
  margin: auto;
  padding: ${props => props.sizes.contentOffset}rem;
`;

export const Introduction = styled.div`
  flex: 1 1 0px;
  display: grid;
  grid-template-rows: auto auto;
  gap: ${props => props.sizes.contentOffset}rem;
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
  gap: ${sizes.contentOffset}rem;
`;

export const Title = styled.h1`
  font-size: ${props => props.sizes.introductionFontSizeRatio * 4.4}rem;
  line-height: 1.2;
  color: ${props => props.theme.onPrimary};
`;

export const Information = styled.p`
  font-size: ${props => props.sizes.introductionFontSizeRatio * 2.2}rem;
  color: ${props => props.theme.onPrimary};
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 0.5rem;
  border-radius: ${sizes.cornerRadius}rem;
  background-color: ${props => props.theme.secondary};
  box-shadow: 0px 2px 4px ${props => props.theme.onPrimaryShadow};
`;

export const EmailInput = styled.input`
  all: unset;
  height: ${sizes.componentHeight}rem;
  flex: 2 1 0px;
  min-width: 28rem;
  font-size: 1.6rem;
  color: ${props => props.theme.onSecondary};
  padding: 0 ${sizes.halfOffset}rem;
`;

export const EmailButton = styled(FillButtonStyled)`
  flex: 1 0 0rem;
  min-width: 20rem;
`;