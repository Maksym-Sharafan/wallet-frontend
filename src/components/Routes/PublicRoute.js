import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';

const PublicRoute = ({ children, restricted = false }) => {
  const isAuth = useSelector(authSelectors.IsAuth);
  const shouldRedirect = isAuth && restricted;

  return shouldRedirect ? <Navigate to="/" /> : children;
};

export default PublicRoute;
