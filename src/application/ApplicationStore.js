import themeReducer from "../slices/themeListSlice";
import menuReducer from "../slices/menuSlice";
import authReducer from "../slices/authSlice";
import projectsReducer from "../slices/projectsSlice";
import currentUserSlice from "../slices/currentUserSlice";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    theme: themeReducer,
    menu: menuReducer,
    auth: authReducer,
    projects: projectsReducer,
    user: currentUserSlice,
  },
});