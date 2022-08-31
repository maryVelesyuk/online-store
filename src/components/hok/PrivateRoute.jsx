import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRoute = ({ children }) => {
  const { isAuth } = useSelector((state) => state.user);

  if (!isAuth) {
    return <Navigate to="/" />;
  }

  return children;
};
