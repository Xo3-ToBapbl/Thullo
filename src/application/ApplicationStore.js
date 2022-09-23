import { configureStore } from '@reduxjs/toolkit'
import themeReducer from "../slices/themeListSlice";
import menuReducer from "../slices/menuSlice";
import authReducer from "../slices/authSlice";

export default configureStore({
  reducer: {
    theme: themeReducer,
    menu: menuReducer,
    auth: authReducer,
  },
})