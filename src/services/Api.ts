import axios from "axios";

export const API_URL = import.meta.env.VITE_API_URL;

export const Instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

// export const publicInstance = axios.create({
//   baseURL: API_URL,
//   headers: { "Content-Type": "application/json" },
//   withCredentials: true,
// });

// export const privateInstance = axios.create({
//   baseURL: API_URL,
//   headers: { "Content-Type": "application/json" },
//   withCredentials: true,
// });
