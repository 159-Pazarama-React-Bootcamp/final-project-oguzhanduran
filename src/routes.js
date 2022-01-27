import React from 'react';
import CreateApplication from './pages/CreateApplication/CreateApplication';
import SuccessfulApplication from './pages/SuccessfulApplication/SuccessfulApplication';
import ShowApplication from './pages/ShowApplication/ShowApplication';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Auth() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CreateApplication} />
        <Route exact path="/successfulapplication" component={SuccessfulApplication} />
        <Route exact path="/showapplication" component={ShowApplication} />
      </Switch>
    </Router>
  );
}

export default Auth;
