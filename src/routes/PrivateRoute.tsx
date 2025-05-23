import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export const PrivateRoute = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};
