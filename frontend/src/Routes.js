import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NoPage from "./containers/NoPage";
import List from "./containers/List";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/List">
        <List />
      </Route>
      <Route>
        <NoPage />
      </Route>
    </Switch>
  );
}