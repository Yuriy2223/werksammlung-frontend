import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Layout } from "./components/Layout/Layout.tsx";
import { Loader } from "./loader/Loader.tsx";
import HomePage from "./pages/HomePage/HomePage.tsx";

// import UserPage from "./pages/UserPage/UserPage.tsx";
// import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.tsx";
const UserPage = lazy(() => import("./pages/UserPage/UserPage.tsx"));
const NotFoundPage = lazy(
  () => import("./pages/NotFoundPage/NotFoundPage.tsx")
);

export const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="home" element={<Navigate to="/" replace />} />
          </Route>
          <Route path="user" element={<UserPage />} />
          <Route path="*" element={<NotFoundPage />} />
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
