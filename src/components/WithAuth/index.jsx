import React from 'react';
import { object } from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const WithAuth = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem('DevDeskAuth') ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

WithAuth.propTypes = {
  component: object.isRequired,
};

export default WithAuth;
