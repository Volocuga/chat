import React from 'react';
import { Switch } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import Login from '../pages/Login/Login';
import Profile from '../pages/Profile';

const MainRoutes = () => {
  const isAuthentication = true;
  return (
    <Switch>
      <PublicRoute component={Login} isAuthentication={isAuthentication} />
      <PrivateRoute component={Profile} isAuthentication={isAuthentication} />
    </Switch>
  );
};

export default MainRoutes;
