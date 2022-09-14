import React from "react";
import home from "../../resources/images/home.webp";
import * as styled from "./HomePageStyled";
import { media } from "../../components/media/MediaQueries";
import { useTranslation } from 'react-i18next';
import { sizes } from "../../resources/constants/Sizes";

export default function HomePage() {
  return (
    <React.Fragment>
      <media.Desktop>
        <HomeContent
          sizes={{
            maxWidthPx: 1050,
            imgHeightPx: 450,
            imgWidthPx: 347,
            introductionFontSizeRatio: 1,
            contentOffset: sizes.doubleOffset,
          }} />
      </media.Desktop>

      <media.Tablet>
        <HomeContent
          sizes={{
            maxWidthPx: 950,
            imgHeightPx: 373,
            imgWidthPx: 288,
            introductionFontSizeRatio: 0.9,
            contentOffset: sizes.doubleOffset,
          }} />
      </media.Tablet>

      <media.Mobile>
        <HomeContent
          sizes={{
            maxWidthPx: 450,
            imgHeightPx: 270,
            imgWidthPx: 208,
            introductionFontSizeRatio: 0.8,
            contentOffset: sizes.contentOffset,
          }} />
      </media.Mobile>
    </React.Fragment>
  );
}

function HomeContent(props) {
  return (
    <styled.MainContainer sizes={props.sizes}>
      <styled.SectionContainer sizes={props.sizes}>

        <styled.Introduction sizes={props.sizes} >
          <DescriptionInner sizes={props.sizes} />
          <FormInner />
        </styled.Introduction>

        <styled.Image 
          sizes={props.sizes} 
          src={home} 
          width="465.5" 
          height="602.5" />

      </styled.SectionContainer>
      <styled.Divider sizes={props.sizes}/>
    </styled.MainContainer>
  );

  function DescriptionInner(props) {
    const [ t ] = useTranslation();
    return (
      <styled.Description>
        <styled.Title sizes={props.sizes}>{t("thulloTitleText")}</styled.Title>
        <styled.Information sizes={props.sizes}>{t("thulloDescriptionText")}</styled.Information>
      </styled.Description>
    );
  }

  function FormInner(props) {
    const [ t ] = useTranslation();
    return (
      <styled.Form>
        <styled.EmailInput type="email" placeholder={t("email")} />
        <styled.EmailButton children={t("emailButtonText")}/>
      </styled.Form>
    );
  }
}