import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { userReducer } from "./slices/user.slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
