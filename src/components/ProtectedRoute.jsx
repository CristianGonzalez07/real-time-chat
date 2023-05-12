import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks";

export const ProtectedRoute = () => {
  const { user } = useAuth();
  if (!user) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return <Outlet/>;
};