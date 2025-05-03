import { lazy, Suspense, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Layout } from "./components/Layout/Layout.tsx";
import { Loader } from "./loader/Loader.tsx";
import HomePage from "./pages/HomePage/HomePage.tsx";
import { useAppDispatch } from "./redux/store.ts";
import { useSelector } from "react-redux";
import { selectProfile } from "./redux/user/selectors.ts";
import { fetchProfile } from "./redux/user/operations.ts";
// import UserPage from "./pages/UserPage/UserPage.tsx";
// import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.tsx";
const UserPage = lazy(() => import("./pages/UserPage/UserPage.tsx"));
const NotFoundPage = lazy(
  () => import("./pages/NotFoundPage/NotFoundPage.tsx")
);

export const App = () => {
  const dispatch = useAppDispatch();
  const profile = useSelector(selectProfile);

  useEffect(() => {
    if (!profile) {
      dispatch(fetchProfile());
    }
  }, [dispatch, profile]);

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
