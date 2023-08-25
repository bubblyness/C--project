import { createSlice } from "@reduxjs/toolkit";

export const intensitySlice = createSlice({
  name: "intensity",
  initialState: {
    value: "", // high
  },
  reducers: {
    setIntensity: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setIntensity } = intensitySlice.actions;

export default intensitySlice.reducer;
