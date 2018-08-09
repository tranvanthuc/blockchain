import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import Login from './scenes/Login';
import Register from './scenes/Register';
import Demo from './scenes/Demo';
import SenFuns from './scenes/SendFuns';
import './stylesheets/main.scss';

const App = () => (
  <Router>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/demo" component={Demo} />
      <Route path="/register" component={Register} />
      <Route path="/send-funs" component={SenFuns} />
    </Switch>
  </Router>
);

export default App;
