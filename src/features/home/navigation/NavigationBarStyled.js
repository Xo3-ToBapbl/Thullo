import styled from 'styled-components';

export const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--content-offset);
  height: 8rem;
  padding: 2rem;
  background-color: ${props => props.theme.primary};
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
`;

export const ButtonsContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  gap: var(--content-offset);
`;

export const DropdownsContainerStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-grow:1;
  margin-left: var(--content-offset);
  gap: var(--content-offset);
`;