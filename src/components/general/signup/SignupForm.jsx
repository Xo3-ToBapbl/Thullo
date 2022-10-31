import AuthForm from "../auth/AuthForm";
import PasswordInput from "../../shared/inputs/PasswordInput";
import React, { useRef, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { resetAuthStateAction, signupUser } from "../../../slices/authSlice";
import { useDispatch } from "react-redux";
import { thunkStatuses } from "../../../resources/constants/thunkStatuses";
import { FormInput } from "../../shared/inputs/formInputStyled";
import { routeNames } from "../../../resources/constants/routeNames";
import { reducersNames } from "../../../resources/constants/reducersNames";
import { useSelectorBy } from "../../../hooks/useSelector";

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
  const authState = useSelectorBy(reducersNames.auth);
  const [formState, setFormState] = useState(new InitialFormState(props.initialEmail));

  useEffect(() => () => dispatch(resetAuthStateAction()), [dispatch]);

  if (authState.status === thunkStatuses.success) {
    return <Navigate to={routeNames.projects}/>;
  }

  function formInputChanged(e) {
    const { name, value } = e.target;
    setFormState({...formState, [name]: value});
  }

  function submit(e) {
    e.preventDefault();
    dispatch(signupUser(formState));
  }

  return <AuthForm 
    submit={submit}
    sizes={props.sizes} 
    authState={authState}
    headerText={t("signupFormHeader")}
    children={<FormInputs 
      initialEmail={props.email} 
      isLoading={authState.isLoading}
      formState={formState}
      formInputChanged={formInputChanged} />}
    />;
}

function FormInputs(props) {
  const [t] = useTranslation();
  const confirmPasswordRef = useRef();
  const passwordsDoNotMatchError = t("errorPasswordDontMatch");

  function confirmPasswordBlurred() {
    const customMessage = props.formState.password !== props.formState.confirmPassword ?
      passwordsDoNotMatchError : "";

    confirmPasswordRef.current.setCustomValidity(customMessage);
  }

  return(
    <React.Fragment>
      <FormInput 
        required={true}
        value={props.formState.firstName}
        type="text" 
        onChange={props.formInputChanged}
        name="firstName"
        autoComplete="off"
        disabled={props.isLoading}
        placeholder={t("firstName")} />

      <FormInput
        required={true}
        value={props.formState.lastName}
        type="text" 
        name="lastName"
        autoComplete="off"
        onChange={props.formInputChanged}
        disabled={props.isLoading}
        placeholder={t("lastName")} />

      <FormInput
        required={true}
        value={props.formState.email} 
        type="email" 
        placeholder={t("email")}
        name="email"
        autoComplete="off"
        disabled={props.isLoading}
        onChange={props.formInputChanged} />

      <PasswordInput 
        required={true}
        value={props.formState.password}
        placeholder={t("password")}
        name="password"
        disabled={props.isLoading}
        onChange={props.formInputChanged} />

      <PasswordInput
        required={true}
        value={props.formState.confirmPassword}
        placeholder={t("confirmPassword")}
        name="confirmPassword"
        disabled={props.isLoading}
        passwordRef={confirmPasswordRef}
        onBlur={confirmPasswordBlurred}
        onChange={props.formInputChanged} />
    </React.Fragment>
  );
}