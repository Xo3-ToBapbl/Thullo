import React from "react";  
import { media } from "../../../components/media/MediaQueries";
import { useMediaQuery } from "react-responsive";
import { mediaNames } from "../../../resources/constants/MediaNames";
import matchMedia from "matchmediaquery"
import home from "../../../resources/images/home.webp";
import 
{ 
  MainContainerStyled, 
  SectionContainerStyled, 
  IntroductionStyled, 
  ImageStyled,
  DescriptionStyled,
  FormStyled,
 } from "./ContentStyled";

export default function MainContent() {
  return (
    <React.Fragment>
      <media.Desktop>
        <MainContentInner sizes={{
          maxWidth: 992,
          imgHeight: 450,
          imgWidth: 347,
        }}/>
      </media.Desktop>

      <media.Tablet>
        <MainContentInner sizes={{
            maxWidth: 700,
            imgHeight: 373,
            imgWidth: 288,
          }}/>
      </media.Tablet>

      <media.Mobile>
        <MainContentInner sizes={{
            maxWidth: 450,
            imgHeight: 270,
            imgWidth: 208,
          }}/>
      </media.Mobile>
    </React.Fragment>
  );
}

function MainContentInner(props) {
  return (
    <MainContainerStyled>
      <SectionContainerStyled sizes={props.sizes}>
        <IntroductionStyled>
          <DescriptionStyled/>
          <FormStyled/>
        </IntroductionStyled>
        <ImageStyled sizes={props.sizes} src={home} width="465.5" height="602.5"/>
      </SectionContainerStyled>
    </MainContainerStyled>
  );
}