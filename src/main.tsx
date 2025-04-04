import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
// import { GlobalStyles } from "./styles/GlobalStyles.ts";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      {/* <GlobalStyles /> */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
