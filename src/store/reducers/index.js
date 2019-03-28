import { combineReducers } from 'redux';
import chat from './chatReducer';
import session from './sessionReducer';
import onlines from './onlinesReducer';

const rootReducer = combineReducers({
  chat,
  session,
  onlines,
});

export default rootReducer;