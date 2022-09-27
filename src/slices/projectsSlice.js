import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ReducerStateBuilder } from "../builders/reducerStateBuilder";
import { reducersNames } from "../resources/constants/reducersNames";
import { projectsApi } from "../services/api/projectsApi";
import { reducerBuilderUtils } from "../utils/reducerBuilderUtils";

export const getProjects = createAsyncThunk(`${reducersNames.projects}/getProjects`, projectsApi.get);

const projectSlice = createSlice({
  name: reducersNames.projects,
  initialState: new ReducerStateBuilder().initial().build(),
  extraReducers(builder) {
    reducerBuilderUtils.addCases(builder, [getProjects]);
    }
});

export default projectSlice.reducer;