import * as types from '../utils/types/sessionTypes';
import { createReducer } from '../utils/helpers/reducerFactory';

const initial = {
  retoring: false,
  loading: false,
  user: null,
  error: null,
}

const handler = {
  [types.SESSION_RESTORING]: (state, action) => {
    return { ...state, restoring: true }
  },
  [types.SESSION_LOADING]: (state, action) => {
    return { ...state, restoring: false, loading: true, error: null }
  },
  [types.SESSION_SUCCESS]: (state, action) => {
    return { restoring: false, loading: false, user: action.user, error: null }
  },
  [types.SESSION_ERROR]: (state, action) => {
    return { restoring: false, loading: false, user: null, error: action.error }
  },
  [types.SESSION_LOGOUT]: (state, action) => {
    return initialState
  },
}

export default createReducer(initial, handler);