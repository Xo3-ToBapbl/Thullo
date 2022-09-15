import styled from "styled-components";
import { sizes } from "../../resources/constants/Sizes";

export const TextInput = styled.input`
  all: unset;
  font-size: 1.6rem;
  height: ${sizes.componentHeightRem}rem;
  padding: 0 ${sizes.halfOffsetRem}rem;
`;