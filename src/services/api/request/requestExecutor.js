import ApiHeaderBuilder from "../../../builders/apiHeadersBuilder";
import { requestHandler } from "./requestHandler";
import { authService } from "../../authentication/authService";
import { httpStatusCodes } from "../../../resources/constants/httpStatusCodes";

export const requestExecutor = {
  async execute(request, retry=true) {
    const requestInit = getRequestInitFrom(request);
    const result = await requestHandler.handle(requestInit);

    if (result.success) return result;
    if (isUnauthorized(result)) await authService.refresh();
    if (retry) return this.execute(request, false);

    return new Promise((_, reject) => reject(result.error));
  },
};

function getRequestInitFrom(request) {
  return {
    path: request.path,
    method: request.method,
    params: request.params,
    body: request.model && JSON.stringify(request.model, null, 2),
    headers: request.authorize ? 
      new ApiHeaderBuilder().withToken(authService.currentUser?.accessToken).build() : 
      new ApiHeaderBuilder().build(),
  };
};

function isUnauthorized(result) {
  return result.error?.status === httpStatusCodes.UNAUTHORIZED;
}