import React from 'react';
import { func } from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const WithAuth = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem('DevDeskToken') ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

WithAuth.propTypes = {
  component: func.isRequired,
};

export default WithAuth;
