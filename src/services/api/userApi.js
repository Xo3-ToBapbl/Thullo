import ApiRequestBuilder from "../../builders/apiRequestBuilder";
import { apiPaths } from "../../resources/constants/apiPaths";
import { requestExecutor } from "./request/requestExecutor";

export const userApi = {
  getCurrent() {
    return requestExecutor.execute(new ApiRequestBuilder()
      .withAuth()
      .withMockCode(400)
      .build(apiPaths.user.getCurrent));
  },
};