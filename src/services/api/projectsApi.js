import ApiRequestBuilder from "../../builders/apiRequestBuilder";
import { apiPaths } from "../../resources/constants/apiPaths";
import { requestExecutor } from "./request/requestExecutor";

export const projectsApi = {
  get(userId) {
    return requestExecutor.execute(new ApiRequestBuilder()
      .withParams({userId: userId})
      .withAuth()
      .build(apiPaths.projects.get));
  },
};