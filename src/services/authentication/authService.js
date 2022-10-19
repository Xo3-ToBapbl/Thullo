import ApiResultBuilder from "../../builders/apiResultBuilder";
import { errorCodes } from "../../resources/constants/errorCodes";
import { eventNames } from "../../resources/constants/eventNames";
import { storageKeys } from "../../resources/constants/storageKeys";
import { authenticationApi } from "../api/authenticationApi";

const refreshError = "Refresh in impossible. There is no current user. Authentication is required.";
const eventTarget = new EventTarget();

export const authService = {
  eventTarget: eventTarget,
  currentUser: getCurrentUser(),

  signup(newUser) { 
    return execute(authenticationApi.signup.bind(null,newUser), this); 
  },

  login (userCredentials) {
    return execute(authenticationApi.login.bind(null, userCredentials), this);
  },

  async refresh () {

    let result = new ApiResultBuilder()
      .withError(errorCodes.errorCantRefreshToken, refreshError, -1)
      .build();

    try {
      if (this.currentUser) result = await execute(authenticationApi.refresh.bind(null, this.currentUser), this);
      if (result.success) return result;
      
      handleFailedRefreshResult(this);
      return result;

    } catch (error) {

      handleFailedRefreshResult(this);
      return new ApiResultBuilder()
        .withError(errorCodes.errorGeneric, error.message, -1)
        .build();
    }
  },
};

function getCurrentUser() {
  const currentUserString = localStorage.getItem(storageKeys.currentUser);
  return currentUserString && JSON.parse(currentUserString);
}

async function execute(request, authService) {
  const result = await request();
  setCurrentUser(result.data, authService);
  return result;
}

function setCurrentUser(currentUser, authService) {
  authService.currentUser = currentUser;
  currentUser ? 
    localStorage.setItem(storageKeys.currentUser, JSON.stringify(currentUser)) :
    localStorage.removeItem(storageKeys.currentUser);
}

function handleFailedRefreshResult(authService) {
  setCurrentUser(null, authService);
  eventTarget.dispatchEvent(new CustomEvent(eventNames.authIsRequired));
}