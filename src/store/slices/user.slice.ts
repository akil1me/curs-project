import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
  name: "user",
  initialState: {
    user: [],
  },
  reducers: {},
});

export const {} = actions;
export const userReducer = reducer;
