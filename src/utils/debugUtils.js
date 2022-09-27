import { isDevelopment } from "../resources/constants/env";

export function debug(func) {
  if (isDevelopment) {
    func();
  }
};