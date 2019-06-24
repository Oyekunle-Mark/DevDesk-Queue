import React from 'react';
import { render } from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import App from './src/App';
import rootReducer from './src/state/reducers';
import addTokenToLocalStorage from './src/state/middlewares';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, logger, addTokenToLocalStorage),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('target'),
);
