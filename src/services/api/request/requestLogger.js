import { errorCodes } from "../../../resources/constants/errorCodes";
import { ansiColors } from "../../../utils/ansiColors";
import { debug } from "../../../utils/debugUtils";
import { printError, printColored, printWarning } from "../../../utils/printUtils";

const fullLog = false;
const multitude = "...";

export const requestLogger = {
  logRequest(requestInit) {
    debug(() => {
      const message = `${requestInit.method} "${requestInit.path}" request executing`;
      const fullMessage = fullLog ? 
        message + ((requestInit.body && ` with body:\n${requestInit.body}`) || multitude) : 
        message + multitude;
      
      printColored(fullMessage, ansiColors.cyan);
    });
  },
  
  logSuccessResponse(responseModel, requestInit) {
    debug(() => {
      const message = `${requestInit.method} "${requestInit.path}" request succeeded`;
      const fullMessage = fullLog ? 
        message + ` with response body:\n${JSON.stringify(responseModel, null, 2)}` : 
        message;

      printColored(fullMessage, ansiColors.green);
    });
  },
  
  logErrorResponse(errorResponseModel, statusCode, requestInit) {
    debug(() => {
      const errorCode = errorResponseModel.error?.code ?? errorCodes.errorGeneric;
      const message = errorResponseModel.error?.message;
      const baseErrorMessage = `${requestInit.method} "${requestInit.path}" request failed with status code ${statusCode}\n  error code: "${errorCode}"`;
      const wholeErrorMessage = baseErrorMessage + (`\n  message: "${message}"` || "");

      printColored(wholeErrorMessage, ansiColors.red);
    });
  },

  logWarning(error, requestInit) {
    debug(() => {
      const warningMessage = `${requestInit.method} "${requestInit.path}" request is not completed: "${error.toString()}"`;
      printWarning(warningMessage);
    });
  },
  
  logError(error, requestInit) {
    debug(() => {
      const errorMessage = `${requestInit.method} "${requestInit.path}" request failed with unexpected error: "${error.toString()}"`;
      printError(errorMessage);
    });
  }
};

