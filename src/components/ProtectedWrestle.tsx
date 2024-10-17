// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/Auth'; // Adjust the path as necessary

const ProtectedRouteWrestle = ({ element }) => {
  const { isWresterLogin } = useAuth();

  return isWresterLogin ? element : <Navigate to="/Wlogin" />;
};

export default ProtectedRouteWrestle;
