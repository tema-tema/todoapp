import { combineReducers } from 'redux'
import todos from './todos';
import flashMessages from './flashMessages';
import auth from './auth';

const rootReducer = combineReducers({
  todos,
  flashMessages,
  auth
})

export default rootReducer
