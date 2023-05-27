import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "util/axiosInterceptor";

// avatar_url, name, bio, company, location, followers, following
interface IData {
  avatar_url?: string;
  bio?: null;
  company?: null;
  followers?: number;
  following?: number;
  location?: string;
  name?: string;
}
export interface IInitialState {
  loading: boolean;
  data?: IData;
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
        console.log("abc =>", res?.data);
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
    builder.addCase(getUserDetail.pending, (state: IInitialState) => {
      state.loading = true;
      state.data = {};
      state.error = "";
    });

    builder.addCase(getUserDetail.fulfilled, (state: IInitialState, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });

    // builder.addCase(
    //   getUserDetail.rejected,
    //   (state: IInitialState, action: PayloadAction<string>) => {
    //     state.loading = false;
    //     state.data = {};
    //     state.error = action.error;
    //   }
    // );
  },
});

export const userDetailStatus = (state: any) => state?.userDetail?.loading;
export const userDetails = (state: any) => state?.userDetail?.data;
export const userDetailError = (state: any) => state?.userDetail?.error;

export default userDetailSlice.reducer;
