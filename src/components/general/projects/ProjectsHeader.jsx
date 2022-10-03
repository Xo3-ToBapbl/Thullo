import styled from "styled-components";
import FillButton from "../../shared/buttons/FillButton";
import { sizes } from "../../../resources/constants/sizes";
import { useTranslation } from "react-i18next";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${sizes.componentHeightRem}rem;
  width: 100%;
  max-width: ${props => sizes[props.device].mainContentMaxWidthPx}px;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  color: ${(props) => props.theme.onPrimary};
`;

export default function ProjectHeader(props) {
  const [ t ] = useTranslation();
  const buttonChildren = `+ ${t("add")}`;

  return (
    <Header device={props.device}>
      <Title>{t("allBoards")}</Title>
      <FillButton children={buttonChildren}/>
    </Header>
  );
}