import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

function ProtectedRoute({ children, allowedRoles = [] }) {
  const { isAuthenticated, role } = useAuth();

  // If the user is not logged in, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // If roles are specified, check whether the user's role is allowed
  if (allowedRoles.length > 0 && !allowedRoles.includes(role)) {
    return <Navigate to="/login" replace />;
  }

  // If authenticated and authorized, render the protected content
  return children;
}

export default ProtectedRoute;