import "styled-components";
import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bgBody: string;
    colorText: string;
    primary: string;
    secondary: string;
    accent: string;
    tertiary: string;
    hover: string;
    svg: string;
    gradient: string;
  }
}

export type ThemeType = "light" | "dark" | "grey";

export const lightTheme: DefaultTheme = {
  bgBody: "var(--bgBody)",
  colorText: "var(--colorText)",
  primary: "var(--primary)",
  secondary: "var(--secondary)",
  accent: "var(--accent)",
  tertiary: "var(--tertiary)",
  hover: "var(--hover)",
  svg: "var(--svg)",
  gradient: "var(--gradient)",
};

export const darkTheme: DefaultTheme = {
  bgBody: "var(--bgBody2)",
  colorText: "var(--colorText2)",
  primary: "var(--primary2)",
  secondary: "var(--secondary2)",
  accent: "var(--accent2)",
  tertiary: "var(--tertiary2)",
  hover: "var(--hover2)",
  svg: "var(--svg2)",
  gradient: "var(--gradient)",
};

export const greyTheme: DefaultTheme = {
  bgBody: "var(--bgBody3)",
  colorText: "var(--colorText3)",
  primary: "var(--primary3)",
  secondary: "var(--secondary3)",
  accent: "var(--accent3)",
  tertiary: "var(--tertiary3)",
  hover: "var(--hover3)",
  svg: "var(--svg3)",
  gradient: "var(--gradient)",
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
  grey: greyTheme,
};
