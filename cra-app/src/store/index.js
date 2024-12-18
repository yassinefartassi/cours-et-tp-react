import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counter/counter-slice";
export const store = configureStore({
  reducer: {
    COUNT: counterSlice.reducer,
  },
});
