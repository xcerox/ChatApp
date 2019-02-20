import * as types from '../utils/types/chatTypes';
import { createReducer } from '../utils/helpers/reducerFactory';

const initial = {
  sending: false,
  sendingError: null,
  message: '',
  messages: {},
  loadMessagesError: null
}

const handler = {
  [types.CHAT_MESSAGE_LOADING]: (state, action) => {
    return { ...state, sending: true, sendingError: null }
  },
  [types.CHAT_MESSAGE_ERROR]: (state, action) => {
    return { ...state, sending: false, sendingError: action.error }
  },
  [types.CHAT_MESSAGE_SUCCESS]: (state, action) => {
    return { ...state, sending: false, sendingError: null, message: '' }
  },
  [types.CHAT_MESSAGE_UPDATE]: (state, action) => {
    return { ...state, sending: false, message: action.text, sendingError: null }
  },
  [types.CHAT_LOAD_MESSAGES_SUCCESS]: (state, action) => {
    return { ...state, messages: action.messages, loadMessagesError: null }
  },
  [types.CHAT_LOAD_MESSAGES_ERROR]: (state, action) => {
    return { ...state, messages: null, loadMessagesError: action.error }
  },
}

export default createReducer(initial, handler);