import ApiHeaderBuilder from "../../../builders/apiHeadersBuilder";
import { requestHandler } from "./requestHandler";
import { authService } from "../../authentication/authService";
import { httpStatusCodes } from "../../../resources/constants/httpStatusCodes";

export const requestExecutor = {
  async execute(request, retry=true) {
    const requestInit = getRequestInitFrom(request);
    const result = await requestHandler.handle(requestInit);

    if (result.success){
      return result;
    }
    if (retry && request.authorize && isUnauthorized(result)) {
      const result = await authService.refresh();
      if (result.success) return this.execute(request, false);
    } 
    else if (retry) {
      return this.execute(request, false);
    }

    return new Promise((_, reject) => reject(result.error));
  },
};

function getRequestInitFrom(request) {
  return {
    path: request.path,
    method: request.method,
    params: request.params,
    body: request.model && JSON.stringify(request.model, null, 2),
    headers: getHeaders(request),
  };
};

function getHeaders(request) {
  if (request.headers) {
    return request.headers;
  }

  const headerBuilder = new ApiHeaderBuilder();
  headerBuilder
    .withContentType()
    .withMock(request.mockCode ?? 200);

  return request.authorize ? 
    headerBuilder.withAuthorization(authService.currentUser?.accessToken).build() :  
    headerBuilder.build();
}

function isUnauthorized(result) {
  return result.error?.status === httpStatusCodes.UNAUTHORIZED;
}