import getRandomColor from "../../../utils/randomColorUtils";
import * as styled from "./avatarStyled";
import { getAbbreviation } from "../../../utils/stringUtils";
import LoadingSpinner from "../loaders/LoadingSpinner";
import { useTheme } from "styled-components";

export default function Avatar(props) {
  const data = props.data;
  return <DefaultAvatar 
    isError={props.isError}
    isLoading={props.isLoading} 
    firstName={data?.firstName} 
    lastName={data?.lastName} />;
}

function DefaultAvatar(props) {
  const theme = useTheme();
  const isLoading = props.isLoading ?? false;
  const isError = props.isError ?? false;

  const backgroundColor = isError ? theme.invalid : getRandomColor();
  const innerContent = isLoading ? 
    <LoadingSpinner size={2.4}/> : 
    <styled.Abbreviation>
      { isError ? "!" : getAbbreviation(`${props.firstName} ${props.lastName}`) }
    </styled.Abbreviation>;

  return (
    <styled.AbbreviationContainer backgroundColor={backgroundColor}>
      {innerContent}
    </styled.AbbreviationContainer>
  );
}