import "./loadingSpinner.css";
import styled from "styled-components";

const LoadingSpinnerStyled = styled.div`
  display: inline-block;
  width: ${(props) => props.size ?? 3}rem;
  height: ${(props) => props.size ?? 3}rem;
  border: 3px solid ${(props) => props.theme.onPrimary + "30"};
  border-radius: 50%;
  border-top-color: ${(props) => props.theme.onPrimary};
  animation: spin 1s ease-in-out infinite;
`;

export default function LoadingSpinner(props) {
  return <LoadingSpinnerStyled size={props.size}/>;
}