import { createAction, createActionThunk } from '../utils/helpers/actionFactory';
import firebaseService from '../../utils/services/firebaseService';
import * as types from '../utils/types/chatTypes';
import { dispatch } from 'rxjs/internal/observable/pairs';

const CHAT_MESSAGES = firebaseService.database().ref('Messages');
const CHAT_MESSAGES_LIMIT = 20;

const chatMessageLoading = createAction(types.CHAT_MESSAGE_LOADING);
const chatMessageSuccess = createAction(types.CHAT_MESSAGE_SUCCESS);
const chatMessageError = createAction(types.CHAT_MESSAGE_ERROR, 'error');
const chatUpdateMessage = createAction(types.CHAT_MESSAGE_UPDATE, 'text');
const loadMessagesSuccess = createAction(types.CHAT_LOAD_MESSAGES_SUCCESS, 'messages');
const loadMessagesError = createAction(types.CHAT_LOAD_MESSAGES_ERROR, 'error');

const loadMessages = createActionThunk((_, dispatch) => {
  CHAT_MESSAGES.limitToLast(CHAT_MESSAGES_LIMIT).on('value',
    messages => {
      dispatch(loadMessagesSuccess(messages.val()));
    }, err => {
      dispatch(loadMessagesError(err.message));
    });
});

const sendMessage = createActionThunk((message, dispatch) => {
  dispatch(chatMessageLoading());

  const currentUser = firebaseService.auth().currentUser;
  const createAt = new Date().getTime();
  const chatMessage = {
    text: message,
    createAt,
    user: {
      id: currentUser.id,
      email: currentUser.email
    }
  }

  CHAT_MESSAGES.push().set(chatMessage, err => {
    if (err) {
      dispatch(chatMessageError(err.message));
    } else {
      dispatch(chatMessageSuccess());
    }
  })

})


export { loadMessages, sendMessage}