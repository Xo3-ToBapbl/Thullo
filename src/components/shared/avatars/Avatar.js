import styled from "styled-components";
import { sizes } from "../../../resources/constants/sizes";
import { getAbbreviation } from "../../../utils/stringUtils";

export default function Avatar(props) {
  const data = props.data;
  return data.img ? 
    <AvatarImage imageSource={data.img}/> : 
    <DefaultAvatar firstName={data.firstName} lastName={data.lastName} />;
}

function AvatarImage(props) {
  const imageSource = props.imageSource;
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
  cursor: pointer;
`;

const Abbreviation = styled.h2`
  font-size: 1.6rem;
  font-family: notosans;
  color: ${props => props.theme.onAccent};
`;

function DefaultAvatar(props) {
  const abbreviationText = getAbbreviation(`${props.firstName} ${props.lastName}`);
  return (
    <AbbreviationContainer>
      <Abbreviation>
        {abbreviationText}
      </Abbreviation>
    </AbbreviationContainer>
  );
}