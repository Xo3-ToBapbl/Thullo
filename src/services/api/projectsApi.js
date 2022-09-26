import { apiRequestBuilder } from "../../builders/apiRequestBuilder";
import { apiPaths } from "../../resources/constants/apiPaths";
import { requestExecutor } from "./request/requestExecutor";

export const projectsApi = {
  get(userId) {
    return requestExecutor.execute(apiRequestBuilder
      .withParams({userId: userId})
      .withAuth()
      .build(apiPaths.projects.get));
  },
};