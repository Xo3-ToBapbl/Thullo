import home from "../../../resources/images/home.webp";
import React from "react";
import HomeForm from "./HomeForm";
import * as styled from "./homeSectionStyled";
import { useTranslation } from 'react-i18next';

export default function HomeSection(props) {
  const sizes = props.sizes;
  return (
    <styled.SectionContainer sizes={sizes}>
      <styled.Introduction sizes={sizes}>
        <DescriptionInner sizes={sizes} />
        <HomeForm />
      </styled.Introduction>

      <styled.Image sizes={sizes} src={home} width="465.5" height="602.5" />
    </styled.SectionContainer>
  );
}

function DescriptionInner(props) {
  const [ t ] = useTranslation();
  return (
    <styled.Description>
      <styled.Title sizes={props.sizes}>{t("thulloTitleText")}</styled.Title>
      <styled.Information sizes={props.sizes}>{t("thulloDescriptionText")}</styled.Information>
    </styled.Description>
  );
}