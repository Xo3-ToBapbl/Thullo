import styled from "styled-components";
import { sizes } from "../../../resources/constants/sizes";

export const UserAvatarContainer = styled.div`
  display: flex;
  gap: ${sizes.halfOffsetRem}rem;
  align-items: center;
  color: ${(props) => (props.isOpen ? props.theme.accent : props.theme.onSecondary)};
  padding: ${sizes.quarterOffsetRem}rem;
  border-radius: ${sizes.cornerRadiusRem}rem;
  background-color: ${props => props.theme.primary};
  box-shadow: 0px 2px 4px ${props => props.theme.onSecondaryShadow};
  cursor: pointer;
`;

export const UserName = styled.h2`
  font-size: 1.6rem;
  font-family: notosans;
  white-space: nowrap;
  color: ${(props) => props.theme.onSecondary};

  &:last-child {
    margin-right: ${sizes.halfOffsetRem}rem;
  }
`;