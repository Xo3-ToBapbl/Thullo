import React from "react";
import AuthForm from "../auth/AuthForm";
import PasswordInput from "../../shared/inputs/PasswordInput";
import * as styled from "../auth/authFormStyled";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkStatuses } from "../../../resources/constants/thunkStatuses";
import { loginUser } from "../../../slices/authSlice";

function InitialFormState(email) {
  this.email = email ?? "";
  this.password = "";
}

export default function LoginForm(props) {
  const [t] = useTranslation();
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const isLoading = authState.status === thunkStatuses.loading;
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
        disabled={isLoading}
        onChange={formInputChanged} />

      <PasswordInput 
        required={true}
        value={formState.password}
        placeholder={t("password")}
        name="password"
        disabled={isLoading}
        onChange={formInputChanged} />
    </React.Fragment>
  );

  return <AuthForm 
    submit={submit}
    sizes={props.sizes} 
    children={inputsFragment}
    authState={authState}
    headerText={t("loginFormHeader")}/>;

  function formInputChanged(e) {
    const { name, value } = e.target;
    setFormState({...formState, [name]: value});
  }
  
  function submit(e) {
    e.preventDefault();
    dispatch(loginUser(formState));
  }
}