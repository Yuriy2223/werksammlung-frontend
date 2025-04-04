import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header/Header";
import { ToastContainer } from "react-toastify";
import { themes, ThemeType } from "./styles/Theme.ts";
import { useState } from "react";
import { GlobalStyles } from "./styles/GlobalStyles.ts";

export const App = () => {
  const [themeType, setThemeType] = useState<ThemeType>("light");
  const toggleTheme = (newTheme: ThemeType) => {
    setThemeType(newTheme);
  };
  return (
    <ThemeProvider theme={themes[themeType]}>
      <GlobalStyles />
      <Header toggleTheme={toggleTheme} currentTheme={themeType} />
      <ToastContainer
        // position="top-center"
        autoClose={2000}
        // hideProgressBar={false}
        // newestOnTop={false}
        // closeOnClick
        // rtl={false}
        // pauseOnFocusLoss
        // draggable
        // pauseOnHover
      />
    </ThemeProvider>
  );
};

export default App;
