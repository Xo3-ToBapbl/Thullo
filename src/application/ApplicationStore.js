import { configureStore } from '@reduxjs/toolkit'
import themeReducer from "../features/theming/ThemeListSlice";
import navigationBarReducer from "../features/navigation/NavigationBarSlice";

export default configureStore({
  reducer: {
    theme: themeReducer,
    navigationBar: navigationBarReducer,
  },
})