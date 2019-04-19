import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./../Home";
import TodoApp from "./../TodoApp";
const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/todo-app" component={TodoApp} />
  </Switch>
);
export default Router;
