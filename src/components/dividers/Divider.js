import styled from "styled-components";

export const Divider = styled.div`
  height: 1px;
  margin: auto;
  width: 100%;
  max-width: ${props => props.sizes.maxWidthPx}px;
  background-color: ${props => props.theme.divider};
`;