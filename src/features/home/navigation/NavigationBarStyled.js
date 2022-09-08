import styled from 'styled-components';
import { sizes } from '../../../resources/constants/Sizes';

export const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${sizes.contentOffset}rem;;
  height: 8rem;
  padding: 2rem;
  background-color: ${props => props.theme.secondary};
  box-shadow: 0px 2px 4px ${props => props.theme.onPrimaryShadow};
`;

export const ButtonsContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${sizes.contentOffset}rem;
`;

export const DropdownsContainerStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-grow:1;
  margin-left: ${sizes.contentOffset}rem;
  gap: ${sizes.contentOffset}rem;
`;