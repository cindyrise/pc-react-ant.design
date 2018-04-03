import { asyncComponent } from "react-async-component";
import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import DimrayTheme from "./layout/dimrayTheme";

import Home from "./pages/home";
import HomeTpl from "./pages/home/homeTpl";
import NoExist from "./pages/except/404";
import NoAuth from "./pages/except/403";
import createHistory from "history/createBrowserHistory";
//import createHistory from "history/createHashHistory";
const history = createHistory();
const location = history.location;

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/tacos",
    component: DimrayTheme,
    routes: [
      {
        path: "/tacos/bus",
        component: Home
      },
      {
        path: "/tacos/cart",
        component: NoAuth
      }
    ]
  }
];
const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => <route.component {...props} routes={route.routes} />}
  />
);

export default class Routers extends React.Component {
  render() {
    return (
      <Router history={history}>
       <Switch>
        <DimrayTheme>
          <Route path="/home" component={Home} />
          <HomeTpl>
                <Route path="/exit" component={NoExist} />
                <Route path="/auth" component={Home} />
          </HomeTpl>
        </DimrayTheme>
        </Switch> 
      </Router>
    );
  }
}
