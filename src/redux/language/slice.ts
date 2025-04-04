// src/store/slices/languageSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import i18n from "i18next";

interface LanguageState {
  currentLanguage: string;
}

const initialState: LanguageState = {
  currentLanguage: localStorage.getItem("language") || "en",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.currentLanguage = action.payload;
      i18n.changeLanguage(action.payload);
      localStorage.setItem("language", action.payload);
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export const languageReducer = languageSlice.reducer;
