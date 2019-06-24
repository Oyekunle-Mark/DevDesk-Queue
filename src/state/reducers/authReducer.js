import actionTypes from '../actionTypes';

const initialState = {
  users: [],
  user: {},
  registering: false,
  loginIn: false,
  gettingUsers: false,
  error: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REGISTER:
      return { ...state, registering: false };
    case actionTypes.REGISTERING:
      return { ...state, registering: true };
    case actionTypes.LOGIN:
      return { ...state, user: action.payload.user, loginIn: false };
    case actionTypes.LOGIN_IN:
      return { ...state, loginIn: true };
    case actionTypes.GET_USERS:
      return { ...state, users: action.payload, gettingUsers: false };
    case actionTypes.GETTING_USERS:
      return { ...state, gettingUsers: true };
    case actionTypes.AUTH_ERROR:
      return {
        ...state,
        error: true,
        registering: false,
        loginIn: false,
        gettingUsers: false,
      };
    default:
      return state;
  }
};

export default authReducer;
