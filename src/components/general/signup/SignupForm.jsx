import AuthForm from "../auth/AuthForm";
import PasswordInput from "../../shared/inputs/PasswordInput";
import React, { useRef, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { resetAuthStateAction, signupUser } from "../../../slices/authSlice";
import { useDispatch } from "react-redux";
import { thunkStatuses } from "../../../resources/constants/thunkStatuses";
import { FormInput } from "../../shared/inputs/formInputStyled";
import { routeNames } from "../../../resources/constants/routeNames";
import { reducersNames } from "../../../resources/constants/reducersNames";
import { useSelectorBy } from "../../../hooks/useSelector";

export default function SignupForm(props) {
  const [t] = useTranslation();
  const dispatch = useDispatch();
  const authState = useSelectorBy(reducersNames.auth);
  const inputRefs = {
    emailRef: useRef(),
    passwordRef: useRef(),
    confirmPasswordRef: useRef(),
    firstNameRef: useRef(),
    lastNameRef: useRef(),
  };

  useEffect(() => () => dispatch(resetAuthStateAction()), [dispatch]);

  if (authState.status === thunkStatuses.success) {
    return <Navigate to={routeNames.projects}/>;
  }

  function submit(e) {
    e.preventDefault();
    dispatch(signupUser({
      email: inputRefs.emailRef.current.value,
      password: inputRefs.passwordRef.current.value,
      confirmPassword: inputRefs.confirmPasswordRef.current.value,
      firstName: inputRefs.firstNameRef.current.value,
      lastName: inputRefs.lastNameRef.current.value,
    }));
  }

  return <AuthForm 
    submit={submit}
    sizes={props.sizes} 
    authState={authState}
    headerText={t("signupFormHeader")}
    children={<FormInputs 
      initialEmail={props.email} 
      isLoading={authState.isLoading}
      inputRefs={inputRefs} />} />;
}

function FormInputs(props) {
  const [t] = useTranslation();
  const passwordsDoNotMatchError = t("errorPasswordDontMatch");
  const inputRefs = props.inputRefs;

  function confirmPasswordBlurred() {
    const customMessage = 
      inputRefs.confirmPasswordRef.current.value !== 
      inputRefs.passwordRef.current.value ?
        passwordsDoNotMatchError : "";

      inputRefs.confirmPasswordRef.current.setCustomValidity(customMessage);
  }

  return(
    <React.Fragment>
      <FormInput 
        ref={inputRefs.firstNameRef}
        required={true}
        type="text" 
        name="firstName"
        autoComplete="off"
        disabled={props.isLoading}
        placeholder={t("firstName")} />

      <FormInput
        ref={inputRefs.lastNameRef}
        required={true}
        type="text" 
        name="lastName"
        autoComplete="off"
        disabled={props.isLoading}
        placeholder={t("lastName")} />

      <FormInput
        ref={inputRefs.emailRef}
        required={true}
        defaultValue={props.initialEmail} 
        type="email" 
        placeholder={t("email")}
        name="email"
        autoComplete="off"
        disabled={props.isLoading} />

      <PasswordInput 
        passwordRef={inputRefs.passwordRef}
        required={true}
        placeholder={t("password")}
        name="password"
        disabled={props.isLoading} />

      <PasswordInput
        required={true}
        placeholder={t("confirmPassword")}
        name="confirmPassword"
        disabled={props.isLoading}
        passwordRef={inputRefs.confirmPasswordRef}
        onBlur={confirmPasswordBlurred} />
    </React.Fragment>
  );
}