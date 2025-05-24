import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../App.type";
import {
  registerUser,
  loginUser,
  logoutUser,
  refreshToken,
  requestPasswordReset,
  resetPassword,
} from "./operations";

interface AuthState {
  user: User | null;
  isLoading: boolean;
  isLoggedIn: boolean;
  error: string | null;
  successMessage: string | null;
}

const initialState: AuthState = {
  user: null,
  isLoading: false,
  isLoggedIn: false,
  error: null,
  successMessage: null,
};

const handlePending = (state: AuthState) => {
  state.isLoading = true;
  state.error = null;
  state.successMessage = null;
};

const handleRejected = (
  state: AuthState,
  action: PayloadAction<string | undefined>
) => {
  state.isLoading = false;
  state.error = action.payload ?? "Something went wrong";
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetAuthError(state) {
      state.error = null;
      state.successMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(refreshToken.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(requestPasswordReset.fulfilled, (state, action) => {
        state.isLoading = false;
        state.successMessage = action.payload;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.successMessage = action.payload;
      })
      .addCase(refreshToken.rejected, (state, action) => {
        state.user = null;
        state.isLoggedIn = false;
        state.isLoading = false;
        state.error = action.payload ?? "Session expired";
      })
      .addMatcher(
        isAnyOf(
          registerUser.pending,
          loginUser.pending,
          logoutUser.pending,
          refreshToken.pending,
          requestPasswordReset.pending,
          resetPassword.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          registerUser.rejected,
          loginUser.rejected,
          logoutUser.rejected,
          requestPasswordReset.rejected,
          resetPassword.rejected
        ),
        handleRejected
      );
  },
});

export const { resetAuthError } = authSlice.actions;
export const authReducer = authSlice.reducer;
