import { combineReducers } from 'redux';

import authReducer from './authReducer';
import ticketReducer from './ticketReducer';

const rootReducer = combineReducers({
  user: authReducer,
  ticket: ticketReducer,
});

export default rootReducer;
