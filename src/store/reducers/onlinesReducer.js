import * as types from '../utils/types/onlineTypes';
import { createReducer } from '../utils/helpers/reducerFactory';

const initial = {
  working: false,
  data: [],
  error: null,
}

const handler = {
  [types.ONLINE_FETCH_LOADING]: (state, action) => {
    return { ...state, working: true, data: [], error: null }
  },
  [types.ONLINE_FETCH_SUCCESS]: (state, action) => {
    return { ...state, working: false, data: action.data }
  },
  [types.ONLINE_FETCH_ERROR]: (state, action) => {
    return { ...state, working: false, error: action.error }
  },
}

export default createReducer(initial, handler);