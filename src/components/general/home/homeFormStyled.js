import styled from "styled-components";
import { FillButtonStyled } from "../../../components/shared/buttons/FillButton";
import { TextInput } from "../../../components/shared/inputs/textInputStyled";
import { sizes } from "../../../resources/constants/sizes";

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 0.5rem;
  border-radius: ${sizes.cornerRadiusRem}rem;
  background-color: ${props => props.theme.secondary};
  box-shadow: 0px 2px 4px ${props => props.theme.onPrimaryShadow};
`;

export const EmailInput = styled(TextInput)`
  flex: 2 1 0px;
  min-width: 28rem;
  color: ${props => props.theme.onSecondary};
`;

export const EmailButton = styled(FillButtonStyled)`
  flex: 1 0 0rem;
  min-width: 20rem;
`;