import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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

export const getUserDetail = createAsyncThunk("user detail", () => {
    debugger
  return axios
    .get("https://api.github.com/users/gaurav12342/repos", {
      headers: {
        Authorization:
          "Bearer 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",
      },
    })
    .then((res: any) => {
      return res;
    })
    .catch((error) => {
      console.log("Error =>", error);
    });
});

export const userDetailSlice = createSlice({
  name: "Github login user detail",
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

export const userDetailStatus = (state: any) => state.userDetail.loading;
export const userDetails = (state: any) => state.userDetail.data;
export const userDetailError = (state: any) => state.userDetail.error;

export default userDetailSlice.reducer;
