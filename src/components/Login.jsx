import React, { createRef } from 'react';
import { func, bool, object } from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';

import { login } from '../state/actionCreators/authActionCreators';
import Header from './Header';

const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 30px;
    margin: auto;
    margin-top: 30px;
  }

  form {
    display: flex;
    flex-direction: column;

    width: 350px;
    margin: auto;
    padding: 30px;
    background: #fdfdfd;
    color: #212529;
    border-radius: 5px;
    margin-top: 50px;
    margin-bottom: 50px;
  }

  h4 {
    font-size: 17px;
    font-weight: bold;
    margin-bottom: 30px;
  }

  h5 {
    font-size: 17px;
    font-weight: bold;
    margin: 15px 0;
    text-align: center;
    color: red;
  }

  label {
    margin: 10px 0;
  }

  label p {
    font-size: 12px;
    font-weight: bold;
  }

  label p span {
    color: red;
  }

  label input {
    width: 93%;
    height: 20px;
    font-size: 14px;
    color: #777777;
    background: #fafafa;
    padding: 10px;
    margin: 3px 0;
    border: 2px solid #e3e3e3;
    border-radius: 3px;
  }

  button {
    background: #55b95a;
    color: #fdfdfd;
    font-size: 15px;
    width: 100%;
    height: 40px;
    border: 1px solid #55b95a;
    border-radius: 3px;
    margin: auto;
    margin-top: 20px;
  }

  button:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 500px) {
    form {
      width: 250px;
    }

    h2 {
      font-size: 20px;
    }
  }
`;

const Login = ({ login, loginIn, history, error }) => {
  const username = createRef();
  const password = createRef();

  const handleLogin = e => {
    e.preventDefault();

    if (
      username.current.value.length >= 4 &&
      password.current.value.length >= 4
    ) {
      login(username.current.value, password.current.value).then(res => {
        if (res.status === 200) {
          if (res.data.user.isAdmin === 1) history.push('/helper');
          else history.push('/home');
        }
      });
    }
  };

  return (
    <StyledLogin>
      <Header />
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <h4>Sign in</h4>

        <label>
          <p>
            Username <span>*</span>
          </p>
          <input type="text" placeholder="username" ref={username} />
        </label>
        <label>
          <p>
            Password <span>*</span>
          </p>
          <input type="password" placeholder="password" ref={password} />
        </label>
        <button type="submit">
          {loginIn ? (
            <Loader
              type="ThreeDots"
              color="#fdfdfd"
              height={30}
              width={30}
            />
          ) : (
            'Login'
          )}
        </button>
        {error && <h5>Incorrect username or password.</h5>}
      </form>
    </StyledLogin>
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
