import React from "react";
import AuthForm from "../auth/AuthForm";
import PasswordInput from "../../shared/inputs/PasswordInput";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkStatuses } from "../../../resources/constants/thunkStatuses";
import { loginUser } from "../../../slices/authSlice";
import { FormInput } from "../../shared/inputs/formInputStyled";
import { useNavigate } from "react-router-dom";
import { routeNames } from "../../../resources/constants/routeNames";
import { resetAuthStatus } from "../../../slices/authSlice";

function InitialFormState(email) {
  this.email = email ?? "";
  this.password = "";
}

export default function LoginForm(props) {
  const [t] = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authState = useSelector((state) => state.auth);
  const isLoading = authState.status === thunkStatuses.loading;
  const formState = useState(new InitialFormState(props.email))[0];

  if (authState.status === thunkStatuses.success) {
    navigate(routeNames.projects);
    dispatch(resetAuthStatus());
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
    children={<FormInputs isLoading={isLoading} />}
    />;
}

function FormInputs(props) {
  const [t] = useTranslation();
  const [formState, setFormState] = useState(new InitialFormState(props.email));

  function formInputChanged(e) {
    const { name, value } = e.target;
    setFormState({...formState, [name]: value});
  }

  return(
    <React.Fragment>
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
    </React.Fragment>
  );
}