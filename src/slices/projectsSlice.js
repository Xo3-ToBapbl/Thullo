import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ReducerStateBuilder } from "../builders/reducerStateBuilder";
import { reducersNames } from "../resources/constants/reducersNames";
import { thunkStatuses } from "../resources/constants/thunkStatuses";
import { projectsApi } from "../services/api/projectsApi";
import { changeStatus, reducerBuilderUtils } from "../utils/reducerBuilderUtils";

export const getProjects = createAsyncThunk(`${reducersNames.getProjects}/getProjects`, projectsApi.get);
export const addProject = createAsyncThunk(`${reducersNames.addProject}/addProject`, projectsApi.add);

const getProjectSlice = createSlice({
  name: reducersNames.getProjects,
  initialState: new ReducerStateBuilder().initial().build(),
  reducers: {
    addProjectAction: (state, action) => { 
      changeStatus(state, thunkStatuses.success);
      state.data = state.data?.concat(action.payload) ?? [ action.payload ];
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
    resetAddProjectState: (state) => { 
      changeStatus(state, thunkStatuses.idle);
      state.data = null;
    },
  },
  extraReducers(builder) {
    reducerBuilderUtils.addCases(builder, [addProject]);
  }
});

const addProjectVisibilitySlice = createSlice({
  name: reducersNames.addProjectVisibility,
  initialState: false,
  reducers: {
    setAddProjectVisibilityAction: (state, action) => {
      if (state !== action.payload) {
        state = action.payload;
      }
      return state;
    }
  }
});

export const { addProjectAction } = getProjectSlice.actions;
export const getProjectReducer = getProjectSlice.reducer;

export const { resetAddProjectState } = addProjectSlice.actions;
export const addProjectReducer = addProjectSlice.reducer;

export const { setAddProjectVisibilityAction } = addProjectVisibilitySlice.actions;
export const addProjectVisibilityReducer = addProjectVisibilitySlice.reducer;