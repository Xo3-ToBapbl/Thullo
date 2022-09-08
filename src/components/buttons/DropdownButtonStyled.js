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
  color: ${(props) => (props.isOpen ? "#2F80ED" : "#333333")};
  background-color: transparent;

  &:hover {
    color: var(--accent);
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
  top: 7rem;
  min-width: 18rem;
  padding: 1.5rem;
  border-radius: 0.8rem;
  background-color: var(--primary);
  box-shadow: 1px 1px 5px 3px rgba(0, 0, 0, 0.05);
`;