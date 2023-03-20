import { configureStore } from "@reduxjs/toolkit";
import userDetailSlice from "./UserDetail/userDetailSlice";
import userReposSlice from "./UserRepo/userRepoSlice";

export const store = configureStore({
  reducer: {
    userDetail: userDetailSlice,
    userRepos: userReposSlice,
  },
});
