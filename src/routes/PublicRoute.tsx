import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectLoggedIn } from "../redux/auth/selectors";

export const PublicRoute = () => {
  const isLoggedIn = useSelector(selectLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/user" replace />;
  }

  return <Outlet />;
};
