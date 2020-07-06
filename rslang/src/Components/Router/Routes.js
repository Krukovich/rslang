import React from 'react';
import { Route } from 'react-router-dom';
import { Login } from '../../Pages/Authentication/Login/LoginPage';
import { CreateAccount } from '../../Pages/Authentication/CreateAccount/CreateAccountPage';
import PlayZonePage from '../../Pages/PlayZonePage/PlayZonePage';
import ShortStats from '../ShortStats/ShortStats';
import Settings from '../../Pages/Settings/Settings';
import LongStats from '../../Pages/LongStats/LongStats';
import { AudioCall } from '../../Pages/MiniGames/AudioCall/AudioCall.jsx';
import MainPage from '../../Pages/MainPage/MainPage';
import SprintGame from '../../Pages/SprintGame/SprintGame';
import Vocabulary from '../../Pages/Vocabulary/vocabulary';
import FortuneGame from '../../Pages/FortuneGame/FortuneGame.jsx';
import MinigamesPage from '../../Pages/MinigamesPage/MinigamesPage'


const sourceRoutes = [
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
    path: '/about',
    component: () => <h1>about</h1>,
    exact: true,
  },
  {
    path: '/vocabulary',
    component: Vocabulary,
    exact: true,
  },
  {
    path: '/minigames',
    component: MinigamesPage,
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
    path: '/',
    component: Login,
    exact: true,
  },
  {
    path: '/settings',
    component: Settings,
    exact: true,

  },
  {
    path: '/long-stats',
    component: () => <LongStats dataLabels={['день 1', 'день 2', 'день 3',
      'день 4', 'день 5', 'день 6', 'день 7', 'день 8', 'день 9', 'день 10']}
      totalNewWords={[3, 5, 7, 9, 10, 16, 17, 20, 22, 28]} totalWords={80}
      dailyNew={[4, 2, 7, 5, 5, 2, 6, 5, 4, 5]} />,
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
    path: '/FortuneGame',
    component: FortuneGame,
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

export { RouteMap }