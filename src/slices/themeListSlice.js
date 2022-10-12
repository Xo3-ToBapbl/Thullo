import { createSlice } from "@reduxjs/toolkit";
import { reducersNames } from "../resources/constants/reducersNames";
import { themeService } from "../services/user-interface/themeService";

export const themeListSlice = createSlice({
  name: reducersNames.theme,
  initialState: {
    name: themeService.theme.name,
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