import styled from "styled-components";
import { sizes } from "../../../resources/constants/sizes";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${sizes.contentOffsetRem}rem;
`;

const Icon = styled.p`
  font-size: 4.6rem;
  color: ${(props) => props.noData ? props.theme.onSecondary : props.theme.invalid};
`;

const Title = styled.h1`
  color: ${(props) => props.theme.onPrimary};
  font-family: "notosans";
  font-size: 2rem;
  text-align: center;
`;

const Description = styled.p`
  color: ${(props) => props.theme.onSecondary};
  font-size: 1.4rem;
  text-align: center;
`;

export default function Error(props) {
  const noData = props.noData ?? false;
  return (
    <Container>
      <Icon noData={noData} className="material-icons">
        { noData ? "post_add" : "error_outline" }
      </Icon>
      
      <Title>{props.title}</Title>    
      <Description>{props.description}</Description>
    </Container>
  );
}