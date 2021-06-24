import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { RouteComponentProps } from 'react-router-dom';
import Main from './pages/Main';
import Map from './pages/Map';
import Navigation from './components/Navigation';

function AppRouter() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path='/' component={Main} exact />
        <Route path='/map' component={Map} exact />
      </Switch>
    </Router>
  );
}

export default AppRouter;
