import { createAction, createActionThunk } from '../utils/helpers/actionFactory';
import firebaseService from '../../utils/services/firebaseService';
import * as types from '../utils/types/chatTypes';

// const CHAT_MESSAGES = firebaseService.database().ref('Messages');
// const CHAT_MESSAGES_LIMIT = 20;

const chatMessageLoading = createAction(types.CHAT_MESSAGE_LOADING);
const chatMessageSuccess = createAction(types.CHAT_MESSAGE_SUCCESS);
const chatMessageError = createAction(types.CHAT_MESSAGE_ERROR, 'error');
const loadMessagesSuccess = createAction(types.CHAT_LOAD_MESSAGES_SUCCESS, 'messages');
const loadMessagesError = createAction(types.CHAT_LOAD_MESSAGES_ERROR, 'error');

// const loadMessages = createActionThunk((_, dispatch) => {
//   CHAT_MESSAGES.limitToLast(CHAT_MESSAGES_LIMIT).on('value',
//     messages => {
//       dispatch(loadMessagesSuccess(messages.val()));
//     }, err => {
//       dispatch(loadMessagesError(err.message));
//     });
// });

const sendMessage = createActionThunk((props, dispatch) => {
  dispatch(chatMessageLoading());

  const currentUser = firebaseService.auth().currentUser;
  const createAt = new Date().getTime();
  const chatMessage = {
    text: props.message,
    createAt,
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

const loadMessages = createActionThunk((_, dispatch) => { });


export { loadMessages, sendMessage }
