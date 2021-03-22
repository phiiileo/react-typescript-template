import React, { lazy } from 'react';
import { Route } from 'react-router-dom';
import { AppRoute } from '../interfaces/general.interface';
import { ProtectedRoutePaths } from './routes';

const protectedRoutes: AppRoute[] = [
  {
    path: ProtectedRoutePaths.USERHOME,
    component: lazy(() => import('../pages/Landing')),
    name: 'User home',
  },
  // {
  //   path: ProtectedRoutePaths.USERTIMELINE,
  //   component: lazy(() => import('../pages/Timeline')),
  //   name: 'User timeline',
  // },
  // {
  //   path: ProtectedRoutePaths.USERMATES,
  //   component: lazy(() => import('../pages/Profile/Mates')),
  //   name: 'User mate',
  // },
  // {
  //   path: ProtectedRoutePaths.USERMATE,
  //   component: lazy(() => import('../pages/Profile/About')),
  //   name: 'User mate',
  // },
  // {
  //   path: ProtectedRoutePaths.USERABOUT,
  //   component: lazy(() => import('../pages/Profile/About')),
  //   name: 'User about',
  // },
  // {
  //   path: ProtectedRoutePaths.USERPOFILE,
  //   component: lazy(() => import('../pages/Profile/About')),
  //   name: 'User profile',
  // },
  // {
  //   path: ProtectedRoutePaths.USERSETTINGS,
  //   component: lazy(() => import('../pages/ProfileSettings')),
  //   name: 'User settings',
  // },
  // {
  //   path: ProtectedRoutePaths.USERNOTIFICATION,
  //   component: lazy(() => import('../pages/ProfileSettings/Notification')),
  //   name: 'User notification',
  // },
  // {
  //   path: ProtectedRoutePaths.USERMESSAGEHOME,
  //   component: lazy(() => import('../pages/Messages')),
  //   name: 'User messages',
  // },
  // {
  //   path: ProtectedRoutePaths.USERSEARCHRESULT,
  //   component: lazy(() => import('../pages/Search')),
  //   name: 'User search result',
  // },
  // {
  //   path: ProtectedRoutePaths.USEREXPLORE,
  //   component: lazy(() => import('../pages/Explore')),
  //   name: 'User explore pages',
  // },
  // {
  //   path: ProtectedRoutePaths.USERFEEDS,
  //   component: lazy(() => import('../pages/Feeds')),
  //   name: 'User feeds pages',
  // },
  // {
  //   path: ProtectedRoutePaths.APOST,
  //   component: lazy(() => import('../pages/Explore')),
  //   name: 'A post Page',
  // },
];

const ProtectedRoutes = (): JSX.Element[] => {
  return protectedRoutes.map((route) => <Route key={route.path} exact path={route.path} component={route.component} />);
};

export default ProtectedRoutes;
