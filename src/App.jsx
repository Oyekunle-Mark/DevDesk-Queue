import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import Registration from './components/Registration';
import Login from './components/Login';
import WithAuth from './components/WithAuth';
import StudentHome from './components/StudentHome';
import CreateTicket from './components/CreateTicket';
import MyTickets from './components/MyTickets';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route path="/join" render={props => <Registration {...props} />} />
      <Route path="/login" render={props => <Login {...props} />} />
      <WithAuth path="/home" component={StudentHome} />
      <WithAuth path="/create_ticket" component={CreateTicket} />
      <WithAuth path="/my_tickets" component={MyTickets} />
    </div>
  </Router>
);

export default App;
