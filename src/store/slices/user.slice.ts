import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type UserType = {
  id: string;
  email: string;
};
export interface User {
  user: UserType | null;
  token: string | null;
}

const getUser = JSON.parse(localStorage.getItem("user") || "null");
const getToken = JSON.parse(localStorage.getItem("token") || "null");
const initialState: User = {
  user: getUser,
  token: getToken,
};

const { actions, reducer } = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, { payload }: PayloadAction<User>) {
      if (payload.user !== null) {
        state.user = payload.user;
        state.token = payload.token;
        localStorage.setItem("user", JSON.stringify(payload.user));
        localStorage.setItem("token", JSON.stringify(payload.token));
      } else {
        state.user = payload.user;
        state.token = payload.token;
        localStorage.removeItem("user");
        localStorage.removeItem("token");
      }
    },
  },
});

export const { setUser } = actions;
export const userReducer = reducer;
