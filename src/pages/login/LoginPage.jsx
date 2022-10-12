import React from "react";
import AuthMainContainer from "../../components/general/auth/AuthMainContainer";
import LoginForm from "../../components/general/login/LoginForm";

export default function LoginPage() {
  const formFactory = (sizes) => <LoginForm sizes={sizes} />;
  
  return <AuthMainContainer formFactory={formFactory}/>;
}