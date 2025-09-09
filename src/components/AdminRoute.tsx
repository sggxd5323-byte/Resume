import React, { useState, useEffect } from 'react';
import { JobStorageService } from '../services/jobStorageService';
import AdminLogin from './AdminLogin';
import AdminJobManager from './AdminJobManager';

const AdminRoute: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if admin is already authenticated
    setIsAuthenticated(JobStorageService.isAdminAuthenticated());
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    JobStorageService.logoutAdmin();
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return <AdminJobManager onLogout={handleLogout} />;
};

export default AdminRoute;