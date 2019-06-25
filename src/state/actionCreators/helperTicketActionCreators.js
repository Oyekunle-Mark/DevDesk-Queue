import actionTypes from '../actionTypes';
import axiosImproved from '../axiosImproved';

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
