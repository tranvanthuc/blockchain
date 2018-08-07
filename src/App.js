import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import React from "react";
import Login from "./scenes/Login";
import Register from "./scenes/Register";

const App = () => (
  <Router>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Switch>
  </Router>
);

export default App;
