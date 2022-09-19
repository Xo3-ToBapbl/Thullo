import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { actionStatuses as thunkStatuses } from "../../resources/constants/ThunkStatuses";
import { reducersNames } from "../../resources/constants/ReducersNames";
import { authApi } from "../../services/api/AuthApi";

export const createNewUser = createAsyncThunk(`${reducersNames.auth}/createNewUser`, 
  async () => {
    const response = await authApi.signup();
    return response;
  });

const initialState = {
  currentUser: null,
  status: thunkStatuses.idle,
  error: null,
}

const authSlice = createSlice({
  name: reducersNames.auth,
  initialState,
  extraReducers(builder) {
    builder
      .addCase(createNewUser.pending, (state) => {
        state.status = thunkStatuses.loading;
      })
      .addCase(createNewUser.fulfilled, (state, action) => {
        state.status = thunkStatuses.success;
        state.currentUser = action.payload;
      })
      .addCase(createNewUser.rejected, (state, action) => {
        state.status = thunkStatuses.failed;
        state.error = action.error;
      })
  }
});

export default authSlice.reducer;