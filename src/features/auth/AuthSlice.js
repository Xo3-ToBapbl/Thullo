import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { thunkStatuses } from "../../resources/constants/ThunkStatuses";
import { reducersNames } from "../../resources/constants/ReducersNames";
import { authApi } from "../../services/api/AuthApi";
import { storageKeys } from "../../resources/constants/StorageKeys";

const initialState = {
  currentUser: localStorage.getItem(storageKeys.currentUser),
  status: thunkStatuses.idle,
  error: null,
}

export const signupUser = createAsyncThunk(`${reducersNames.auth}/signupUser`, 
  async () => {
    const response = await authApi.signup();
    return response;
  });

  export const loginUser = createAsyncThunk(`${reducersNames.auth}/loginUser`, 
  async () => {
    const response = await authApi.login();
    return response;
  });

const authSlice = createSlice({
  name: reducersNames.auth,
  initialState,
  extraReducers(builder) {
    builder
      .addCase(signupUser.pending, (state) => {
        state.status = thunkStatuses.loading;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.status = thunkStatuses.success;
        state.currentUser = action.payload;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.status = thunkStatuses.failed;
        state.error = action.error;
      })

      .addCase(loginUser.pending, (state) => {
        state.status = thunkStatuses.loading;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = thunkStatuses.success;
        state.currentUser = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = thunkStatuses.failed;
        state.error = action.error;
      })
  }
});

export default authSlice.reducer;