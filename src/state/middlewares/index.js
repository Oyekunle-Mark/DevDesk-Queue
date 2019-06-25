import actionTypes from '../actionTypes';

// eslint-disable-next-line no-unused-vars
const addTokenToLocalStorage = store => next => action => {
  if (action.type === actionTypes.LOGIN) {
    const auth = {
      token: action.payload.token,
      user: action.payload.user,
    };

    localStorage.setItem('DevDeskAuth', JSON.stringify(auth));
  }

  next(action);
};

export default addTokenToLocalStorage;
