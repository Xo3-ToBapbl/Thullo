import { storageKeys } from "../../resources/constants/storageKeys";
import { authApi } from "../api/authApi";

function getCurrentUser() {
  const currentUserString = localStorage.getItem(storageKeys.currentUser);
  return currentUserString || JSON.parse(currentUserString);
}

async function execute(request, authService) {
  const result = await request();
  return result.success ? (() => { 
    authService.currentUser = result.data;
    localStorage.setItem(storageKeys.currentUser, JSON.stringify(result.data));
    return result;
  })() : result;
}

export const authService = {
  currentUser: getCurrentUser(),

  signup(newUser) { 
    return execute(authApi.signup.bind(null,newUser), this); 
  },

  login (userCredentials) {
    return execute(authApi.login.bind(null, userCredentials), this);
  },

  refresh () {
    return execute(authApi.refresh.bind(null, this.currentUser), this);
  },
};