import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { thunkStatuses } from "../resources/constants/thunkStatuses";
import { reducersNames } from "../resources/constants/reducersNames";
import { authService } from "../services/authentication/authService";

const initialState = {
  status: thunkStatuses.idle,
  errorCode: null,
};

export const signupUser = createAsyncThunk(`${reducersNames.auth}/signupUser`, authService.signup.bind(authService));
export const loginUser = createAsyncThunk(`${reducersNames.auth}/loginUser`, authService.login.bind(authService));

const authSlice = createSlice({
  name: reducersNames.auth,
  initialState,
  reducers: {
    resetAuthStatus: (state, _) => { state.status = thunkStatuses.idle; }
  },
  extraReducers(builder) {
    builder
      .addCase(signupUser.pending, (state) => {
        state.status = thunkStatuses.loading;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.status = thunkStatuses.success;
        state.currentUser = action.payload.data;
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
        state.currentUser = action.payload.data;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = thunkStatuses.failed;
        state.errorCode = action.error.code;
      });
  },
});

export const { resetAuthStatus } = authSlice.actions;
export default authSlice.reducer;