import React, { createRef } from 'react';
import { func, bool, object } from 'prop-types';
import { connect } from 'react-redux';

import { register } from '../state/actionCreators/authActionCreators';

const Registration = ({ register, registering, history, error }) => {
  const firstname = createRef();
  const lastname = createRef();
  const username = createRef();
  const password = createRef();
  const email = createRef();
  const isAdmin = createRef();
  const cohort = createRef();

  const handleRegistration = e => {
    e.preventDefault();

    register(
      firstname.current.value,
      lastname.current.value,
      username.current.value,
      password.current.value,
      email.current.value,
      isAdmin.current.value,
      cohort.current.value,
    ).then(res => {
      if (res.status === 200) history.push('/login');
    });
  };

  return (
    <div>
      <form onSubmit={handleRegistration}>
        <h3>Register</h3>

        <input type="text" placeholder="firstname" ref={firstname} />
        <input type="text" placeholder="lastname" ref={lastname} />
        <input type="text" placeholder="username" ref={username} />
        <input type="password" placeholder="password" ref={password} />
        <input type="email" placeholder="email" ref={email} />
        <input type="text" placeholder="cohort" ref={cohort} />
        <label>
          User type:
          <select ref={isAdmin}>
            <option value={0}>Student</option>
            <option value={1}>Helper</option>
          </select>
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
