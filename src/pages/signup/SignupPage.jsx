import React from "react";
import SignupForm from "../../components/general/signup/SignupForm";
import { useSearchParams } from "react-router-dom";
import AuthMainContainer from "../../components/general/auth/AuthMainContainer";

export default function SignupPage(props) {
  const [ searchParams ] = useSearchParams();
  const formFactory = (sizes) => <SignupForm sizes={sizes} email={searchParams.get("email")}/>
  
  return <AuthMainContainer formFactory={formFactory}/>;
}