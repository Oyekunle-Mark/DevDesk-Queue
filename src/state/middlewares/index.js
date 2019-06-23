import actionTypes from '../actionTypes';

// eslint-disable-next-line no-unused-vars
const addTokenToLocalStorage = store => next => action => {
  if (action.type === actionTypes.LOGIN)
    localStorage.setItem('DevDeskToken', action.payload.token);

  next(action);
};

export default addTokenToLocalStorage;
