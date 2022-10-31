import React from "react";
import styled from "styled-components";
import Menu from "../../components/general/menu/Menu";
import HomeSection from "../../components/general/home/HomeSection";
import { sizes } from "../../resources/constants/sizes";
import { useSelectorBy } from "../../hooks/useSelector";
import { reducersNames } from "../../resources/constants/reducersNames";

export const MainContainer = styled.main`
  padding-bottom: ${sizes.contentOffsetRem}rem;
`;

export default function HomePage() {
  const isMenuVisible = useSelectorBy(reducersNames.menu);
  return (
    <MainContainer>
      <HomeSection sizes={sizes} />
      <Menu isMenuVisible={isMenuVisible} />
    </MainContainer>
  );
}