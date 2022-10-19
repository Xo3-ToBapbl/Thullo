import styled from "styled-components";
import { sizes } from "../../../resources/constants/sizes";
import { FillButtonStyled } from "../../shared/buttons/FillButton";

export const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00000080;
`;

export const AddProjectCard = styled.article`
  position: absolute;
  height: 30rem;
  width: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: ${sizes.contentOffsetRem}rem;
  padding: ${sizes.doubleOffsetRem}rem;
  border-radius: ${sizes.cornerRadiusRem}rem;
  background-color: ${(props) => props.theme.secondary};
`;

export const CloseButton = styled(FillButtonStyled)`
  position: absolute;
  top: 2rem;
  right: 2rem;
  font-size: 2rem;
  padding: 0;
  aspect-ratio: 1/1;
`;

export const ImageContainer = styled.div`
  height: 14rem;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  aspect-ratio: auto 219 / 130;
  border-radius: ${sizes.cornerRadiusRem}rem;
  object-fit: cover;
`;
