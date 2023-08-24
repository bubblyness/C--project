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

// Action creators are generated for each case reducer function
export const { setIntensity } = intensitySlice.actions;

export default intensitySlice.reducer;
