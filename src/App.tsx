import { ThemeProvider } from "styled-components";
import "./App.css";
import { Header } from "./components/Header/Header";
import { ToastContainer } from "react-toastify";

export const App = () => {
  return (
    <ThemeProvider theme={themes[themeType]}>
      <Header />

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </ThemeProvider>
  );
};

export default App;
