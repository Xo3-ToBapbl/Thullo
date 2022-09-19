import { configureStore } from '@reduxjs/toolkit'
import themeReducer from "../features/theming/ThemeListSlice";
import menuReducer from "../features/menu/MenuSlice";
import authReducer from "../features/auth/AuthSlice";

export default configureStore({
  reducer: {
    theme: themeReducer,
    menu: menuReducer,
    auth: authReducer,
  },
})