import styled from "styled-components";
import ApplicationLogo from "../logos/ApplicationLogo";
import LoadingSpinner from "./LoadingSpinner";
import { useTranslation } from "react-i18next";

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${6}rem;
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.primary}
`;

export default function PageLoader() {
  const [ t ] = useTranslation();
  return (
    <LoaderContainer>
      <ApplicationLogo style={{transform: "scale(2)"}} title={t("thullo")}/>
      <LoadingSpinner size={4} />
    </LoaderContainer>
  );
}