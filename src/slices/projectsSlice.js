import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ReducerStateBuilder } from "../builders/reducerStateBuilder";
import { reducersNames } from "../resources/constants/reducersNames";
import { thunkStatuses } from "../resources/constants/thunkStatuses";
import { projectsApi } from "../services/api/projectsApi";
import { changeStatus, reducerBuilderUtils } from "../utils/reducerBuilderUtils";

export const getProjects = createAsyncThunk(`${reducersNames.getProjects}/getProjects`, projectsApi.get);
export const addProject = createAsyncThunk(`${reducersNames.getProjects}/addProject`, projectsApi.add);

const getProjectSlice = createSlice({
  name: reducersNames.getProjects,
  initialState: new ReducerStateBuilder().initial().build(),
  reducers: {
    addProject: (state, action) => { 
      changeStatus(state, thunkStatuses.success);
      state.data = state.data?.concat(action.data) ?? [ action.data ];
    },
  },
  extraReducers(builder) {
    reducerBuilderUtils.addCases(builder, [getProjects]);
  }
});

const addProjectSlice = createSlice({
  name: reducersNames.addProject,
  initialState: new ReducerStateBuilder().initial().build(),
  reducers: {
    resetAddProjectState: (state) => { changeStatus(state, thunkStatuses.idle); },
  },
  extraReducers(builder) {
    reducerBuilderUtils.addCases(builder, [addProject]);
  }
});

export const { resetAddProjectState } = addProjectSlice.actions;
export const getProjectReducer = getProjectSlice.reducer;
export const addProjectReducer = addProjectSlice.reducer;