import { apiMethods } from "../../resources/constants/ApiMethod";
import { apiPaths } from "../../resources/constants/ApiPaths";
import { requestExecutor } from "./RequestExecutor"

export const authApi = {
  signup(newUser) {
    return requestExecutor.execute({
      method: apiMethods.post,
      path: apiPaths.auth.signup,
      model: newUser,
    });
  },

  login(userCredentials) {
    return requestExecutor.execute({
      method: apiMethods.post,
      path: apiPaths.auth.login,
      model: userCredentials,
    });
  },
}