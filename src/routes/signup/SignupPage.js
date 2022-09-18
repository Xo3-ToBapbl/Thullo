import React from "react";
import SignupForm from "../../features/signup/SignupForm";
import AuthMainContainer from "../../features/auth/AuthMainContainer";

export default function SignupPage(props) {
  const formFactory = (sizes) => <SignupForm sizes={sizes}/>
  return <AuthMainContainer formFactory={formFactory}/>;
}