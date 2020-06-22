import React from 'react';
import { Route } from 'react-router-dom';
import { Login } from '../../Pages/Authentication/Login/LoginPage';
import { CreateAccount } from '../../Pages/Authentication/CreateAccount/CreateAccountPage';
import { LogoutPage } from '../../Pages/Main/MainLogout/MainLogoutPage';
import PlayZonePage from '../../Pages/PlayZonePage/PlayZonePage';
import ShortStats from '../ShortStats/ShortStats';
import LongStats from '../../Pages/LongStats/LongStats';

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
    path: '/short-stats',
    component: () => <ShortStats total={100} right={90} newWords={50} rightInARow={3} timeNow={1592681867484} />,
    exact: true,
  },
  {
    path: '/',
    component: Login,
    exact: true,
  },
  {
    path: '/long-stats',
<<<<<<< HEAD
    component: () => <LongStats dataLabels={['день 1', 'день 2', 'день 3',
    'день 4', 'день 5', 'день 6', 'день 7', 'день 8', 'день 9', 'день 10']} totalNewWords={[3, 5, 7, 9, 10, 16, 17, 20, 22, 28]} totalWords={80} />,
=======
    component: () => <LongStats dataLabels={['1', '2', '3',
    '4', '5', '6', '7', '8', '9']} totalNewWords={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} totalWords={80} />,
>>>>>>> feat: progress bar
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
