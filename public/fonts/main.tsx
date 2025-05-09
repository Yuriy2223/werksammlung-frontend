import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";

import { App } from "./components";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <ToastContainer theme="dark" autoClose={3000} />
  </>
);
