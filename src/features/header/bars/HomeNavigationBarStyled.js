import styled from 'styled-components';
import { sizes } from '../../../resources/constants/Sizes';

export const NavigationBar = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${sizes.contentOffset}rem;
  height: ${sizes.navBarHeight}rem;
  width: 100%;
  padding: 2rem;
  z-index: 999;
  background-color: ${props => props.theme.secondary};
  box-shadow: 0px 2px 4px ${props => props.theme.onPrimaryShadow};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${sizes.contentOffset}rem;
`;

export const DropdownsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-grow:1;
  margin-left: ${sizes.contentOffset}rem;
  gap: ${sizes.contentOffset}rem;
`;