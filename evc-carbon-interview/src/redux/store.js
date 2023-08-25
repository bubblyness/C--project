import { configureStore } from "@reduxjs/toolkit";
import intensityReducer from "../redux/intensitySlice";

export default configureStore({
  reducer: {
    intensity: intensityReducer,
  },
});
