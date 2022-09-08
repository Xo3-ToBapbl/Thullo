import React from 'react';
import styled from 'styled-components';

const TextStyled = styled.p`
  font-family: notosans;
  font-size: 1.6rem;
  line-height: 1.5;
  color: ${(props) => props.theme.onSecondary};
`;

const LinkStyled = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.accent};
`;

export default function About(props) {
  return (
    <React.Fragment>
      <TextStyled>
        Thullo web application for managing teams workflow. 
        It is developed in scope of programming challenge which is provided by <LinkStyled href="https://devchallenges.io/" target="_blank">devChallenges.io</LinkStyled> resource.
        It is inspired by original Trello team management web application.
      </TextStyled>

      <TextStyled>
       Check the whole description on <LinkStyled href="https://devchallenges.io/challenges/wP0LbGgEeKhpFHUpPpDh" target="_blank">devChallenges.io</LinkStyled>.
      </TextStyled>

      <TextStyled>
        Check original <LinkStyled href="https://trello.com/" target="_blank">Trello</LinkStyled> web application as well.
      </TextStyled>
    </React.Fragment>
  );
}