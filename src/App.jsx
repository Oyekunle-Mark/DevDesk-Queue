import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import Registration from './components/Registration';
import Login from './components/Login';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route path="/join" render={props => <Registration {...props} />} />
      <Route path="/login" render={props => <Login {...props} />} />
    </div>
  </Router>
);

export default App;
