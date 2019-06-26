import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import Registration from './components/Registration';
import Login from './components/Login';
import WithAuth from './components/WithAuth';
import StudentHome from './components/studentComponents/StudentHome';
import CreateTicket from './components/studentComponents/CreateTicket';
import MyTickets from './components/studentComponents/MyTickets';
import HelperHome from './components/helperComponents/HelperHome';
import ManageTickets from './components/helperComponents/ManageTickets';
import NoMatchPage from './components/noMatchPage';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route
          exact
          path="/join"
          render={props => <Registration {...props} />}
        />
        <Route exact path="/login" render={props => <Login {...props} />} />
        <WithAuth exact path="/home" component={StudentHome} />
        <WithAuth exact path="/create_ticket" component={CreateTicket} />
        <WithAuth exact path="/my_tickets" component={MyTickets} />

        <WithAuth helper exact path="/helper" component={HelperHome} />
        <WithAuth helper exact path="/manage_tickets" component={ManageTickets} />
        <Route component={NoMatchPage} />
      </Switch>
    </div>
  </Router>
);

export default App;
