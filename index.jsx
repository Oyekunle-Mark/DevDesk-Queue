import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './src/App';
import rootReducer from './src/state/reducers';
import addTokenToLocalStorage from './src/state/middlewares';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, addTokenToLocalStorage),
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('target'),
);

window.addEventListener('load', () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./serviceWorker.js');
  }
});
