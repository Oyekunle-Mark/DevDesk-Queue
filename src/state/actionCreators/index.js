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

export const getTickets = () => dispatch => {
  dispatch({ type: actionTypes.GETTING_TICKETS });

  axiosImproved()
    .get('https://devdeskqueue-be.herokuapp.com/api/tickets')
    .then(res => dispatch({ type: actionTypes.GET_TICKETS, payload: res.data }))
    .catch(err => {
      console.log(err.message);
      dispatch({ type: actionTypes.TICKET_ERROR });
    });
};

export const createTicket = (
  title,
  description,
  category,
  userId,
) => dispatch => {
  dispatch({ type: actionTypes.CREATING_TICKET });

  return axiosImproved()
    .post('https://devdeskqueue-be.herokuapp.com/api/tickets', {
      title,
      description,
      category,
      user_id: userId,
    })
    .then(res => {
      dispatch({ type: actionTypes.CREATE_TICKET, payload: res.data });
      return res;
    })
    .catch(err => {
      console.log(err.message);
      dispatch({ type: actionTypes.TICKET_ERROR });
      return err;
    });
};

export const deleteTicket = id => dispatch => {
  dispatch({ type: actionTypes.DELETING_TICKET });

  axiosImproved()
    .delete(`https://devdeskqueue-be.herokuapp.com/api/tickets/${id}`)
    .then(res =>
      dispatch({ type: actionTypes.DELETE_TICKET, payload: res.data }),
    )
    .catch(err => {
      console.log(err.message);
      dispatch({ type: actionTypes.TICKET_ERROR });
    });
};

export const updateTicket = (id, title, description, category) => dispatch => {
  dispatch({ type: actionTypes.UPDATING_TICKET });

  return axiosImproved()
    .put(`https://devdeskqueue-be.herokuapp.com/api/tickets/${id}`, {
      title,
      description,
      category,
    })
    .then(res => {
      dispatch({ type: actionTypes.UPDATE_TICKET, payload: res.data });
      return res;
    })
    .catch(err => {
      console.log(err.message);
      dispatch({ type: actionTypes.TICKET_ERROR });
      return err;
    });
};

export const updateHelperTicket = (
  id,
  resolved,
  assigned,
  assigned_user,
) => dispatch => {
  dispatch({ type: actionTypes.UPDATING_TICKET });

  return axiosImproved()
    .put(`https://devdeskqueue-be.herokuapp.com/api/tickets/${id}`, {
      resolved,
      assigned,
      assigned_user,
    })
    .then(res => {
      dispatch({ type: actionTypes.UPDATE_TICKET, payload: res.data });
      return res;
    })
    .catch(err => {
      console.log(err.message);
      dispatch({ type: actionTypes.TICKET_ERROR });
      return err;
    });
};

export const getAdminTickets = id => dispatch => {
  dispatch({ type: actionTypes.GETTING_TICKETS });

  axiosImproved()
    .get(`https://devdeskqueue-be.herokuapp.com/api/tickets/admin/${id}`)
    .then(res =>
      dispatch({ type: actionTypes.GET_ADMIN_TICKETS, payload: res.data }),
    )
    .catch(err => {
      console.log(err.message);
      dispatch({ type: actionTypes.TICKET_ERROR });
    });
};

export const getStudentTickets = id => dispatch => {
  dispatch({ type: actionTypes.GETTING_TICKETS });

  axiosImproved()
    .get(`https://devdeskqueue-be.herokuapp.com/api/tickets/student/${id}`)
    .then(res =>
      dispatch({ type: actionTypes.GET_STUDENT_TICKETS, payload: res.data }),
    )
    .catch(err => {
      console.log(err.message);
      dispatch({ type: actionTypes.TICKET_ERROR });
    });
};
