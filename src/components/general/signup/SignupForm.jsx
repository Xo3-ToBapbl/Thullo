import AuthForm from "../auth/AuthForm";
import PasswordInput from "../../shared/inputs/PasswordInput";
import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { signupUser } from "../../../slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { thunkStatuses } from "../../../resources/constants/thunkStatuses";
import { FormInput } from "../../shared/inputs/formInputStyled";

function InitialFormState(email) {
  this.email = email ?? "";
  this.password = "";
  this.confirmPassword = "";
  this.firstName = "";
  this.lastName = "";
}

export default function SignupForm(props) {
  const [t] = useTranslation();
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const isLoading = authState.status === thunkStatuses.loading;
  const formState = useState(new InitialFormState(props.email))[0];

  function submit(e) {
    e.preventDefault();
    dispatch(signupUser(formState));
  }

  return <AuthForm 
    submit={submit}
    sizes={props.sizes} 
    authState={authState}
    headerText={t("signupFormHeader")}
    children={<FormInputs initialEmail={props.email} isLoading={isLoading} />}
    />;
}

function FormInputs(props) {
  const [t] = useTranslation();
  const confirmPasswordRef = useRef();
  const passwordsDoNotMatchError = t("errorPasswordDontMatch");
  const [formState, setFormState] = useState(new InitialFormState(props.initialEmail));

  function confirmPasswordBlurred() {
    const customMessage = formState.password !== formState.confirmPassword ?
      passwordsDoNotMatchError : "";

    confirmPasswordRef.current.setCustomValidity(customMessage);
  }

  function formInputChanged(e) {
    const { name, value } = e.target;
    setFormState({...formState, [name]: value});
  }

  return(
    <React.Fragment>
      <FormInput 
        required={true}
        value={formState.firstName}
        type="text" 
        onChange={formInputChanged}
        name="firstName"
        autoComplete="off"
        disabled={props.isLoading}
        placeholder={t("firstName")} />

      <FormInput
        required={true}
        value={formState.lastName}
        type="text" 
        name="lastName"
        autoComplete="off"
        onChange={formInputChanged}
        disabled={props.isLoading}
        placeholder={t("lastName")} />

      <FormInput
        required={true}
        value={formState.email} 
        type="email" 
        placeholder={t("email")}
        name="email"
        autoComplete="off"
        disabled={props.isLoading}
        onChange={formInputChanged} />

      <PasswordInput 
        required={true}
        value={formState.password}
        placeholder={t("password")}
        name="password"
        disabled={props.isLoading}
        onChange={formInputChanged} />

      <PasswordInput
        required={true}
        value={formState.confirmPassword}
        placeholder={t("confirmPassword")}
        name="confirmPassword"
        disabled={props.isLoading}
        passwordRef={confirmPasswordRef}
        onBlur={confirmPasswordBlurred}
        onChange={formInputChanged} />
    </React.Fragment>
  );
}