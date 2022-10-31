import themeReducer from "../slices/themeListSlice";
import menuReducer from "../slices/menuSlice";
import authReducer from "../slices/authSlice";
import currentUserSlice from "../slices/currentUserSlice";
import { configureStore } from "@reduxjs/toolkit";
import { reducersNames } from "../resources/constants/reducersNames";
import { getProjectReducer, addProjectReducer, addProjectVisibilityReducer } from "../slices/projectsSlice";

export default configureStore({
  reducer: {
    [reducersNames.theme]: themeReducer,
    [reducersNames.menu]: menuReducer,
    [reducersNames.auth]: authReducer,
    [reducersNames.getProjects]: getProjectReducer,
    [reducersNames.addProject]: addProjectReducer,
    [reducersNames.addProjectVisibility]: addProjectVisibilityReducer,
    [reducersNames.user]: currentUserSlice,  
  }
});