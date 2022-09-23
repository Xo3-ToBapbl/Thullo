import { apiMethods } from "../../resources/constants/apiMethod";
import { apiPaths } from "../../resources/constants/apiPaths";
import { requestExecutor } from "./requestExecutor"

export const authApi = {
  signup(newUser) {
    return requestExecutor.execute({
      method: apiMethods.post,
      path: apiPaths.auth.signup,
      model: newUser,
      authorize: false,
    });
  },

  login(userCredentials) {
    return requestExecutor.execute({
      method: apiMethods.post,
      path: apiPaths.auth.login,
      model: userCredentials,
      authorize: false,
    });
  },
}