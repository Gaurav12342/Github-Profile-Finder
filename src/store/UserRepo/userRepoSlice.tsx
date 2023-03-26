import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "util/axiosInterceptor";

export interface IInitialState {
  loading: boolean;
  data: any;
  error: string;
}

export const initialState: IInitialState = {
  loading: false,
  data: [],
  error: "",
};

export const getUserRepos = createAsyncThunk(
  "user repos",
  (userName: string) => {
    return axios
      .get(`${userName}/repos`)
      .then((res: any) => {
        if (res?.status === 200) return res?.data;
      })
      .catch((error) => {
        return error;
      });
  }
);

export const userReposSlice = createSlice({
  name: "user repos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserRepos.pending, (state) => {
      state.loading = true;
      state.data = [];
      state.error = "";
    });

    builder.addCase(getUserRepos.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });

    builder.addCase(getUserRepos.rejected, (state, action: any) => {
      state.loading = false;
      state.data = [];
      state.error = action.error;
    });
  },
});

export const userRepostatus = (state: any) => state?.userRepos?.loading;
export const userRepos = (state: any) => state?.userRepos?.data;
export const userReposError = (state: any) => state?.userRepos?.error;

export default userReposSlice.reducer;
