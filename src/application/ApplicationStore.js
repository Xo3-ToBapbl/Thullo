import { configureStore } from '@reduxjs/toolkit'
import themeReducer from "../features/theming/ThemeListSlice";

export default configureStore({
  reducer: {
    theme: themeReducer,
  },
})