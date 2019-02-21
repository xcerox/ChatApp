import { createAction, createActionThunk } from '../utils/helpers/actionFactory';
import firebaseService from '../../utils/services/firebaseService';
import * as types from '../utils/types/sessionTypes';

const sessionRestoring = createAction(types.SESSION_RESTORING);
const sessionSuccess = createAction(types.SESSION_SUCCESS, 'payload');
const sessionLogout = createAction(types.SESSION_LOGOUT);
const sessionLoading = createAction(types.SESSION_LOADING);
const sessionError = createAction(types.SESSION_ERROR, 'payload');

const sessionRestore = createActionThunk((_, dispatch) => {
  dispatch(sessionRestoring());

  const unsebscribe = firebaseService
    .auth()
    .onAuthStateChanged(user => {
      if (user) {
        dispatch(sessionSuccess(user));
      } else {
        dispatch(sessionLogout());
      }

      unsebscribe();
    })

});

const loginUser = createActionThunk((props, dispatch) => {
  dispatch(sessionLoading());

  firebaseService
    .auth()
    .signInWithEmailAndPassword(props.email, props.password)
    .catch(err => {
      dispatch(sessionError(err.message));
    });

  const unsubscribe = firebaseService
    .auth()
    .onAuthStateChanged(user => {
      if (user) {
        dispatch(sessionSuccess(user));
        unsubscribe();
      }
    })

});

const signupUser = createActionThunk((props, dispatch) => {
  dispatch(sessionLoading())

  firebaseService.auth()
    .createUserWithEmailAndPassword(props.email, props.password)
    .catch(error => {
      dispatch(sessionError(error.message));
    })

  let unsubscribe = firebaseService.auth()
    .onAuthStateChanged(user => {
      if (user) {
        dispatch(sessionSuccess(user))
        unsubscribe()
      }
    })
});


export { sessionRestore, loginUser, signupUser }