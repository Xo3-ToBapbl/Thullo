import styled from "styled-components";
import { sizes } from "../../../resources/constants/sizes";

export const AbbreviationContainer = styled.div`
  aspect-ratio: 1/1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${0.7 * sizes.cornerRadiusRem}rem;
  background-color: ${(props) => props.backgroundColor ?? props.theme.accent};
  cursor: pointer;
`;

export const Abbreviation = styled.h2`
  font-size: 1.6rem;
  font-family: notosans;
  color: ${props => props.theme.onAccent};
`;