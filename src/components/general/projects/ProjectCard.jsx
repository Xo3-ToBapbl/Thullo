import styled from "styled-components";
import { sizes } from "../../../resources/constants/sizes";

const Card = styled.article`
  width: 100%;
  height: 230px;
  border-radius: ${2 * sizes.cornerRadiusRem}rem;
  background-color: ${props => props.theme.secondary};
  box-shadow: 0px 3px 4px ${props => props.theme.onPrimaryShadow};
`;

export default function ProjectCard() {
  return (
    <Card />
  );
}