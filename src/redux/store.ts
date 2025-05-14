import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { useDispatch } from "react-redux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
// import { authReducer, AuthState } from "./auth/slice";
import { userReducer } from "./user/slice";
import { themeReducer } from "./theme/slice";
import { modalReducer } from "./modal/slice";
import { languageReducer } from "./language/slice";
import { contactReduser } from "./contact/slice";

// const authPersistConfig = {
//   key: "auth",
//   storage,
//   whitelist: ["token"],
// };

const themePersistConfig = {
  key: "theme",
  storage,
};

const languagePersistConfig = {
  key: "language",
  storage,
};

// const persistedAuthReducer = persistReducer<AuthState>(
//   authPersistConfig,
//   authReducer
// );
const persistedThemeReducer = persistReducer(themePersistConfig, themeReducer);
const persistedLanguageReducer = persistReducer(
  languagePersistConfig,
  languageReducer
);

export const store = configureStore({
  reducer: {
    // auth: persistedAuthReducer,
    user: userReducer,
    modal: modalReducer,
    theme: persistedThemeReducer,
    language: persistedLanguageReducer,
    contact: contactReduser,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const persistor = persistStore(store);
