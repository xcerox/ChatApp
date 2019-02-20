import { combineReducers } from 'redux';
import chat from './chatReducer';
import session from './sessionReducer';

const rootReducer = combineReducers({
  chat,
  session
});

export default rootReducer;