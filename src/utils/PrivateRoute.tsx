import { Navigate, RouteProps } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export function PrivateRoute({ children, ...rest }: RouteProps) {
    const { user } = useAuth()
    return (
        // <Route
        //     {...rest}
        //     render={) =>
        user ? (
            children
        ) : (
            <Navigate
                to='/login'
                state={{ from: location }}
                replace
            />
        )
        // }
        // />
    )
}
