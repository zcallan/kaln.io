import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, NotFound } from 'views';


const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
