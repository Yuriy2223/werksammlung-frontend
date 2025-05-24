import {
  lazy,
  Suspense,
  useEffect,
  // useState
} from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Layout } from "./components/Layout/Layout.tsx";
import { Loader } from "./loader/Loader.tsx";
import { PrivateRoute } from "./routes/PrivateRoute.tsx";
import { useAppDispatch } from "./redux/store.ts";
import { refreshToken } from "./redux/auth/operations.ts";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.tsx"));
const UserPage = lazy(() => import("./pages/UserPage/UserPage.tsx"));
const NotFoundPage = lazy(
  () => import("./pages/NotFoundPage/NotFoundPage.tsx")
);

export const App = () => {
  const dispatch = useAppDispatch();
  // const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowLoader(false);
  //   }, 1000);

  //   return () => clearTimeout(timer);
  // }, []);

  // if (showLoader) {
  //   return <Loader />;
  // }
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
