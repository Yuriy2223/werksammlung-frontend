import "styled-components";
import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    backBody: string;
    colorText: string;
    primary: string;
    secondary: string;
    accent: string;
    tertiary: string;
  }
}

export type ThemeType = "light" | "dark" | "grey";

// primary -- основний колір
// secondary -- допоміжний колір (другий за важливістю, доповнює primary)
// accent -- акцентний колір (для ховера)
// tertiary -- колір для тіней (запасний)

export const lightTheme: DefaultTheme = {
  backBody: "var(--backBody)",
  colorText: "var(--colorText)",
  primary: "var(--primary)",
  secondary: "var(--secondary)",
  accent: "var(--accent)",
  tertiary: "var(--focus)",
};

export const darkTheme: DefaultTheme = {
  backBody: "var(--backBody)",
  colorText: "var(--colorText)",
  primary: "var(--primary)",
  secondary: "var(--secondary)",
  accent: "var(--accent)",
  tertiary: "var(--tertiary)",
};

export const greyTheme: DefaultTheme = {
  backBody: "var(--backBody)",
  colorText: "var(--colorText)",
  primary: "var(--primary)",
  secondary: "var(--secondary)",
  accent: "var(--accent)",
  tertiary: "var(--tertiary)",
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
  grey: greyTheme,
};
