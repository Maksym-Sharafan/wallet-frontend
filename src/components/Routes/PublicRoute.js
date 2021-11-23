import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';

const PublicRoute = ({ children }) => {
  const isAuth = useSelector(authSelectors.IsAuth);
  return isAuth ? <Navigate to="/home" /> : children;
};

export default PublicRoute;
