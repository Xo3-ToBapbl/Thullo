import React from "react";
import SignupForm from "../../features/signup/SignupForm";
import AuthMainContainer from "../../features/auth/AuthMainContainer";
import { useSearchParams } from "react-router-dom";

export default function SignupPage(props) {
  const [ searchParams ] = useSearchParams();
  const formFactory = (sizes) => <SignupForm sizes={sizes} email={searchParams.get("email")}/>
  
  return <AuthMainContainer formFactory={formFactory}/>;
}