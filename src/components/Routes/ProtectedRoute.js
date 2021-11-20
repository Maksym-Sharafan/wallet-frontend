

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';

export default function ProtectedRoute({
    children,
    redirectTo = '/login',
    ...routeProps
}) {
    const IsAuth = useSelector(authSelectors.IsAuth);
    const isError = useSelector(authSelectors.getError);
    return IsAuth && !isError ? <Navigate to={redirectTo} /> : children;
};