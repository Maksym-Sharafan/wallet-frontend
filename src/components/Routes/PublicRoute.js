import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { authSelectors } from "../../redux/auth";

// 1. Должен повторять API Route
// 2. Должен рендерить Route
const PublicRoute = ({ children, restricted = false }) => {
  const isAuth = useSelector(authSelectors.getIsAuth);
  const shouldRedirect = isAuth && restricted;

  console.log("isAuth: ", isAuth);

  return shouldRedirect ? <Navigate to="/login" /> : children;
};

export default PublicRoute;
