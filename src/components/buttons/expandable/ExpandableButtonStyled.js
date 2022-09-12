import styled from "styled-components";
import BaseButtonStyled from "../BaseButton";
import { sizes } from "../../../resources/constants/Sizes";

export const ExpandableButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 0px;
  border-bottom: 1px solid ${props => props.isOpen ? props.theme.accent : props.theme.divider};

  &:hover {
    border-bottom: 1px solid ${props => props.theme.accent};
  }
`;

export const ExpandableButton = styled(BaseButtonStyled)`
  display: flex;
  justify-content: space-between;
  height: ${sizes.navBarHeight}rem;
  padding: 0;
  align-items: center;
  font-size: 1.8rem;
  font-weight: bold;
  color: ${props => props.theme.onSecondary};
  background-color: transparent;

  &:hover {
    color: ${props => props.theme.accent};
    filter: none;
  }
`;

export const Tick = styled.p`
  font-size: 2.5rem;
  transform: rotate(${(props) => props.angle}deg);
  transition: transform 250ms ease;
`;

export const ExpandableContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: ${sizes.halfOffset}rem;
`;