import axios from 'axios';

import actionTypes from '../actionTypes';
import axiosImproved from '../axiosImproved';

export const login = (username, password) => dispatch => {
  dispatch({ type: actionTypes.LOGIN_IN });

  return axios
    .post('https://devdeskqueue-be.herokuapp.com/api/login', {
      username,
      password,
    })
    .then(res => {
      dispatch({ type: actionTypes.LOGIN, payload: res.data });
      return res;
    })
    .catch(err => {
      console.log(err.message);
      dispatch({ type: actionTypes.AUTH_ERROR });
      return err;
    });
};

export const register = (
  firstname,
  lastname,
  username,
  password,
  email,
  isAdmin,
  cohort,
) => dispatch => {
  dispatch({ type: actionTypes.REGISTERING });

  return axios
    .post('https://devdeskqueue-be.herokuapp.com/api/register', {
      firstname,
      lastname,
      username,
      password,
      isAdmin,
      email,
      cohort,
    })
    .then(res => {
      dispatch({ type: actionTypes.REGISTER, payload: res.data });
      return res;
    })
    .catch(err => {
      console.log(err.message);
      dispatch({ type: actionTypes.AUTH_ERROR });
      return err;
    });
};

export const getUsers = () => dispatch => {
  dispatch({ type: actionTypes.GETTING_USERS });

  axiosImproved()
    .get('https://devdeskqueue-be.herokuapp.com/api/users')
    .then(res => dispatch({ type: actionTypes.GET_USERS, payload: res.data }))
    .catch(err => {
      console.log(err.message);
      dispatch({ type: actionTypes.AUTH_ERROR });
    });
};
