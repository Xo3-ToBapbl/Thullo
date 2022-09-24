import { apiMethods } from "../../resources/constants/apiMethod";
import { apiPaths } from "../../resources/constants/apiPaths";
import { eventNames } from "../../resources/constants/eventNames";
import { currentUser } from "../../slices/authSlice";

const bearer = "Bearer";
const host = process.env.REACT_APP_HOST;
const mockResponseCode = { "x-mock-response-code": 200 };
const contentType = { "Content-Type": "application/json;charset=utf-8" };

export const requestExecutorEventTarget = new EventTarget();
export const requestExecutor = {
  
  async execute({method, path, model, authorize, retry}) {

    const url = `${host}/${path}`;
    const retryCount = retry ?? 1;
    const requestMethod = method ?? apiMethods.get;
    const needAuthorization = authorize ?? true;
    const requestParams = getRequestParams(requestMethod, needAuthorization, model);

    try {

      const response = await fetch(url, requestParams);
      
      if (response.ok) return await response.json();
      if (response.status === 401) await refreshToken();  
      if (retryCount !== 0) return this.execute({...arguments[0], retry: 0});
      
      const errorResponse = await response.json();
      return new Promise((_, reject) => reject(errorResponse.errors))

    } catch (error) {

      console.log(error);
      throw error;
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
    headers[bearer] = currentUser.accessToken;
  }

  return headers;
}

async function refreshToken() {
  const refreshToken = currentUser.refreshToken;
  const url = `${host}${apiPaths.auth.refresh}`;

  try {
    const response = await fetch(url, {
      method: apiMethods.post,
      body: JSON.stringify({ refreshToken: refreshToken }),
      headers: getHeaders(),
    });

    if (response.ok) {
      const successResponse = await response.json();  
      const eventToDispatch = new CustomEvent(eventNames.userRefreshed, {detail: successResponse.data});
      requestExecutorEventTarget.dispatchEvent(eventToDispatch);
    } else {
      const errorResponse = await response.json();
      console.log(errorResponse.errors.message)
    }

  } catch (error) {
    console.log(error);
  }
}