import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store.ts";
import { ThemeWrapper } from "./components/Theme/ThemeWrapper.tsx";
import { GlobalStyles } from "./styles/GlobalStyles.ts";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeWrapper>
          <BrowserRouter>
            <GlobalStyles />
            <App />
          </BrowserRouter>
        </ThemeWrapper>
      </PersistGate>
    </Provider>
  </StrictMode>
);
