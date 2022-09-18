import * as styled from "../auth/AuthFormStyled";
import AuthForm from "../auth/AuthForm";
import PasswordInput from "../../components/inputs/PasswordInput";
import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

function InitialFormState(email) {
  this.email = email ?? "";
  this.password = "";
  this.confirmPassword = "";
  this.firstName = "";
  this.lastName = "";
}

export default function SignupForm(props) {
  const [t] = useTranslation();
  const passwordsDoNotMatchError = t("errorPasswordDoNotMatch");
  const [formState, setFormState] = useState(new InitialFormState(props.email));
  const confirmPasswordRef = useRef();

  const inputsFragment = (
    <React.Fragment>
      <styled.FormInput 
        required={true}
        value={formState.firstName}
        type="text" 
        onChange={formInputChanged}
        name="firstName"
        autoComplete="off"
        placeholder={t("firstName")} />

      <styled.FormInput 
        required={true}
        value={formState.lastName}
        type="text" 
        name="lastName"
        autoComplete="off"
        onChange={formInputChanged}
        placeholder={t("lastName")} />

      <styled.FormInput 
        required={true}
        value={formState.email} 
        type="email" 
        placeholder={t("email")}
        name="email"
        autoComplete="off"
        onChange={formInputChanged} />

      <PasswordInput 
        required={true}
        value={formState.password}
        placeholder={t("password")}
        name="password"
        onChange={formInputChanged} />

      <PasswordInput 
        required={true}
        value={formState.confirmPassword}
        placeholder={t("confirmPassword")}
        name="confirmPassword"
        passwordRef={confirmPasswordRef}
        onBlur={confirmPasswordBlurred}
        onChange={formInputChanged} />
    </React.Fragment>
  );

  return <AuthForm 
    submit={submit}
    sizes={props.sizes} 
    children={inputsFragment}
    headerText={t("signupFormHeader")}/>;

  function confirmPasswordBlurred() {
    const customMessage = formState.password !== formState.confirmPassword ?
      passwordsDoNotMatchError : "";

    confirmPasswordRef.current.setCustomValidity(customMessage);
  }

  function formInputChanged(e) {
    const { name, value } = e.target;
    setFormState({...formState, [name]: value});
  }

  function submit(e) {
    e.preventDefault();
  }
}