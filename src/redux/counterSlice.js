import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "tambahan",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
    resetValue: (state) => {
      state.count = 0;
    },
  },
});

export const { increment, decrement, incrementByAmount, resetValue } =
  counterSlice.actions;
export default counterSlice.reducer;
