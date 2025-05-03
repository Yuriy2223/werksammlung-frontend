import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../../App.type";
import { fetchProfileApi } from "../../services/userApi";

export const fetchProfile = createAsyncThunk<
  User,
  void,
  { rejectValue: string }
>("/users/myProfile", async (_, { rejectWithValue }) => {
  try {
    return await fetchProfileApi();
  } catch (error) {
    return rejectWithValue(
      error instanceof Error ? error.message : "Failed to fetch user data."
    );
  }
});
