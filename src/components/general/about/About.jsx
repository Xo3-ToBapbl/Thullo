import React from 'react';
import styled from 'styled-components';
import { Trans, useTranslation } from 'react-i18next';

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
  const [ t ] = useTranslation();
  return (
    <React.Fragment>
      <TextStyled>
        <Trans 
          i18nKey="aboutPartOne"
          values={{link: t("devChallengesLink")}}
          components={{tag: <LinkStyled href="https://devchallenges.io/" target="_blank"/>}}/>
      </TextStyled>

      <TextStyled>
        <Trans 
          i18nKey="aboutPartTwo"
          values={{link: t("devChallengesLink")}}
          components={{tag: <LinkStyled href="https://devchallenges.io/challenges/wP0LbGgEeKhpFHUpPpDh" target="_blank"/>}}/>
      </TextStyled>

      <TextStyled>
        <Trans 
          i18nKey="aboutPartThree"
          values={{link: t("trello")}}
          components={{tag: <LinkStyled href="https://trello.com/" target="_blank"/>}}/>
      </TextStyled>
    </React.Fragment>
  );
}