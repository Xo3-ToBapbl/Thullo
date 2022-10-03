import styled from "styled-components";
import { sizes } from "../../../resources/constants/sizes";
import { FillButtonStyled } from "../../shared/buttons/FillButton";
import { TextInput } from "../../shared/inputs/textInputStyled";

export const Form = styled.form`
  display: flex;
  width: 100%;
  padding: ${sizes.quarterOffsetRem}rem;
  border-radius: ${sizes.cornerRadiusRem}rem;
  background-color: ${props => props.theme.primary};
  box-shadow: 0px 2px 4px ${props => props.theme.onSecondaryShadow};
`;

export const SearchInput = styled(TextInput)`
  min-width: ${(props) => props.propsLocal.searchMinWidthRem}rem;
  width: 100%;
  height: 100%;
  font-size: 1.5rem;
  color: ${props => props.theme.onPrimary};
`;

export const SearchButton = styled(FillButtonStyled)`
  height: 100%;
  min-width: ${(props) => props.propsLocal.buttonMinWidthRem}rem;
  padding: 0;
  border-radius: ${0.7 * sizes.cornerRadiusRem}rem;
  font-size: 1.5rem;
  font-family: ${(props) => props.propsLocal.buttonFontFamily};
`;

export const propsLocal = {
  searchMinWidthRem: 40,
  buttonMinWidthRem: 7,
  buttonClassName: "",
  buttonChildren: "Search",
  buttonFontFamily: "poppins",
};