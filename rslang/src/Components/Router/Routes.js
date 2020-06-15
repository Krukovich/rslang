import React from 'react'
import { Route } from 'react-router-dom';
import Login from '../Authentication/Login/Login'
import CreateAccount from '../Authentication/CreateAccount/CreateAccount'

const sourceRoutes = [
  {
    path: "/main",
    component: () => <h1>main</h1>,
    exact: true,
  },
  {
    path: "/about",
    component: () => <h1>about</h1>,
    exact: true,
  },
  {
    path: "/minigames",
    component: () => <h1>Mini games</h1>,
    exact: true,
  },
  {
    path: "/",
    component: Login,
    exact: true,
  },
  {
    path: "/createanaccount",
    component: CreateAccount,
    exact: true,
  },
  {
    //always last, 404 page
    path: null,
    component: () => (
      <h1 style={{ color: "red", textAlign: "center" }}>404 not found</h1>
    ),
    exact: true,
  },
];

const RouteMap = sourceRoutes.map(({ path, component }, key) => (
  <Route exact path={path} component={component} key={key} />
));

export default RouteMap;
