import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { reducersNames } from "../resources/constants/reducersNames";
import { authService } from "../services/authentication/authService";
import { changeStatus, reducerBuilderUtils } from "../utils/reducerBuilderUtils";
import { ReducerStateBuilder } from "../builders/reducerStateBuilder";
import { thunkStatuses } from "../resources/constants/thunkStatuses";

export const signupUser = createAsyncThunk(`${reducersNames.auth}/signupUser`, authService.signup.bind(authService));
export const loginUser = createAsyncThunk(`${reducersNames.auth}/loginUser`, authService.login.bind(authService));

const initialState = new ReducerStateBuilder().initial().build();
const authSlice = createSlice({
  name: reducersNames.auth,
  initialState: initialState,
  reducers: {
    resetAuthStateAction: (state) => { changeStatus(state, thunkStatuses.idle); },
  },
  extraReducers(builder) {
    reducerBuilderUtils.addCases(builder, [signupUser, loginUser]);
  },
});

export const { resetAuthStateAction } = authSlice.actions;
export default authSlice.reducer;