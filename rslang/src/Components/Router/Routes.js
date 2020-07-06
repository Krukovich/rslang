import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Login from '../../Pages/Authentication/Login/LoginPage';
import { LogOut } from '../../Pages/Authentication/Login/LogOut';
import { CreateAccount } from '../../Pages/Authentication/CreateAccount/CreateAccountPage';
import PlayZonePage from '../../Pages/PlayZonePage/PlayZonePage';
import ShortStats from '../ShortStats/ShortStats';
import Settings from '../../Pages/Settings/Settings';
import LongStats from '../../Pages/LongStats/LongStats';
import { AudioCall } from '../../Pages/MiniGames/AudioCall/AudioCall.jsx';
import MainPage from '../../Pages/MainPage/MainPage';
import Vocabulary from '../../Pages/Vocabulary/vocabulary';
import { Start } from '../../Pages/Start/Start';
import { CheckLogin } from '../../Pages/Authentication/CheckLogin';
import App from '../../Pages/MiniGames/Savanna/App';
import {SavannaStartPage} from '../../Pages/MiniGames/Savanna/components/StartPage/StartPage';
import SprintGame from '../../Pages/SprintGame/SprintGame';

const sourceOpenRoutes = [
  {
    path: '/start',
    component: Start,
    exact: true,
  },
  {
    path: '/logout',
    component: LogOut,
    exact: true,
  },
  {
    path: '/mainpage',
    component: MainPage,
    exact: true,
  },
  {
    path: '/savanna',
    component: SavannaStartPage,
    exact: true,
  },
  {
    path: '/about',
    component: () => <h1>about</h1>,
    exact: true,
  },
  {
    path: '/login',
    component: Login,
    exact: true,
  },
  {
    path: '/',
    component: Start,
    exact: true,
  },
  {
    path: '/createanaccount',
    component: CreateAccount,
    exact: true,
  },
];

const sourceCloseRoutes = [
  {
    path: '/main',
    component: MainPage,
    exact: true,
  },
  {
    path: '/mainpage',
    component: MainPage,
    exact: true,
  },
  {
    path: '/vocabulary',
    component: Vocabulary,
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
    path: '/audiocall',
    component: () => <AudioCall token={'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZWI3MDhjOThmZmJmMDAxNzQ1ODExNiIsImlhdCI6MTU5MjY3NDA0NywiZXhwIjoxNTkyNjg4NDQ3fQ.PwtU073aA-BfxwDgT5E5grLqtVtFTMED9ZMYrUaR3wU'} userId={'5eeb708c98ffbf0017458116'} />,
    exact: true,
  },
  {
    path: '/settings',
    component: Settings,
    exact: true,
  },
  {
    path: '/long-stats',
    component: () => <LongStats totalWords={80} />,
    exact: true,
  },
  {
    path: '/createanaccount',
    component: CreateAccount,
    exact: true,
  },
  {
    path: '/playzone',
    component: PlayZonePage,
    exact: true,
  },
  {
    path: '/SprintGame',
    component: SprintGame,
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

export function RouteMap() {
  return (
    <div className="router">

      <Switch>
        {sourceOpenRoutes.map(({ path, component }, key) => <Route exact path={path} component={component} key={'a'+key} />)}
        {sourceCloseRoutes.map(({ path, component }, key) => <PrivateRoute exact component={component} path={path} key={'b'+key} />)}
      </Switch>
    </div>

  );
}

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        CheckLogin() ? (
          <Component {...props} />
        ) : <Redirect
            to="/login"
          />
      }
    />
  );
}

