import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  // Never combine your Auth logic with react router
  // create a wrapper

  //write authentication logic
  // Make login API call, check if token valid

  const isAuthenticated = false;
  // outlet is a place where children can render
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
