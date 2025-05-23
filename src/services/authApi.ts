import { User } from "../App.type";
import { Instance } from "./Api";

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface ResetPasswordData {
  token: string;
  password: string;
}

export interface RequestResetData {
  email: string;
}

export const registerUserApi = async (
  data: RegisterData
): Promise<{ user: User }> => {
  const res = await Instance.post("/api/users/signup", data);
  return res.data;
};

export const loginUserApi = async (
  data: LoginData
): Promise<{ user: User }> => {
  const res = await Instance.post("/api/users/signin", data);
  return res.data;
};

export const logoutApi = async (): Promise<void> => {
  await Instance.post("/api/users/signout");
};

export const refreshTokenApi = async (): Promise<void> => {
  await Instance.post("/api/users/refresh");
};

export const currentUserApi = async (): Promise<User> => {
  const res = await Instance.get("/api/users/current");
  return res.data;
};

export const requestPasswordResetApi = async (
  data: RequestResetData
): Promise<{ message: string }> => {
  const res = await Instance.post("/api/users/request-password-reset", data);
  return res.data;
};

export const resetPasswordApi = async (
  data: ResetPasswordData
): Promise<{ message: string }> => {
  const res = await Instance.post("/api/users/reset-password", data);
  return res.data;
};
