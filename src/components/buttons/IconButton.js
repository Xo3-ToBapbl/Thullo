import styled from 'styled-components';

const PlainButtonStyled = styled.button`
  background-color: transparent;
  color: ${props => props.theme.onSecondary};
  border: none;
  font-size: 4rem;
  padding: 0;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.accent};
  }

  &:active {
    filter: brightness(95%);
  }
`;

export default function IconButton(props) {
  return (
    <PlainButtonStyled className="material-icons" onClick={props.onClick}>
      {props.icon}
    </PlainButtonStyled>
  );
}