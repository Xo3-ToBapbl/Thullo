import ApiRequestBuilder from "../../builders/apiRequestBuilder";
import { apiMethods } from "../../resources/constants/apiMethod";
import { apiPaths } from "../../resources/constants/apiPaths";
import { requestExecutor } from "./request/requestExecutor";

export const projectsApi = {
  get(userId) {
    return requestExecutor.execute(new ApiRequestBuilder()
      .withParams({userId: userId})
      .withAuth()
      .build(apiPaths.projects.get));
  },

  add(newProject, { signal }) {
    return requestExecutor.execute(new ApiRequestBuilder()
      .withMethod(apiMethods.post)
      .withModel(newProject)
      .withAuth()
      .withCancellation(signal)
      .withMockCode(400)
      .build(apiPaths.projects.add));
  }
};