import styled from "styled-components";
import { sizes } from "../../../resources/constants/sizes";
import { OutlineButtonStyled } from "../buttons/OutlineButton";

export const ErrorContainer = styled.aside`
  z-index: 999;
  position: absolute;
  display: flex;
  justify-content: space-between;
  gap: ${sizes.halfOffsetRem}rem;
  left: ${(props) => props.sizes.left};
  right: ${(props) => props.sizes.offset}rem;
  bottom: ${(props) => props.sizes.offset}rem;
  max-width: 37rem;
  padding: ${sizes.contentOffsetRem}rem;
  width: ${(props) => props.sizes.width};
  background-color: ${(props) => props.theme.invalidBackground};
  border-radius: ${sizes.cornerRadiusRem}rem;
`;

export const ErrorDescription = styled.div`
  width: 100%;
`;

const errorIconSize = 2.4;
export const Icon = styled.label`
  height: ${errorIconSize}rem;
  width: ${errorIconSize}rem;
  font-size: ${errorIconSize}rem;
  color: ${props => props.theme.invalid};
`;

const closeIconSize = 2.7;
export const CloseButton = styled.button`
  padding:0;
  cursor: pointer;
  background-color: transparent;
  height: ${closeIconSize}rem;
  width: ${closeIconSize}rem;
  font-size: ${closeIconSize}rem;
  color: ${props => props.theme.invalid};

  &:hover {
    filter: brightness(105%);
  }

  &:active {
    filter: brightness(90%);
  }
`;

export const ErrorText = styled.p`
  font-size: 1.4rem;
  color: ${props => props.theme.invalid};
  text-align: justify;
`;

export const ActionButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  gap: ${sizes.halfOffsetRem}rem;
`;

export const OkButton = styled(OutlineButtonStyled)`
  width: 100px;

  &:hover {
    color: ${props => props.theme.invalid};
    border: 2px solid ${props => props.theme.invalid};
    filter: brightness(105%);
  }

  &:active {
    filter: brightness(90%);
  }
`;