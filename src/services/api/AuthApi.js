import { apiRequestBuilder } from "../../builders/apiRequestBuilder";
import { apiMethods } from "../../resources/constants/apiMethod";
import { apiPaths } from "../../resources/constants/apiPaths";
import { requestExecutor } from "./request/requestExecutor";

export const authApi = {
  signup(newUser) {
    return requestExecutor.execute(apiRequestBuilder
      .withMethod(apiMethods.post)
      .withModel(newUser)
      .build(apiPaths.auth.signup));
  },

  login(userCredentials) {
    return requestExecutor.execute(apiRequestBuilder
      .withMethod(apiMethods.post)
      .withModel(userCredentials)
      .build(apiPaths.auth.login));
  },

  refresh(currentUser) {
    return requestExecutor.execute(apiRequestBuilder
      .withMethod(apiMethods.post)
      .withModel(currentUser)
      .build(apiPaths.auth.refresh));
  },
};