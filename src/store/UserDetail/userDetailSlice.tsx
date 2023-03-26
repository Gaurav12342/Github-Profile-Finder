import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "util/axiosInterceptor";

export interface IInitialState {
  loading: boolean;
  data: any;
  error: string;
}

export const initialState: IInitialState = {
  loading: false,
  data: {},
  error: "",
};

export const getUserDetail = createAsyncThunk(
  "user detail",
  (value: string) => {
    return axios
      .get(value)
      .then((res: any) => {
        if (res?.status === 200) return res?.data;
      })
      .catch((error) => {
        return error;
      });
  }
);

export const userDetailSlice = createSlice({
  name: "user detail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserDetail.pending, (state) => {
      state.loading = true;
      state.data = {};
      state.error = "";
    });

    builder.addCase(getUserDetail.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });

    builder.addCase(getUserDetail.rejected, (state, action: any) => {
      state.loading = false;
      state.data = {};
      state.error = action.error;
    });
  },
});

export const userDetailStatus = (state: any) => state?.userDetail?.loading;
export const userDetails = (state: any) => state?.userDetail?.data;
export const userDetailError = (state: any) => state?.userDetail?.error;

export default userDetailSlice.reducer;
