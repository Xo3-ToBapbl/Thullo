import styled from "styled-components";
import { sizes } from "../../resources/constants/Sizes";
import { Link } from 'react-router-dom';
import { routeNames } from "../../resources/constants/RouteNames";

const ContainerStyled = styled.div`
  display: flex;
  align-items: center;
  gap: ${sizes.contentOffsetRem}rem;
`;

const TitleStyled = styled(Link)`
  font-size: 2rem;
  font-weight: bold;
  text-decoration: none;
  margin-bottom: 2px;
  color: ${props => props.theme.onSecondary};
  filter: brightness(80%);
`;

export default function ApplicationLogo(props) {
  const title = props.title ? (
    <TitleStyled to={routeNames.root}>
      {props.title}
    </TitleStyled>) : null;
    
  return (
    <ContainerStyled style={props.style}>
      <svg 
        width="45"
        height="40"
        viewBox="0 0 30 30" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg">

        <path 
          d="M0 4C0 1.79086 1.79086 0 4 0H10C12.2091 0 14 1.79086 14 4V25C14 27.2091 12.2091 29 10 29H4C1.79086 29 0 27.2091 0 25V4Z" 
          fill="#2F80ED"/>

        <path 
          d="M18 4C18 1.79086 19.7909 0 22 0H28C30.2091 0 32 1.79086 32 4V14C32 16.2091 30.2091 18 28 18H22C19.7909 18 18 16.2091 18 14V4Z" 
          fill="#2F80ED"/>
      </svg>

      {title}
    </ContainerStyled>
  );
}