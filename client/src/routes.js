import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App'
import TodoForm from './containers/TodoForm'
import Greetings from './containers/Greetings'
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage'

import requireAuth from './utils/requireAuth';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={Greetings} />
    <Route path="signup" component={SignupPage} />
    <Route path="login" component={LoginPage} />
    <Route path="todo" component={requireAuth(TodoForm)} />
  </Route>
)
