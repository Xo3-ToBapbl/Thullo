import { createSlice } from "@reduxjs/toolkit";
import { reducersNames } from "../resources/constants/reducersNames";

export const menuSlice = createSlice({
  name: reducersNames.menu,
  initialState: false,
  reducers: {
    setIsMenuVisibleAction: (state, action) => {
      if (state !== action.payload) {
        state = action.payload;
      }

      return state;
    }
  }
});

export const { setIsMenuVisibleAction } = menuSlice.actions;
export default menuSlice.reducer;