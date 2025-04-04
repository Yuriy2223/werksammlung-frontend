import React from "react";
import styled from "styled-components";
import { Sun, Moon, CloudFog } from "lucide-react";
import { ThemeType } from "../../styles/Theme.ts";

const themeOrder: ThemeType[] = ["light", "dark", "grey"];

const SwitcherContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 40px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.colorText};
  border: ${({ theme }) => theme.colorText};

  &:hover {
    background-color: ${({ theme }) => theme.primary};
  }

  span {
    margin-left: 8px;
  }
`;

interface ThemeSwitcherProps {
  toggleTheme: (theme: ThemeType) => void;
  currentTheme: ThemeType;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  toggleTheme,
  currentTheme,
}) => {
  const handleThemeChange = () => {
    const currentIndex = themeOrder.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themeOrder.length;
    toggleTheme(themeOrder[nextIndex]);
  };

  const getThemeIcon = () => {
    switch (currentTheme) {
      case "light":
        return <Sun />;
      case "dark":
        return <Moon />;
      case "grey":
        return <CloudFog />;
      default:
        return <Sun />;
    }
  };

  return (
    <SwitcherContainer onClick={handleThemeChange}>
      Theme:
      <span>{getThemeIcon()}</span>
    </SwitcherContainer>
  );
};
