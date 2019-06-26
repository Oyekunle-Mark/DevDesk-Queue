import React, { useState } from 'react';
import { func, bool, object } from 'prop-types';
import { connect } from 'react-redux';

import { register } from '../state/actionCreators/authActionCreators';

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
  };

  return (
    <div>
      <form onSubmit={handleRegistration}>
        <h3>Register</h3>

        <input
          type="text"
          placeholder="firstname"
          value={firstname}
          onChange={e => updateFirstname(e.target.value)}
        />
        <input
          type="text"
          placeholder="lastname"
          value={lastname}
          onChange={e => updateLastname(e.target.value)}
        />
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={e => updateUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={e => updatePassword(e.target.value)}
        />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={e => updateEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="cohort"
          value={cohort}
          onChange={e => updateCohort(e.target.value)}
        />
        <label>
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
      </form>
      {error && <h4>Error</h4>}
    </div>
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
