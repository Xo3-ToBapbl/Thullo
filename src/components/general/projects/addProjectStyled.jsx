import styled from "styled-components";
import { sizes } from "../../../resources/constants/sizes";
import { AccentButtonStyled } from "../../shared/buttons/AccentButton";
import { TextInput } from "../../shared/inputs/textInputStyled";

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

export const AddProjectForm = styled.form`
  position: absolute;
  height: ${(props) => props.sizes.height};
  width: ${(props) => props.sizes.width};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: ${sizes.contentOffsetRem}rem;
  padding: ${(props) => props.sizes.padding}rem;
  border-radius: ${(props) => props.sizes.cornerRadius};
  background-color: ${(props) => props.theme.secondary};
`;

export const CloseButton = styled(AccentButtonStyled)`
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

export const ProjectTitleInput = styled(TextInput)`
  width: 100%;
  font-size: 1.5rem;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.onPrimary};
  border-radius: ${sizes.cornerRadiusRem}rem;
  box-shadow: 0px 2px 4px ${props => props.theme.onSecondaryShadow};
`;

export const OptionButtonsContainer = styled.div`
  display: flex;
  gap: ${sizes.contentOffsetRem}rem;
`;

export const CompleteButtonsContainer = styled.div`
  display: flex;
  gap: ${sizes.contentOffsetRem}rem;
  justify-content: end;
  margin-top: ${sizes.contentOffsetRem}rem;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  text-align: center;
  color: ${(props) => props.theme.onPrimary};
`;

export const CompleteButtonStyle = {
  minWidth: "120px",
};