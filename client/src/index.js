import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import App from './containers/App'
import { Router, browserHistory } from 'react-router';
import setAuthorizationToken from './utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import { setCurrentUser } from './actions/authActions';

import './styles/app.scss';

import routes from './routes';

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
}

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
)
