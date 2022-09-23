import { createSlice } from '@reduxjs/toolkit'
import { reducersNames } from "../resources/constants/reducersNames"

export const menuSlice = createSlice({
  name: reducersNames.menu,
  initialState: {
    isMenuVisible: false,
  },
  reducers: {
    setIsMenuVisible: (state, action) => {
      if (state.isMenuVisible !== action.payload) {
        state.isMenuVisible = action.payload;
      }
    }
  }
});

export const { setIsMenuVisible } = menuSlice.actions;
export default menuSlice.reducer;