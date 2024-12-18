import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counterSlice",
  initialState: {
    counter: 1,
  },
  reducers: {
    increment: (a, action) => {
      a.counter += action.payload;
    },
    decrement: (a, action) => {
      a.counter -= action.payload;
    },
  },
});
const { increment, decrement } = counterSlice.actions;
export { increment, decrement };
