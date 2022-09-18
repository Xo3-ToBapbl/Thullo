import React from "react";
import LoginForm from "../../features/login/LoginForm";
import AuthMainContainer from "../../features/auth/AuthMainContainer";

export default function LoginPage(props) {
  const formFactory = (sizes) => <LoginForm sizes={sizes} />
  
  return <AuthMainContainer formFactory={formFactory}/>;
}