import React from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Sun, Moon, CloudFog } from "lucide-react";
import styled from "styled-components";
import { ThemeType } from "../../styles/Theme.ts";
import { selectTheme } from "../../redux/theme/selectors.ts";
import { useAppDispatch } from "../../redux/store.ts";
import { setTheme } from "../../redux/theme/slice.ts";

const themeOrder: ThemeType[] = ["light", "dark", "grey"];

const SwitcherContainer = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.colorText};
  border: 1px solid ${({ theme }) => theme.colorText};

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    border: 1px solid ${({ theme }) => theme.hover};
  }

  span {
    margin-left: 8px;
    color: ${({ theme }) => theme.hover};
  }
`;

export const ThemeSwitcher: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const theme = useSelector(selectTheme);

  const handleThemeChange = () => {
    const currentIndex = themeOrder.indexOf(theme);
    const nextTheme = themeOrder[(currentIndex + 1) % themeOrder.length];
    dispatch(setTheme(nextTheme));
  };

  const getThemeIcon = () => {
    switch (theme) {
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
      {t("buttons.theme")}:<span>{getThemeIcon()}</span>
    </SwitcherContainer>
  );
};
