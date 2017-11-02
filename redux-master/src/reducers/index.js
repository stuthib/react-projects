import { combineReducers } from 'redux';
import todos from './todos';
import user from './user';
import notes from './notes';

const rootReducer = combineReducers({
  todos,
  user,
  notes
});

export default rootReducer;
