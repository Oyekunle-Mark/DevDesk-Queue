import React, { createRef } from 'react';
import { func, bool } from 'prop-types';
import { connect } from 'react-redux';

import { login } from '../state/actionCreators';

const Login = ({ login, loginIn }) => {
  const username = createRef();
  const password = createRef();

  const handleLogin = e => {
    e.preventDefault();

    login(username.current.value, password.current.value);
  };

  return (
    <form onSubmit={handleLogin}>
      <h3>Login</h3>

      <input type="text" placeholder="username" ref={username} />
      <input type="password" placeholder="password" ref={password} />
      <button type="submit">Login {loginIn && 'Loading...'}</button>
    </form>
  );
};

Login.propTypes = {
  login: func.isRequired,
  loginIn: bool.isRequired,
};

const mapStateToProps = ({ user }) => ({
  loginIn: user.loginIn,
});

export default connect(
  mapStateToProps,
  { login },
)(Login);
