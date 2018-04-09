import { asyncComponent } from "react-async-component";
import React from "react";
import { Route, Router, Switch,Redirect } from "react-router-dom";
import GlobalTpl from "./pages/global/globalTpl";

import Home from "./pages/home";
import NoExist from "./pages/except/404";
import NoAuth from "./pages/except/403";
import createHistory from "history/createBrowserHistory";
//import createHistory from "history/createHashHistory";
import Login from './pages/login';
const history = createHistory(); //暂无使用
//const location = history.location;

export default class Routers extends React.Component {
  render() {
    return (
      <Router history={history}>
       <Switch>
       <Route exact path='/' component={Login}></Route>
        <Route  path="/index" component={GlobalTpl}></Route> 
        <Route  path="/user" render={({ match }) => {
          return (
            <Route path={`${match.path}/login`} component={Login}></Route>
          )
        }}/>
    
			</Switch> 
      </Router>
    );
  }
}
