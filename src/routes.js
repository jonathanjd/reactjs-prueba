// dependecies
import React from 'react';
import { Switch, Route } from 'react-router-dom';
// containers
import App from './containers/App';
import HomePage from './containers/HomePageContainer';
// components
import ContactPage from './containers/ContactContainer';


const Routes = () => (
  <App>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/contact" component={ContactPage} />
      <Route
        render={() => (
          <h2>
            404
          </h2>
        )}
      />
    </Switch>
  </App>
);

export default Routes;
