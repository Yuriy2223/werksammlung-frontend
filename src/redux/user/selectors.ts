import { User } from "../../App.type";
import { RootState } from "../store";

export const selectProfile = (state: RootState): User | null =>
  state.user.profile;

export const selectLoading = (state: RootState): boolean => state.user.loading;

export const selectError = (state: RootState): string | null =>
  state.user.error;
