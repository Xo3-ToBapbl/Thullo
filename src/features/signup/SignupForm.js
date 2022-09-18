import React from "react";
import { useTranslation } from "react-i18next";
import * as styled from "../auth/AuthFormStyled";
import AuthForm from "../auth/AuthForm";

export default function SignupForm(props) {
  const [t] = useTranslation();
  const inputsFragment = (
    <React.Fragment>
      <styled.FormInput type="text" placeholder={t("firstName")} />
      <styled.FormInput type="text" placeholder={t("lastName")} />
      <styled.FormInput type="email" placeholder={t("email")} />
      <styled.FormInput type="password" placeholder={t("password")} />
      <styled.FormInput type="password" placeholder={t("confirmPassword")} />
    </React.Fragment>
  );

  return <AuthForm 
    sizes={props.sizes} 
    children={inputsFragment}
    headerText={t("signupFormHeader")}/>;
}