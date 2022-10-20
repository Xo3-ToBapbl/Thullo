import ApiResultBuilder from "../../../builders/apiResultBuilder";
import { errorCodes } from "../../../resources/constants/errorCodes";
import { requestLogger } from "./requestLogger";

const apiInvalidStatus = 0;
const unexpectedErrorStatus = -1;
const host = process.env.REACT_APP_HOST;

export const requestHandler = {
  async handle(requestInit) {
    try {
      requestLogger.logRequest(requestInit);
      
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
  requestLogger.logSuccessResponse(responseModel, requestInit);
  return new ApiResultBuilder().build(responseModel.data);
}

function getErrorResponseResult(errorResponseModel, status, requestInit) {
  const statusCode = status ?? apiInvalidStatus;
  const errorCode = errorResponseModel.error?.code ?? errorCodes.errorGeneric;
  const message = errorResponseModel.error?.message;

  requestLogger.logErrorResponse(errorResponseModel, statusCode, requestInit);
  return new ApiResultBuilder()
    .withError(errorCode, message, statusCode)
    .build();
}
  
function getErrorResult(error, requestInit) {
  requestLogger.logError(error, requestInit);
  return new ApiResultBuilder()
    .withError(errorCodes.errorThatNeverHappens, error.toString(), unexpectedErrorStatus)
    .build();
}