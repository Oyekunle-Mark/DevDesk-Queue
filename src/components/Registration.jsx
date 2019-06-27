import React, { useState } from 'react';
import { func, bool, object } from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { register } from '../state/actionCreators/authActionCreators';
import Header from './Header';

const StyledRegistration = styled.div`
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

  label input[type='text'],
  input[type='email'],
  input[type='password'] {
    width: 95%;
    height: 20px;
    font-size: 14px;
    color: #777777;
    background: #fafafa;
    padding: 10px;
    margin: 3px 0;
    border: 2px solid #e3e3e3;
    border-radius: 3px;
  }

  label input[type='radio'] {
    margin: 10px;
  }

  button {
    background: #55b95a;
    color: #fdfdfd;
    font-size: 15px;
    width: 100%;
    height: 40px;
    border: 1px solid #55b95a;
    border-radius: 3px;
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

const Registration = ({ register, registering, history, error }) => {
  const [firstname, updateFirstname] = useState('');
  const [lastname, updateLastname] = useState('');
  const [username, updateUsername] = useState('');
  const [password, updatePassword] = useState('');
  const [email, updateEmail] = useState('');
  const [isAdmin, updateIsAdmin] = useState(0);
  const [cohort, updateCohort] = useState('');

  const handleRegistration = e => {
    e.preventDefault();

    if (
      firstname.length >= 2 &&
      lastname.length >= 2 &&
      username.length >= 4 &&
      password.length >= 4 &&
      email.length >= 6
    ) {
      register(
        firstname,
        lastname,
        username,
        password,
        email,
        isAdmin,
        cohort,
      ).then(res => {
        if (res.status === 200) history.push('/login');
      });
    }
  };

  return (
    <StyledRegistration>
      <Header />
      <h2>Register</h2>

      <form onSubmit={handleRegistration}>
        <h4>Join DevDesk</h4>
        <label>
          <p>
            First name <span>*</span>
          </p>
          <input
            type="text"
            value={firstname}
            onChange={e => updateFirstname(e.target.value)}
          />
        </label>
        <label>
          <p>
            Last name <span>*</span>
          </p>
          <input
            type="text"
            value={lastname}
            onChange={e => updateLastname(e.target.value)}
          />
        </label>
        <label>
          <p>
            Username <span>*</span>
          </p>
          <input
            type="text"
            value={username}
            onChange={e => updateUsername(e.target.value)}
          />
        </label>
        <label>
          <p>
            Password <span>*</span>
          </p>
          <input
            type="password"
            value={password}
            onChange={e => updatePassword(e.target.value)}
          />
        </label>
        <label>
          <p>
            Email <span>*</span>
          </p>
          <input
            type="email"
            value={email}
            onChange={e => updateEmail(e.target.value)}
          />
        </label>
        <label>
          <p>Cohort</p>
          <input
            type="text"
            value={cohort}
            onChange={e => updateCohort(e.target.value)}
          />
        </label>
        <label>
          <p>
            User type <span>*</span>
          </p>
          <input
            type="radio"
            name="isAdmin"
            value={isAdmin}
            onChange={() => updateIsAdmin(0)}
            defaultChecked
          />
          Student
          <input
            type="radio"
            name="isAdmin"
            value={isAdmin}
            onChange={() => updateIsAdmin(1)}
          />
          Helper
        </label>
        <button type="submit">Submit {registering && 'Loading...'}</button>
        {error && <h5>Error creating account.</h5>}
      </form>
    </StyledRegistration>
  );
};

Registration.propTypes = {
  register: func.isRequired,
  registering: bool.isRequired,
  history: object.isRequired,
  error: bool,
};

Registration.defaultProps = {
  error: null,
};

const mapStateToProps = ({ user }) => ({
  registering: user.registering,
  error: user.error,
});

export default connect(
  mapStateToProps,
  { register },
)(Registration);
