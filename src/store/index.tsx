import { configureStore } from "@reduxjs/toolkit";
import userDetailSlice from "./UserDetail/userDetailSlice";

export const store = configureStore({
  reducer: {
    userDetail: userDetailSlice,
  },
});
