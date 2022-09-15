import { useTranslation } from 'react-i18next';
import { Divider } from '../../components/dividers/Divider';
import { mobileMaxWidth } from '../../components/media/MediaQueries';
import { sizes } from '../../resources/constants/Sizes';
import * as styled from './SignupPageStyled';

const sizesLocal = {
  maxWidthPx: mobileMaxWidth,
  imgHeightPx: 450,
  imgWidthPx: 347,
  introductionFontSizeRatio: 1,
  contentOffset: sizes.doubleOffsetRem,
};

export default function SignupPage(props) {
  return (
    <styled.MainContainer sizes={sizesLocal}>

      <AuthenticationForm sizes={sizesLocal}/>
    </styled.MainContainer>
  );
}

function AuthenticationForm(props) {
  const [ t ] = useTranslation();
  return(
    <styled.Form sizes={props.sizes}>
      <styled.FormHeader>{t("loginFormHeader")}</styled.FormHeader>

      <styled.FormInput type="text" placeholder={t("firstName")} />
      <styled.FormInput type="text" placeholder={t("lastName")} />
      <styled.FormInput type="email" placeholder={t("email")} />
      <styled.FormInput type="password" placeholder={t("password")} />
      <styled.FormInput type="password" placeholder={t("confirmPassword")} />

      <styled.ContinueButton>Continue</styled.ContinueButton>
    </styled.Form>
  );
}