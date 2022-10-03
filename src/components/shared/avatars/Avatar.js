import styled from "styled-components";
import { sizes } from "../../../resources/constants/sizes";

export default function Avatar(props) {
  return props.data ? <AvatarImage/> : <DefaultAvatar />;
}

function AvatarImage(props) {
  return <img alt="avatar"/>;
}

const AbbreviationContainer = styled.div`
  aspect-ratio: 1/1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${0.7 * sizes.cornerRadiusRem}rem;
  background-color: ${(props) => props.theme.accent};
`;

const Abbreviation = styled.h2`
  font-size: 1.6rem;
  font-family: notosans;
  color: ${props => props.theme.onAccent};
`;

function DefaultAvatar() {
  return (
    <AbbreviationContainer>
      <Abbreviation>
        XN
      </Abbreviation>
    </AbbreviationContainer>
  );
}