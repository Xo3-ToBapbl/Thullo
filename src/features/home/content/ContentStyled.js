import styled from 'styled-components';
import { sizes } from '../../../resources/constants/Sizes';

export const MainContainerStyled = styled.main`
  height: 100vh;
  padding-top: ${sizes.navBarHeight}rem;
`;

export const SectionContainerStyled = styled.section`
  display: flex;
  height: auto;
  max-width: ${props => props.sizes.maxWidth}px;
  background-color: red;
  margin: auto;
`;

export const IntroductionStyled = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  gap: ${sizes.contentOffset}rem;
  width: 100%;
  height: auto;
`;

export const DescriptionStyled = styled.div`
  display: flex;
  height:300px;
`;

export const FormStyled = styled.div`
  display: flex;
  height: 150px;
`;

export const ImageStyled = styled.img`
  height: ${props => props.sizes.imgHeight}px;
  width: ${props => props.sizes.imgWidth}px;
  aspect-ratio: auto 465.5 / 602.5;
  object-fit: contain;
`;