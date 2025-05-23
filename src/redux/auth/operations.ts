import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  currentUserApi,
  LoginData,
  loginUserApi,
  logoutApi,
  refreshTokenApi,
  RegisterData,
  registerUserApi,
  requestPasswordResetApi,
  RequestResetData,
  resetPasswordApi,
  ResetPasswordData,
} from "../../services/authApi";
import { AxiosError } from "axios";

function extractErrorMessage(
  error: unknown,
  fallback = "Something went wrong"
): string {
  if (error instanceof AxiosError) {
    return error.response?.data?.message || fallback;
  }
  return fallback;
}

export const registerUser = createAsyncThunk(
  "auth/register",
  async (data: RegisterData, { rejectWithValue }) => {
    try {
      const { user } = await registerUserApi(data);
      return user;
    } catch (error) {
      return rejectWithValue(extractErrorMessage(error, "Registration failed"));
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (data: LoginData, { rejectWithValue }) => {
    try {
      const { user } = await loginUserApi(data);
      return user;
    } catch (error) {
      return rejectWithValue(extractErrorMessage(error, "Login failed"));
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await logoutApi();
    } catch (error) {
      return rejectWithValue(extractErrorMessage(error, "Logout failed"));
    }
  }
);

export const refreshToken = createAsyncThunk(
  "auth/refresh",
  async (_, { rejectWithValue }) => {
    try {
      await refreshTokenApi();
      const user = await currentUserApi();
      return user;
    } catch {
      return rejectWithValue("Session expired");
    }
  }
);

export const requestPasswordReset = createAsyncThunk(
  "auth/requestReset",
  async (data: RequestResetData, { rejectWithValue }) => {
    try {
      const { message } = await requestPasswordResetApi(data);
      return message;
    } catch (error) {
      return rejectWithValue(extractErrorMessage(error, "Request failed"));
    }
  }
);

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (data: ResetPasswordData, { rejectWithValue }) => {
    try {
      const { message } = await resetPasswordApi(data);
      return message;
    } catch (error) {
      return rejectWithValue(extractErrorMessage(error, "Reset failed"));
    }
  }
);
