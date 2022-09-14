import styled from 'styled-components'; 

export const ApplicationContainer = styled.div`
  background-color: ${props => props.theme.primary};
  height: 100%;
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  background-color: ${props => props.theme.primary};
`;