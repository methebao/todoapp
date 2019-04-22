import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./../Home";
import TodoApp from "./../TodoApp";
import TodoAppReduxBase from "./../TodoAppRedux";

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/todo-app" component={TodoApp} />
    <Route path="/todo-app-redux" component={TodoAppReduxBase} />
  </Switch>
);
export default Router;
