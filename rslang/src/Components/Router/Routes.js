import React from 'react';
import {
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import { Login } from '../../Pages/Authentication/Login/LoginPage';
import { LoginFirst } from '../../Pages/Authentication/Login/LoginFirst';
import { CreateAccount } from '../../Pages/Authentication/CreateAccount/CreateAccountPage';
import PlayZonePage from '../../Pages/PlayZonePage/PlayZonePage';
import ShortStats from '../ShortStats/ShortStats';
import Settings from '../../Pages/Settings/Settings';
import LongStats from '../../Pages/LongStats/LongStats';
import { AudioCall } from '../../Pages/MiniGames/AudioCall/AudioCall.jsx';
import MainPage from '../../Pages/MainPage/MainPage';
import Vocabulary from '../../Pages/Vocabulary/vocabulary';
import { Start } from '../../Pages/Start/Start'

const sourceOpenRoutes = [
  {
    path: '/start',
    component: Start,
    exact: true,
  },
  {
    path: '/loginfirst',
    component: LoginFirst,
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
    component: () => <LongStats dataLabels={['день 1', 'день 2', 'день 3',
      'день 4', 'день 5', 'день 6', 'день 7', 'день 8', 'день 9', 'день 10']}
      totalNewWords={[3, 5, 7, 9, 10, 16, 17, 20, 22, 28]} totalWords={80}
      dailyNew={[4, 2, 7, 5, 5, 2, 6, 5, 4, 5]} />,
    exact: true,
  },
  {
    path: '/playzone',
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

export function RouteMap() {
  return (
    <div className="router">

      <Switch>
      {/* Фантастический код рожались эти строки 3 дня за подробностями прошу в ЛС*/}
      {sourceOpenRoutes.map(({ path, component }, key) => <Route exact path={path} component={component} key={key} />)}
      {sourceCloseRoutes.map(({ path, component }, key) => return (<PrivateRoute exact path={path} key={key} >{component}</PrivateRoute>))}
      </Switch>
    </div>

  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function AuthButton() {
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
      <p>You are not logged in.</p>
    );
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        true ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}


function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}




// const RouteMap = sourceRoutes.map(({ path, component }, key) => (
//   <Route exact path={path} component={component} key={key} />
// ));

// export { RouteMap }