import axios from 'axios';

import actionTypes from '../actionTypes';

export const login = (username, password) => dispatch => {
  dispatch({ type: actionTypes.LOGIN_IN });

  axios
    .post('https://devdeskqueue-be.herokuapp.com/api/login', {
      username,
      password,
    })
    .then(res => dispatch({ type: actionTypes.LOGIN, payload: res.data }))
    .catch(err => {
      console.log(err.message);
      dispatch({ type: actionTypes.ERROR });
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

  axios
    .post('https://devdeskqueue-be.herokuapp.com/api/register', {
      firstname,
      lastname,
      username,
      password,
      email,
      isAdmin,
      cohort,
    })
    .then(res => dispatch({ type: actionTypes.REGISTER }))
    .catch(err => {
      console.log(err.message);
      dispatch({ type: actionTypes.ERROR });
    });
};

export const getUsers = () => dispatch => {
  dispatch({ type: actionTypes.GETTING_USERS });

  axios
    .get('https://devdeskqueue-be.herokuapp.com/api/users')
    .then(res => dispatch({ type: actionTypes.GET_USERS, payload: res.data }))
    .catch(err => {
      console.log(err.message);
      dispatch({ type: actionTypes.ERROR });
    });
};

export const getTickets = () => dispatch => {
  dispatch({ type: actionTypes.GETTING_TICKETS });

  axios
    .get('https://devdeskqueue-be.herokuapp.com/api/tickets')
    .then(res => dispatch({ type: actionTypes.GET_TICKETS, payload: res.data }))
    .catch(err => {
      console.log(err.message);
      dispatch({ type: actionTypes.ERROR });
    });
};

export const createTicket = (title, description, category) => dispatch => {
  dispatch({ type: actionTypes.CREATING_TICKET });

  axios
    .post('https://devdeskqueue-be.herokuapp.com/api/tickets', {
      title,
      description,
      category,
    })
    .then(res =>
      dispatch({ type: actionTypes.CREATE_TICKET, payload: res.data }),
    )
    .catch(err => {
      console.log(err.message);
      dispatch({ type: actionTypes.ERROR });
    });
};

export const deleteTicket = id => dispatch => {
  dispatch({ type: actionTypes.DELETING_TICKET });

  axios
    .delete(`https://devdeskqueue-be.herokuapp.com/api/tickets/${id}`)
    .then(res =>
      dispatch({ type: actionTypes.DELETE_TICKET, payload: res.data }),
    )
    .catch(err => {
      console.log(err.message);
      dispatch({ type: actionTypes.ERROR });
    });
};

export const updateTicket = (id, title, description, category) => dispatch => {
  dispatch({ type: actionTypes.UPDATING_TICKET });

  axios
    .put(`https://devdeskqueue-be.herokuapp.com/api/tickets/${id}`, {
      title,
      description,
      category,
    })
    .then(res =>
      dispatch({ type: actionTypes.UPDATE_TICKET, payload: res.data }),
    )
    .catch(err => {
      console.log(err.message);
      dispatch({ type: actionTypes.ERROR });
    });
};

export const getAdminTickets = id => dispatch => {
  dispatch({ type: actionTypes.GETTING_TICKETS });

  axios
    .get(`https://devdeskqueue-be.herokuapp.com/api/tickets/admin/${id}`)
    .then(res =>
      dispatch({ type: actionTypes.GET_ADMIN_TICKETS, payload: res.data }),
    )
    .catch(err => {
      console.log(err.message);
      dispatch({ type: actionTypes.ERROR });
    });
};

export const getStudentTickets = id => dispatch => {
  dispatch({ type: actionTypes.GETTING_TICKETS });

  axios
    .get(`https://devdeskqueue-be.herokuapp.com/api/tickets/student/${id}`)
    .then(res =>
      dispatch({ type: actionTypes.GET_STUDENT_TICKETS, payload: res.data }),
    )
    .catch(err => {
      console.log(err.message);
      dispatch({ type: actionTypes.ERROR });
    });
};
