import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { thunkStatuses } from "../resources/constants/thunkStatuses";
import { reducersNames } from "../resources/constants/reducersNames";
import { authApi } from "../services/api/authApi";
import { storageKeys } from "../resources/constants/storageKeys";

export let currentUser = null;

const initialState = {
  currentUser: getCurrentUser(),
  status: thunkStatuses.idle,
  errorCode: null,
};

function getCurrentUser() {
  const currentUserString = localStorage.getItem(storageKeys.currentUser);
  currentUser = currentUserString || JSON.parse(currentUserString);
  return currentUser;
}

function setCurrentUser(state, user) {
  currentUser = user;
  state.currentUser = user;
  localStorage.setItem(storageKeys.currentUser, JSON.stringify(currentUser));
}

export const signupUser = createAsyncThunk(`${reducersNames.auth}/signupUser`, 
  async (newUser) => {
    const response = await authApi.signup(newUser);
    return response;
  });

export const loginUser = createAsyncThunk(`${reducersNames.auth}/loginUser`, 
  async (userCredentials) => {
    const response = await authApi.login(userCredentials);
    return response;
  });

const authSlice = createSlice({
  name: reducersNames.auth,
  initialState,
  reducers: {
    resetAuthStatus: (state, _) => {
      state.status = thunkStatuses.idle;
    },
    refreshCurrentUser: (state, action) => {
      setCurrentUser(state, action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(signupUser.pending, (state) => {
        state.status = thunkStatuses.loading;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.status = thunkStatuses.success;
        setCurrentUser(state, action.payload.data);
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.status = thunkStatuses.failed;
        state.errorCode = action.error.code;
      })

      .addCase(loginUser.pending, (state) => {
        state.status = thunkStatuses.loading;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = thunkStatuses.success;
        setCurrentUser(state, action.payload.data);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = thunkStatuses.failed;
        state.errorCode = action.error.code;
      })
    }
});

export const { resetAuthStatus, refreshCurrentUser } = authSlice.actions;
export default authSlice.reducer;