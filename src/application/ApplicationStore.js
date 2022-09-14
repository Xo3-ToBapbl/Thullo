import { configureStore } from '@reduxjs/toolkit'
import themeReducer from "../features/theming/ThemeListSlice";
import menuReducer from "../features/menu/MenuSlice";

export default configureStore({
  reducer: {
    theme: themeReducer,
    menu: menuReducer,
  },
})