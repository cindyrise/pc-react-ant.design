import { asyncComponent } from "react-async-component";
import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import GlobalTpl from "./pages/global/globalTpl";

import Home from "./pages/home";
import NoExist from "./pages/except/404";
import NoAuth from "./pages/except/403";
import createHistory from "history/createBrowserHistory";
//import createHistory from "history/createHashHistory";
import Login from './pages/login';
const history = createHistory();
const location = history.location;

export default class Routers extends React.Component {
  render() {
    return (
      <Router history={history}>
       <Switch>
				<Route path='/login' component={Login}></Route>
        <GlobalTpl>
          <Route path="/" component={Home} />
          <Route path="/noexit" component={NoExist} />
          <Route path="/auth" component={NoAuth} />
        </GlobalTpl>
			</Switch> 
      </Router>
    );
  }
}
