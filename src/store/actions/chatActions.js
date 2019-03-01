import { createAction, createActionThunk } from '../utils/helpers/actionFactory';
import firebaseService from '../../utils/services/firebaseService';
import * as types from '../utils/types/chatTypes';

const chatMessageLoading = createAction(types.CHAT_MESSAGE_LOADING);
const chatMessageSuccess = createAction(types.CHAT_MESSAGE_SUCCESS);
const chatMessageError = createAction(types.CHAT_MESSAGE_ERROR, 'error');
const loadMessagesSuccess = createAction(types.CHAT_LOAD_MESSAGES_SUCCESS, 'messages');
const loadMessagesError = createAction(types.CHAT_LOAD_MESSAGES_ERROR, 'error');

const loadMessages = createActionThunk((_, dispatch) => {
  const CHAT_MESSAGES_LIMIT = 20;

  firebaseService
    .database()
    .ref('Messages')
    .limitToLast(CHAT_MESSAGES_LIMIT)
    .on('value',
      messages => {
        dispatch(loadMessagesSuccess(messages.val()));
      }, err => {
        dispatch(loadMessagesError(err.message));
      });
});

const sendMessage = createActionThunk((props, dispatch) => {
  dispatch(chatMessageLoading());

  const currentUser = firebaseService.auth().currentUser;
  const createdAt = new Date().getTime();
  const chatMessage = {
    text: props.message,
    createdAt,
    user: {
      id: currentUser.uid,
      email: currentUser.email
    }
  }

  firebaseService
    .database()
    .ref('Messages')
    .push().set(chatMessage, err => {
      if (err) {
        dispatch(chatMessageError(err.message));
      } else {
        dispatch(chatMessageSuccess());
      }
      props.callback();
    })

})

export { sendMessage, loadMessages }
