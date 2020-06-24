import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

import { setDayLearningWords } from '../../Store/Actions';
import { getWords, saveWordsInLocalStorage } from '../../service';
import Login from '../../Pages/Authentication/Login/LoginPage';
import { LogOut } from '../../Pages/Authentication/Login/LogOut';
import { CreateAccount } from '../../Pages/Authentication/CreateAccount/CreateAccountPage';
import PlayZonePage from '../../Pages/PlayZonePage/PlayZonePage';
import ShortStats from '../ShortStats/ShortStats';
import Settings from '../../Pages/Settings/Settings';
import LongStats from '../../Pages/LongStats/LongStats';
import { AudioCall } from '../../Pages/MiniGames/AudioCall/AudioCall.jsx';
import MainPage from '../../Pages/MainPage/MainPage';
import VocabularyRouter from '../../Pages/Vocabulary/VocabularyRouter/VocabularyRouter';
import FortuneGame from '../../Pages/FortuneGame/FortuneGame.jsx';
import MiniGamesPage from '../../Pages/MiniGamesPage/MiniGamesPage';
import { CheckLogin } from '../../Pages/Authentication/CheckLogin';
import { SavannaStartPage } from '../../Pages/MiniGames/Savanna/components/StartPage/StartPage';
import SprintGame from '../../Pages/SprintGame/SprintGame';
import AboutPage from '../../Pages/AboutPage/AboutPage'

const mapStateToProps = (state) => {
  return {
    level: state.appSettings.level,
    newWordsCount: state.appSettings.newWordsCount,
  }
}

const mapActionToProps = {
  setDayLearningWords,
}

const sourceOpenRoutes = [
  {
    path: '/logout',
    component: LogOut,
    exact: true,
  },
  {
    path: '/',
    component: Login,
    exact: true,
  },
  {
    path: '/savanna',
    component: SavannaStartPage,
    exact: true,
  },
  {
    path: '/about',
    component: AboutPage,
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
    path: '/main-page',
    component: MainPage,
    exact: true,
  },
  {
    path: '/vocabulary',
    component: VocabularyRouter,
    exact: true,
  },
  {
    path: '/mini-games',
    component: MiniGamesPage,
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
<<<<<<< HEAD
    component: () => <LongStats totalWords={80} />,
    exact: true,
  },
  {
    path: '/createanaccount',
    component: CreateAccount,
=======
    component: () => <LongStats dataLabels={['день 1', 'день 2', 'день 3',
      'день 4', 'день 5', 'день 6', 'день 7', 'день 8', 'день 9', 'день 10']}
      totalNewWords={[3, 5, 7, 9, 10, 16, 17, 20, 22, 28]} totalWords={80}
      dailyNew={[4, 2, 7, 5, 5, 2, 6, 5, 4, 5]} />,
>>>>>>> fix: token & id
    exact: true,
  },
  {
    path: '/play-zone',
    component: PlayZonePage,
    exact: true,
  },
  {
    path: '/savanna',
    component: SavannaStartPage,
    exact: true,
  },
  {
    path: '/fortune-game',
    component: FortuneGame,
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

const RouteMap = ({ level, newWordsCount, setDayLearningWords }) => {
  return (
    <div className="router">
      <Switch>
        {sourceOpenRoutes.map(({ path, component }, key) => <Route exact path={path} component={component} key={'a' + key} />)}
        {sourceCloseRoutes.map(({ path, component }, key) => <PrivateRoute setDayLearningWords={setDayLearningWords} level={level} newWordsCount={newWordsCount} exact component={component} path={path} key={'b' + key} />)}
      </Switch>
    </div>
  );
}

export default connect(mapStateToProps, mapActionToProps)(RouteMap);

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (CheckLogin()) {
          getWords(rest.level, rest.newWordsCount).then((words) => {
            rest.setDayLearningWords(words);
            saveWordsInLocalStorage(words);
          });
          return <Component {...props} />
        } else {
          return <Redirect to="/" />
        }
      }}
    />
  );
}