import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { thunkStatuses } from "../resources/constants/thunkStatuses";
import { reducersNames } from "../resources/constants/reducersNames";
import { projectsApi } from "../services/api/projectsApi";

const initialState = {
  projects: null,
};

export const getProjects = createAsyncThunk(`${reducersNames.projects}/getProjects`, projectsApi.get);

const projectSlice = createSlice({
  name: reducersNames.projects,
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getProjects.pending, (state) => {
        state.status = thunkStatuses.loading;
      })
      .addCase(getProjects.fulfilled, (state, action) => {
        state.status = thunkStatuses.success;
        state.projects = action.payload.data;
      })
      .addCase(getProjects.rejected, (state, action) => {
        state.status = thunkStatuses.failed;
        state.errorCode = action.error.code;
      });
    }
});

export default projectSlice.reducer;