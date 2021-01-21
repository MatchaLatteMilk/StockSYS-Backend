import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home.cont";
import Notfound from "./containers/Notfound.cont";
import Signin from "./containers/Signin.cont";
import Signup from "./containers/Signup.cont"

export default function Routes() {
  return (
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/signin">
            <Signin />
        </Route>
        <Route exact path="/signup">
            <Signup />
        </Route>
        <Route>
            <Notfound />
        </Route>
    </Switch>
  );
}