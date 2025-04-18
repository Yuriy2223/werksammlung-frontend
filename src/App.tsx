import { Navigate, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import { Layout } from "./components/Layout/Layout.tsx";
import { Loader } from "./loader/Loader.tsx";
import HomePage from "./pages/HomePage/HomePage.tsx";
import UserPage from "./pages/UserPage/UserPage.tsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.tsx";

export const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="home" element={<Navigate to="/" replace />} />
            <Route path="user" element={<UserPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>

      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
        closeOnClick
        pauseOnHover
        draggable
      />
    </>
  );
};

export default App;
