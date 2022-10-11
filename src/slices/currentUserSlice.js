import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ReducerStateBuilder } from "../builders/reducerStateBuilder";
import { reducersNames } from "../resources/constants/reducersNames";
import { userApi } from "../services/api/userApi";
import { reducerBuilderUtils } from "../utils/reducerBuilderUtils";

export const getCurrent = createAsyncThunk(`${reducersNames.user}/getCurrent`, userApi.getCurrent);

const currentUserSlice = createSlice({
  name: reducersNames.user,
  initialState: new ReducerStateBuilder().initial().build(),
  extraReducers(builder) {
    reducerBuilderUtils.addCases(builder, [getCurrent]);
  }
});

export default currentUserSlice.reducer;