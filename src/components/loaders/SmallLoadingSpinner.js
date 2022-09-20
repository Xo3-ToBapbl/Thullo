import "./SmallLoadingSpinner.css";
import styled from "styled-components";

const LoadingSpinner = styled.div`
  display: inline-block;
  width: ${(props) => props.size ?? 3}rem;
  height: ${(props) => props.size ?? 3}rem;
  border: 3px solid rgba(255,255,255,.3);
  border-radius: 50%;
  border-top-color: ${(props) => props.theme.onSuccess};
  animation: spin 1s ease-in-out infinite;
`;

export default function SmallLoadingSpinner(props) {
  return <LoadingSpinner size={props.size}/>;
}