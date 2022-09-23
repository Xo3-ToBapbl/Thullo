import styled from "styled-components";
import { sizes } from "../../../resources/constants/sizes";
import { TextInput } from "./textInputStyled";

export const FormInput = styled(TextInput)`
  font-size: 1.5rem;
  color: ${(props) => props.theme.onPrimary};
  background-color: ${(props) => props.theme.primary};
  box-shadow: 0px 2px 4px 2px ${(props) => props.theme.onSecondaryShadow};
  border-radius: ${sizes.cornerRadiusRem}rem;
`;