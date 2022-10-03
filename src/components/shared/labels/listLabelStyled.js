import styled from 'styled-components';

export const ListLabelStyled = styled.label`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  white-space: nowrap;
  color: ${props => props.theme.onSecondary};
  font-family: notosans;
  font-size: 1.6rem;
  gap: 1.5rem;
  cursor: pointer;
`;