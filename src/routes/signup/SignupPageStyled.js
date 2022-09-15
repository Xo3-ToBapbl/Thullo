import styled from 'styled-components';
import { FillButtonStyled } from '../../components/buttons/FillButton';
import { TextInput } from "../../components/inputs/TextInput";
import { sizes } from '../../resources/constants/Sizes';

export const MainContainer = styled.main``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${sizes.contentOffsetRem}rem;
  width: 100%;
  max-width: ${props => props.sizes.maxWidthPx}px;
  margin: auto;
  padding: ${sizes.doubleOffsetRem}rem;
  background-color: ${props => props.theme.secondary};
  border-radius: ${sizes.cornerRadiusRem}rem;
  box-shadow: 0px 2px 4px 2px ${props => props.theme.onPrimaryShadow};
`;

export const FormHeader = styled.h2`
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: ${sizes.contentOffsetRem}rem;
  color: ${props => props.theme.onSecondary};
`;

export const FormInput = styled(TextInput)`
  font-size: 1.5rem;
  color: ${props => props.theme.onPrimary};
  background-color: ${props => props.theme.primary};
  box-shadow: 0px 2px 4px 2px ${props => props.theme.onSecondaryShadow};
  border-radius: ${sizes.cornerRadiusRem}rem;
`;

export const ContinueButton = styled(FillButtonStyled)`
  margin-top: ${sizes.contentOffsetRem}rem;
  background-color: ${props => props.theme.success};
`;