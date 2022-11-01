import * as styled from "./homeFormStyled";
import React, { useRef } from "react";
import { useTranslation } from 'react-i18next';
import { routeNames } from "../../../resources/constants/routeNames";
import { createSearchParams, useNavigate } from "react-router-dom";

export default function HomeEmailForm() {
  const [ t ] = useTranslation();
  const navigate = useNavigate();
  const emailRef = useRef();

  function navigateToLoginPage(e, email) {
    e.preventDefault();

    const searchParams = email ? createSearchParams({email: email}).toString() : "";
    navigate({
      pathname: routeNames.signup,
      search: searchParams,
    });
  }

  return (
    <styled.Form onSubmit={(e) => navigateToLoginPage.call(null, e, emailRef.current.value)}>
      <styled.EmailInput 
        ref={emailRef}
        type="email"
        placeholder={t("email")} />

      <styled.EmailButton 
        type="submit" 
        children={t("emailButtonText")}/>
    </styled.Form>
  );
}