import { useSelector } from "react-redux";

export function useSelectorBy(reducerName) {
  return useSelector((state) => state[reducerName]);
}