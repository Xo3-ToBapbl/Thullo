import store from "../../application/ApplicationStore";
import { apiMethods } from "../../resources/constants/ApiMethod";
import { apiPaths } from "../../resources/constants/ApiPaths";
import { eventNames } from "../../resources/constants/EventNames";

const host = process.env.REACT_APP_HOST;
const bearer = "Bearer";
const mockResponseCode = { "x-mock-response-code": 200 };
const contentType = { "Content-Type": "application/json;charset=utf-8" };

export const requestExecutorEventTarget = new EventTarget();
export const requestExecutor = {
  
  async execute({method, path, model, authorize, retry}) {

    const url = `${host}/${path}`;
    const retryCount = retry ?? 1;
    const requestMethod = method ?? apiMethods.get;
    const needAuthorization = authorize ?? true;
    const request = () => fetch(url, getRequestParams(requestMethod, needAuthorization, model));

    try {

      const response = await request();

      if (response.ok) return await response.json();
      if (response.status === 401) await refreshToken();

      return await tryRetry(response, request, retryCount);

    } catch (error) {

      console.log(error);
      return getErrorResponse(error);
    }
  },
}

function getRequestParams(method, authorize, model) {
  return {
    method: method,
    body: model && JSON.stringify(model),
    headers: getHeaders(authorize),
  };
}

function getHeaders(authorize) {
  let headers = { ...contentType, ...mockResponseCode };
  if (authorize) {
    headers[bearer] = store.auth.state.currentUser.accessToken;
  }

  return headers;
}

function getErrorResponse(error) {
  return {
    success: false,
    data: null,
    errors: error,
  };
}

async function tryRetry(response, request, retryCount) {
  if (retryCount === 0) {
    return getErrorResponse(response);
  }

  console.log(`Retry api request...`);
  return await request();
}

async function refreshToken() {
  const refreshToken = store.auth.state.currentUser.refreshToken;
  const url = `${host}${apiPaths.auth.refresh}`;

  console.log(`Refresh access token...`);

  try {
    const response = await fetch(url, {
      method: apiMethods.post,
      body: JSON.stringify({ refreshToken: refreshToken }),
      headers: getHeaders(),
    });

    const refreshedUser = await response.json();  
    const eventToDispatch = new CustomEvent(eventNames.userRefreshed, {detail: refreshedUser});
    requestExecutorEventTarget.dispatchEvent(eventToDispatch);

  } catch (error) {
    console.log(error);
  }
}