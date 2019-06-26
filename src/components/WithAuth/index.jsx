import React from 'react';
import { object, bool } from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const WithAuth = ({ component: Component, helper, ...rest }) => {
  let userType;

  try {
    userType = JSON.parse(localStorage.getItem('DevDeskAuth')).user.isAdmin;
  } catch (e) {
    userType = '';
  }

  if (helper) {
    return userType ? (
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
    ) : (
      <Redirect to="/login" />
    );
  }

  if (userType === 0) {
    return (
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
  }

  return <Redirect to="/login" />;
};

WithAuth.propTypes = {
  component: object.isRequired,
  helper: bool,
};

WithAuth.defaultProps = {
  helper: false,
};

export default WithAuth;
