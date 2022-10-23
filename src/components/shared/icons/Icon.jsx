import styled from "styled-components";

const IconStyled = styled.p`
  font-size: ${(props) => props.size ?? 2}rem;
`;

export function Icon(props) {
  return <IconStyled 
    className="material-icons" 
    size={props.size}
    children={props.iconName}/>;
}