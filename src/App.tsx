import { lazy, Suspense, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Layout } from "./components/Layout/Layout.tsx";
import { Loader } from "./loader/Loader.tsx";
import { PrivateRoute } from "./routes/PrivateRoute.tsx";
import { refreshToken } from "./redux/auth/operations.ts";
import { useAppDispatch } from "./redux/store.ts";
import { useSelector } from "react-redux";
import { selectLoading, selectProfile } from "./redux/profile/selectors.ts";
import { fetchProfile } from "./redux/profile/operations.ts";
import { selectLoggedIn } from "./redux/auth/selectors.ts";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.tsx"));
const UserPage = lazy(() => import("./pages/UserPage/UserPage.tsx"));
const NotFoundPage = lazy(
  () => import("./pages/NotFoundPage/NotFoundPage.tsx")
);

export const App = () => {
  const dispatch = useAppDispatch();
  const profile = useSelector(selectProfile);
  const loading = useSelector(selectLoading);
  const isLoggedIn = useSelector(selectLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) return;
    dispatch(refreshToken());
  }, [dispatch, isLoggedIn]);

  useEffect(() => {
    if (!profile && !loading) {
      dispatch(fetchProfile());
    }
  }, [dispatch, profile, loading]);

  if (loading || !profile) {
    return <Loader />;
  }

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="home" element={<Navigate to="/" replace />} />
            <Route element={<PrivateRoute />}>
              <Route path="user" element={<UserPage />} />
            </Route>
          </Route>
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
