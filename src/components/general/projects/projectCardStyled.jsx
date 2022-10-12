import styled from "styled-components";
import { sizes } from "../../../resources/constants/sizes";

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: ${sizes.contentOffsetRem}rem;
  width: 100%;
  padding: ${sizes.halfOffsetRem}rem;
  border-radius: ${2 * sizes.cornerRadiusRem}rem;
  background-color: ${props => props.theme.secondary};
  box-shadow: 0px 3px 4px ${props => props.theme.onPrimaryShadow};
  cursor: pointer;
`;

export const Image = styled.img`
  height: 60%;
  width: 100%;
  aspect-ratio: auto 219 / 130;
  border-radius: ${sizes.cornerRadiusRem}rem;
  object-fit: cover;
`;

export const Title = styled.h1`
  font-family: "notosans";
  font-size: 1.6rem;
  white-space: nowrap;
  color: ${(props) => props.theme.onPrimary};
`;

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: ${sizes.halfOffsetRem}rem;
  height: 3rem;
`;

export const OthersLabel = styled.p`
  font-family: "notosans";
  color: ${(props) => props.theme.onSecondary};
`;