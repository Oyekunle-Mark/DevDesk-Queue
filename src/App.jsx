import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

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

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-height: 100vh;
  background: #161f2a;
  color: #fdfdfd;
  font-family: 'Montserrat', sans-serif;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const App = () => (
  <Router>
    <StyledApp>
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
    </StyledApp>
  </Router>
);

export default App;
