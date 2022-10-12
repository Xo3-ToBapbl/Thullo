import ApiRequestBuilder from "../../builders/apiRequestBuilder";
import { apiPaths } from "../../resources/constants/apiPaths";
import { requestExecutor } from "./request/requestExecutor";

export const userApi = {
  getCurrent() {
    return requestExecutor.execute(new ApiRequestBuilder()
      .withAuth()
      .build(apiPaths.user.getCurrent));
  },
};