import React from "react";
import styled from "styled-components";
import HomeSection from "../../components/general/home/HomeSection";
import { sizes } from "../../resources/constants/sizes";

export const MainContainer = styled.main`
  padding-bottom: ${sizes.contentOffsetRem}rem;
`;

export default function HomePage() {
  return (
    <MainContainer>
      <HomeSection sizes={sizes} />
    </MainContainer>
  );
}