import styled from "styled-components";
import { sizes } from "../../../resources/constants/sizes";
import { AccentButtonStyled } from "../../shared/buttons/AccentButton";

export const applicationLogoStyle = {
  alignSelf: "center",
  transform: "scale(1.2)",
  marginTop: "1rem",
  marginBottom: `${sizes.contentOffsetRem}rem`,
};

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${sizes.contentOffsetRem}rem;
  width: 100%;
`;

export const FormHeader = styled.h2`
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: ${sizes.contentOffsetRem}rem;
  color: ${(props) => props.theme.onSecondary};
`;

export const ContinueButton = styled(AccentButtonStyled)`
  margin-top: ${sizes.contentOffsetRem}rem;
  background-color: ${(props) => props.theme.success};
`;