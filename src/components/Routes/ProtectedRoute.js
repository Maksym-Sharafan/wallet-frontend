import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

export default function ProtectedRoute({
    children,
    redirectTo = '/login',
    ...routeProps
}) {
    const IsAuth = useSelector(authSelectors.IsAuth);
    const isError = useSelector(authSelectors.getError);

    return (
        <Route {...routeProps}>
            {IsAuth && !isError ? children : <Redirect to={redirectTo} />}
        </Route>
    );
}