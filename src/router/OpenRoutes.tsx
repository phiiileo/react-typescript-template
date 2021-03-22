import React, { lazy } from 'react';
import { Route } from 'react-router-dom';
import { AppRoute } from '../interfaces/general.interface';
import { RoutePaths } from './routes';

const openRoutes: AppRoute[] = [
  {
    name: 'Welcome',
    path: RoutePaths.HOME,
    component: lazy(() => import('../pages/Landing')),
  },
  {
    name: 'Sign Up',
    path: RoutePaths.SIGNUP,
    component: lazy(() => import('../pages/Authentication/SignUp')),
  },
  {
    name: 'Login',
    path: RoutePaths.LOGIN,
    component: lazy(() => import('../pages/Authentication/SignIn')),
  },
  {
    name: 'Forgot Password',
    path: RoutePaths.FORGETPASSWORD,
    component: lazy(() => import('../pages/Authentication/ForgotPassword')),
  },
  {
    name: 'Reset Password',
    path: RoutePaths.RESETPASSWORD,
    component: lazy(() => import('../pages/Authentication/ResetPassword')),
  },
  {
    name: 'Not found',
    path: RoutePaths.NOT_FOUND,
    component: lazy(() => import('../pages/NotFound')),
  },
];

const OpenRoutes = (): JSX.Element[] => {
  return openRoutes.map((route) => <Route key={route.path} exact path={route.path} component={route.component} />);
};

export default OpenRoutes;
