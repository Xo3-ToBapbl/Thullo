import themeReducer from "../slices/themeListSlice";
import menuReducer from "../slices/menuSlice";
import authReducer from "../slices/authSlice";
import currentUserSlice from "../slices/currentUserSlice";
import { configureStore } from "@reduxjs/toolkit";
import { getProjectReducer, addProjectReducer, setAddProjectVisibilityReducer } from "../slices/projectsSlice";

export default configureStore({
  reducer: {
    theme: themeReducer,
    menu: menuReducer,
    auth: authReducer,
    getProjects: getProjectReducer,
    addProject: addProjectReducer,
    showAddProject: setAddProjectVisibilityReducer,
    user: currentUserSlice,
  },
});