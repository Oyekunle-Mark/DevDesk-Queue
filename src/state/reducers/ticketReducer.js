import actionTypes from '../actionTypes';

const initialState = {
  tickets: [],
  gettingTickets: false,
  creatingTicket: false,
  deletingTicket: false,
  updatingTicket: false,
  error: null,
};

const ticketReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_TICKETS:
      return { ...state, tickets: action.payload, gettingTickets: false };
    case actionTypes.GETTING_TICKETS:
      return { ...state, gettingTickets: true };
    case actionTypes.CREATE_TICKET:
      return {
        ...state,
        tickets: [...state.tickets, action.payload],
        creatingTicket: false,
      };
    case actionTypes.CREATING_TICKET:
      return { ...state, creatingTicket: true };
    case actionTypes.DELETE_TICKET:
      return { ...state, tickets: action.payload, deletingTicket: false };
    case actionTypes.DELETING_TICKET:
      return { ...state, deletingTicket: true };
    case actionTypes.UPDATE_TICKET:
      return {
        ...state,
        tickets: [...state.tickets].map(ticket => {
          if (ticket.id === action.payload.id) return action.payload;
          return ticket;
        }),
        updatingTicket: false,
      };
    case actionTypes.UPDATING_TICKET:
      return { ...state, updatingTicket: true, gettingTickets: false };
    case actionTypes.GET_ADMIN_TICKETS:
      return { ...state, tickets: action.payload, gettingTickets: false };
    case actionTypes.GET_STUDENT_TICKETS:
      return {
        ...state,
        tickets: action.payload,
        gettingTickets: false,
      };
    case actionTypes.TICKET_ERROR:
      return {
        ...state,
        gettingTickets: false,
        creatingTicket: false,
        deletingTicket: false,
        updatingTicket: false,
        error: true,
      };
    default:
      return state;
  }
};

export default ticketReducers;
