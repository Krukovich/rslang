import React from 'react';
import { Route } from 'react-router-dom';
import { Login } from '../../Pages/Authentication/Login/LoginPage';
import { CreateAccount } from '../../Pages/Authentication/CreateAccount/CreateAccountPage';
import { LogoutPage } from '../../Pages/Main/MainLogout/MainLogoutPage';
import PlayZonePage from '../../Pages/PlayZonePage/PlayZonePage';
import LongStats from '../LongStats/LongStats';

const sourceRoutes = [
  {
    path: '/main',
    component: LogoutPage,
    exact: true,
  },
  {
    path: '/about',
    component: () => <h1>about</h1>,
    exact: true,
  },
  {
    path: '/minigames',
    component: () => <h1>Mini games</h1>,
    exact: true,
  },
  {
    path: '/',
    component: Login,
    exact: true,
  },
  {
    path: '/long-stats',
    component: LongStats,
    exact: true,
  },
  {
    path: '/createanaccount',
    component: CreateAccount,
    exact: true,
  },
  {
    path: '/PlayZonePage',
    component: PlayZonePage,
    exact: true,
  },
  {
    // always last, 404 page
    path: null,
    component: () => (
      <h1 style={{ color: 'red', textAlign: 'center' }}>404 not found</h1>
    ),
    exact: true,
  },
];

 const RouteMap = sourceRoutes.map(({ path, component }, key) => (
  <Route exact path={path} component={component} key={key} />
));

export {RouteMap};