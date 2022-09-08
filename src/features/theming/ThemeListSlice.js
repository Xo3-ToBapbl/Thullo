import { createSlice } from '@reduxjs/toolkit'
import { reducersNames } from "../../resources/constants/ReducersNames"
import { themeNames } from '../../resources/constants/ThemeNames';
import { themeService } from '../../services/user-interface/ThemeService';

export const themeListSlice = createSlice({
  name: reducersNames.theme,
  initialState: {
    name: themeNames.light,
    value: themeService.theme,
  },
  reducers: {
    setTheme: (state, action) => {
      if (state.name !== action.payload) {
        themeService.setCurrent(action.payload);

        state.name = action.payload;
        state.value = themeService.theme;
      }
    }
  }
});

export const { setTheme } = themeListSlice.actions;
export default themeListSlice.reducer;