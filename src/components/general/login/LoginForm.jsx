import React from "react";
import AuthForm from "../auth/AuthForm";
import PasswordInput from "../../shared/inputs/PasswordInput";
import { Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { thunkStatuses } from "../../../resources/constants/thunkStatuses";
import { loginUser } from "../../../slices/authSlice";
import { FormInput } from "../../shared/inputs/formInputStyled";
import { routeNames } from "../../../resources/constants/routeNames";
import { resetAuthStateAction } from "../../../slices/authSlice";
import { reducersNames } from "../../../resources/constants/reducersNames";
import { useSelectorBy } from "../../../hooks/useSelector";

function InitialFormState(email) {
  this.email = email ?? "";
  this.password = "";
}

export default function LoginForm(props) {
  const [t] = useTranslation();
  const dispatch = useDispatch();
  const authState = useSelectorBy(reducersNames.auth);
  const [formState, setFormState] = useState(new InitialFormState(props.email));

  useEffect(() => () =>  dispatch(resetAuthStateAction()), [dispatch]);

  if (authState.status === thunkStatuses.success) {
    return <Navigate to={routeNames.projects}/>;
  }

  function formInputChanged(e) {
    const { name, value } = e.target;
    setFormState({...formState, [name]: value});
  }

  function submit(e) {
    e.preventDefault();
    dispatch(loginUser(formState));
  }

  return <AuthForm 
    submit={submit}
    sizes={props.sizes} 
    authState={authState}
    headerText={t("loginFormHeader")}
    children={<FormInputs 
      isLoading={authState.isLoading}
      formState={formState}
      formInputChanged={formInputChanged} />}
    />;
}

function FormInputs(props) {
  const [t] = useTranslation();

  return(
    <>
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
    </>
  );
}