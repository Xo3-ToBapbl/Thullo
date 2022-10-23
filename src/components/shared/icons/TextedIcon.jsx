import styled from "styled-components";
import { sizes } from "../../../resources/constants/sizes";
import { Icon } from "./Icon";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.gap ?? sizes.halfOffsetRem}rem;
`;

export function TextedIcon(props) {
  return (
    <Container>
      <Icon iconName={props.iconName} size={1.8}/>
      { props.text }
    </Container>
  );
}