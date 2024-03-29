import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '../context/auth';

export default function PrivateRoutes() {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) return <Outlet />;
  return <Navigate to="/login" />;
}
