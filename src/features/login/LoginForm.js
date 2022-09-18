import React from "react";
import AuthForm from "../auth/AuthForm";
import PasswordInput from "../../components/inputs/PasswordInput";
import * as styled from "../auth/AuthFormStyled";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function InitialFormState(email) {
  this.email = email ?? "";
  this.password = "";
}

export default function LoginForm(props) {
  const [t] = useTranslation();
  const [formState, setFormState] = useState(new InitialFormState(props.email));

  const inputsFragment = (
    <React.Fragment>
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
    </React.Fragment>
  );

  return <AuthForm 
    submit={submit}
    sizes={props.sizes} 
    children={inputsFragment}
    headerText={t("loginFormHeader")}/>;

  function formInputChanged(e) {
    const { name, value } = e.target;
    setFormState({...formState, [name]: value});
  }
  
  function submit(e) {
    e.preventDefault();
  }
}