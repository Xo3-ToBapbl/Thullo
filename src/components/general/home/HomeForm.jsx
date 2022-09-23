import * as styled from "./homeFormStyled";
import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { routeNames } from "../../../resources/constants/routeNames";
import { createSearchParams, useNavigate } from "react-router-dom";

export default function HomeForm(props) {
  const [ t ] = useTranslation();
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  function navigateToLoginPage(e, email) {
    e.preventDefault();

    const searchParams = email ? createSearchParams({email: email}).toString() : "";
    navigate({
      pathname: routeNames.signup,
      search: searchParams,
    });
  }

  return (
    <styled.Form onSubmit={(e) => navigateToLoginPage.call(null, e, email)}>
      <styled.EmailInput 
        value={email} 
        type="email"
        placeholder={t("email")} 
        onChange={(e) => setEmail(e.target.value)} />

      <styled.EmailButton 
        type="submit" 
        children={t("emailButtonText")}/>
    </styled.Form>
  );
}