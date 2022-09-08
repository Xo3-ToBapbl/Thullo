import styled from "styled-components";
import BaseButtonStyled from "./BaseButton";

export const DropdownButtonContainerStyled = styled.div`
  position: relative;
`;

export const DropdownButtonStyled = styled(BaseButtonStyled)`
  display: flex;
  align-items: center;
  font-weight: bold;
  padding: 0;
  border-radius: 0rem;
  color: ${(props) => (props.isOpen ? props.theme.accent : props.theme.onSecondary)};
  background-color: transparent;

  &:hover {
    color: ${(props) => props.theme.accent};
    filter: none;
  }
`;

export const TickStyled = styled.p`
  font-size: 2.5rem;
  transform: rotate(${(props) => props.angle}deg);
  transition: transform 250ms ease;
`;

export const DropdownContentStyled = styled.section`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  left: 0px;
  top: 8rem;
  min-width: ${(props) => props.width ? props.width : 18}rem;
  padding: 1.5rem;
  border-radius: 0.8rem;
  background-color: ${props => props.theme.secondary};
  box-shadow: 0px 2px 4px 2px ${props => props.theme.onPrimaryShadow};
`;