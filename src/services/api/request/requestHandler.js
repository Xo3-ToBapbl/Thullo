import { apiResultBuilder } from "../../../builders/apiResultBuilder";
import { debug } from "../../../resources/constants/env";
import { errorCodes } from "../../../resources/constants/errorCodes";

const apiInvalidStatus = 0;
const unexpectedErrorStatus = -1;
const host = process.env.REACT_APP_HOST;

export const requestHandler = {
  async handle(requestInit) {
    try {
      debug(() => logRequest(requestInit));

      const response = await fetch(getUrl(requestInit), requestInit);
      const responseModel = await response.json();
      return response.ok ? 
        getSuccessResponseResult(responseModel, requestInit) :
        getErrorResponseResult(responseModel, response?.status, requestInit);
        
    } catch (error) {
      return getErrorResult(error, requestInit);
    }
  },
};

function getUrl(requestInit) {
  const urlParams = (requestInit.params && `?${requestInit.params}`) || "";
  return `${host}/${requestInit.path}${urlParams}`;
}

async function getSuccessResponseResult(responseModel, requestInit) {
  const message = `${requestInit.method} "${requestInit.path}" request succeeded`;
  const wholeMessage = message + (` with response body:\n${JSON.stringify(responseModel, null, 2)}` || "");
  console.info(wholeMessage);

  return apiResultBuilder.build(responseModel.data);
}

function getErrorResponseResult(errorResponseModel, status, requestInit) {
  const statusCode = status ?? apiInvalidStatus;
  const errorCode = errorResponseModel.error?.code ?? errorCodes.errorGeneric;
  const message = errorResponseModel.error?.message;

  debug(() => {
    const baseErrorMessage = `${requestInit.method} "${requestInit.path}" request failed with status code ${statusCode}\n  error code: "${errorCode}"`;
    const wholeErrorMessage = baseErrorMessage + (`\n  message: "${message}"` || "");
    console.error(wholeErrorMessage);
  });

  return apiResultBuilder
    .withError(errorCode, message, statusCode)
    .build();
}
  
function getErrorResult(error, requestInit) {
  debug(() => {
    const wholeErrorMessage = `${requestInit.method} "${requestInit.path}" request failed with unexpected error: "${error.toString()}"`;
    console.error(wholeErrorMessage);
  });
  
  return apiResultBuilder
    .withError(errorCodes.errorThatNeverHappens, error.toString(), unexpectedErrorStatus)
    .build();
}

function logRequest(requestInit) {
  const message = `${requestInit.method} "${requestInit.path}" request executing`;
  const body = (requestInit.body && ` with body:\n${requestInit.body}`) || "...";
  console.log(message + body);
}