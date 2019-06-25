import actionTypes from '../actionTypes';
import axiosImproved from '../axiosImproved';

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
