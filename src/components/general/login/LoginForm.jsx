import AuthForm from "../auth/AuthForm";
import PasswordInput from "../../shared/inputs/PasswordInput";
import React, { useRef } from "react";
import { Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { thunkStatuses } from "../../../resources/constants/thunkStatuses";
import { loginUser } from "../../../slices/authSlice";
import { FormInput } from "../../shared/inputs/formInputStyled";
import { routeNames } from "../../../resources/constants/routeNames";
import { resetAuthStateAction } from "../../../slices/authSlice";
import { reducersNames } from "../../../resources/constants/reducersNames";
import { useSelectorBy } from "../../../hooks/useSelector";

export default function LoginForm(props) {
  const [t] = useTranslation();
  const dispatch = useDispatch();
  const authState = useSelectorBy(reducersNames.auth);
  const inputRefs = {
    emailRef: useRef(),
    passwordRef: useRef()
  };

  useEffect(() => () =>  dispatch(resetAuthStateAction()), [dispatch]);

  if (authState.status === thunkStatuses.success) {
    return <Navigate to={routeNames.projects}/>;
  }

  function submit(e) {
    e.preventDefault();

    dispatch(loginUser({
      email: inputRefs.emailRef.current.value,
      password: inputRefs.passwordRef.current.value,
    }));
  }

  return <AuthForm 
    submit={submit}
    sizes={props.sizes} 
    authState={authState}
    headerText={t("loginFormHeader")}
    children={<FormInputs 
      isLoading={authState.isLoading}
      inputRefs={inputRefs} />} />;
}

function FormInputs(props) {
  const [t] = useTranslation();

  return(
    <>
      <FormInput
        ref={props.inputRefs.emailRef}
        required={true}
        type="email" 
        placeholder={t("email")}
        name="email"
        autoComplete="off"
        disabled={props.isLoading} />

      <PasswordInput 
        passwordRef={props.inputRefs.passwordRef}
        required={true}
        placeholder={t("password")}
        name="password"
        disabled={props.isLoading} />
    </>
  );
}