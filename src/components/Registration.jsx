import React, { createRef } from 'react';
import { func, bool, object } from 'prop-types';
import { connect } from 'react-redux';

import { register } from '../state/actionCreators';

const Registration = ({ register, registering, history }) => {
  const firstname = createRef();
  const lastname = createRef();
  const username = createRef();
  const password = createRef();
  const email = createRef();
  const cohort = createRef();

  const handleRegistration = e => {
    e.preventDefault();

    register(
      firstname.current.value,
      lastname.current.value,
      username.current.value,
      password.current.value,
      email.current.value,
      cohort.current.value,
    ).then(() => history.push('/login'));
  };

  return (
    <form onSubmit={handleRegistration}>
      <h3>Register</h3>

      <input type="text" placeholder="firstname" ref={firstname} />
      <input type="text" placeholder="lastname" ref={lastname} />
      <input type="text" placeholder="username" ref={username} />
      <input type="text" placeholder="password" ref={password} />
      <input type="email" placeholder="email" ref={email} />
      <input type="text" placeholder="cohort" ref={cohort} />
      <button type="submit">Submit {registering && 'Loading...'}</button>
    </form>
  );
};

Registration.propTypes = {
  register: func.isRequired,
  registering: bool.isRequired,
  history: object.isRequired,
};

const mapStateToProps = ({ user }) => ({
  registering: user.registering,
});

export default connect(
  mapStateToProps,
  { register },
)(Registration);
