import styled from 'styled-components';
import { sizes } from '../../../../resources/constants/sizes';

export const NavigationBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${sizes.contentOffsetRem}rem;
  height: ${sizes.navBarHeightRem}rem;
  width: 100%;
  padding: 2rem;
  z-index: 999;
  background-color: ${props => props.theme.secondary};
  box-shadow: 0px 2px 4px ${props => props.theme.onPrimaryShadow};
`;

export const UtilityContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: ${sizes.contentOffsetRem}rem;
`;
