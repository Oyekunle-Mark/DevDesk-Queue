import React, { createRef } from 'react';
import { func, bool, object } from 'prop-types';
import { connect } from 'react-redux';

import { login } from '../state/actionCreators/authActionCreators';

const Login = ({ login, loginIn, history, error }) => {
  const username = createRef();
  const password = createRef();

  const handleLogin = e => {
    e.preventDefault();

    login(username.current.value, password.current.value).then(res => {
      if (res.status === 200) {
        if (res.data.user.isAdmin === 1) history.push('/helper');
        else history.push('/home');
      }
    });
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <h3>Login</h3>

        <input type="text" placeholder="username" ref={username} />
        <input type="password" placeholder="password" ref={password} />
        <button type="submit">Login {loginIn && 'Loading...'}</button>
      </form>
      {error && <h4>Error</h4>}
    </div>
  );
};

Login.propTypes = {
  login: func.isRequired,
  loginIn: bool.isRequired,
  history: object.isRequired,
  error: bool,
};

Login.defaultProps = {
  error: null,
};

const mapStateToProps = ({ user }) => ({
  loginIn: user.loginIn,
  error: user.error,
});

export default connect(
  mapStateToProps,
  { login },
)(Login);
