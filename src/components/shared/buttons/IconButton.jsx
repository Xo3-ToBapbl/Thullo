import styled from 'styled-components';

const PlainButtonStyled = styled.button`
  background-color: transparent;
  color: ${props => props.theme.onSecondary};
  border: none;
  font-size: ${props => props.iconSize ? props.iconSize : 4}rem;
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
    <PlainButtonStyled 
      type="button"
      iconSize={props.iconSize} 
      className="material-icons" 
      onClick={props.onClick}>

      {props.icon}
    </PlainButtonStyled>
  );
}