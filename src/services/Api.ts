// import axios from "axios";

// export const API_URL = import.meta.env.VITE_API_URL;

// export const Instance = axios.create({
//   baseURL: import.meta.env.VITE_API_URL,
//   headers: { "Content-Type": "application/json" },
//   withCredentials: true,
// });

/******************* ****************************************/

import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { store } from "../redux/store";
import { logoutUser, refreshToken } from "../redux/auth/operations";
import { toast } from "react-toastify";

export const API_URL = import.meta.env.VITE_API_URL;

export const Instance = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

let isRefreshing = false;
let failedQueue: {
  resolve: (value?: unknown) => void;
  reject: (reason?: unknown) => void;
  config: InternalAxiosRequestConfig;
}[] = [];

const processQueue = (error: AxiosError | null) => {
  failedQueue.forEach(({ resolve, reject, config }) => {
    if (error) {
      reject(error);
    } else {
      resolve(Instance(config));
    }
  });
  failedQueue = [];
};

Instance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url?.includes("/api/users/refresh")
    ) {
      originalRequest._retry = true;

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject, config: originalRequest });
        });
      }

      isRefreshing = true;

      try {
        await store.dispatch(refreshToken()).unwrap();

        toast.success("Сесію оновлено ✨");

        processQueue(null);
        return Instance(originalRequest);
      } catch (err) {
        processQueue(err as AxiosError);
        // store.dispatch(logoutUser());
        await store.dispatch(logoutUser()).unwrap();
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);
