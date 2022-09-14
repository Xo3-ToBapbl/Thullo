import { createSlice } from '@reduxjs/toolkit'
import { reducersNames } from "../../resources/constants/ReducersNames"

export const navigationBarSlice = createSlice({
  name: reducersNames.navigationBar,
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

export const { setIsMenuVisible } = navigationBarSlice.actions;
export default navigationBarSlice.reducer;