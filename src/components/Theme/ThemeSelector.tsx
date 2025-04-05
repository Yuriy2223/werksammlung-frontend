// import { useSelector } from "react-redux";
// import { setTheme } from "../../redux/theme/slice";
// import { selectTheme } from "../../redux/theme/selectors";
// import { ThemeType } from "../../styles/Theme";
// import styled from "styled-components";
// import { useAppDispatch } from "../../redux/store";
// import { Sun, Moon, CloudFog } from "lucide-react";

// const themeOrder: ThemeType[] = ["light", "dark", "grey"];

// const SwitcherContainer = styled.button`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 100px;
//   height: 40px;
//   border-radius: 8px;
//   background-color: ${({ theme }) => theme.secondary};
//   color: ${({ theme }) => theme.colorText};
//   border: 1px solid ${({ theme }) => theme.colorText};

//   &:hover {
//     background-color: ${({ theme }) => theme.primary};
//   }

//   span {
//     margin-left: 8px;
//   }
// `;

// export const ThemeSelector = () => {
//   const dispatch = useAppDispatch();
//   const theme = useSelector(selectTheme);

//   const handleThemeChange = () => {
//     const currentIndex = themeOrder.indexOf(theme);
//     const nextTheme = themeOrder[(currentIndex + 1) % themeOrder.length];
//     dispatch(setTheme(nextTheme));
//   };

//   const getThemeIcon = () => {
//     switch (theme) {
//       case "light":
//         return <Sun />;
//       case "dark":
//         return <Moon />;
//       case "grey":
//         return <CloudFog />;
//       default:
//         return <Sun />;
//     }
//   };

//   return (
//     <SwitcherContainer onClick={handleThemeChange}>
//       Theme:
//       <span>{getThemeIcon()}</span>
//     </SwitcherContainer>
//   );
// };

// const handleThemeChange = () => {
//   const themeKeys = Object.keys(themes) as ThemeType[];
//   const currentIndex = themeKeys.indexOf(theme);
//   const nextTheme = themeKeys[(currentIndex + 1) % themeKeys.length];
//   dispatch(setTheme(nextTheme));
// };

// export const ThemeButton = styled.button`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 30px;
//   width: 119px;
//   height: 42px;
//   font-weight: 500;
//   font-size: 14px;
//   line-height: 1.29;
//   letter-spacing: -0.03em;
//   color: ${({ theme }) => theme.white};
//   background-color: ${({ theme }) => theme.primaryDark};
//   border: 1px solid ${({ theme }) => theme.white};

//   &:hover,
//   &.active {
//     color: ${({ theme }) => theme.primaryDark};
//     background-color: ${({ theme }) => theme.lightYellow};
//     border: 1px solid ${({ theme }) => theme.lightYellow};
//   }

//   @media (min-width: 1280px) {
//     font-size: 16px;
//     line-height: 1.25;
//     border: 1px solid ${({ theme }) => theme.primaryDark};
//     color: ${({ theme }) => theme.primaryDark};
//     background-color: ${({ theme }) => theme.lightYellow};

//     &:hover,
//     &.active {
//       border: 1px solid ${({ theme }) => theme.primaryDark};
//       color: ${({ theme }) => theme.white};
//       background-color: ${({ theme }) => theme.primaryDark};
//     }
//   }
// `;
