import styled from 'styled-components'; 
import { sizes } from '../resources/constants/Sizes';

export const ApplicationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: inherit;
  padding: 0 ${props => props.contentOffset}rem;
  padding-top: ${props => sizes.navBarHeightRem + props.contentOffset}rem;
  background-color: ${props => props.theme.primary};
`;