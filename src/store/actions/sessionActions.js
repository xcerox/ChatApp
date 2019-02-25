import { createAction, createActionThunk } from '../utils/helpers/actionFactory';
import firebaseService from '../../utils/services/firebaseService';
import * as types from '../utils/types/sessionTypes';

const sessionRestoring = createAction(types.SESSION_RESTORING);
const sessionSuccess = createAction(types.SESSION_SUCCESS, 'user');
const sessionLogout = createAction(types.SESSION_LOGOUT);
const sessionLoading = createAction(types.SESSION_LOADING);
const sessionError = createAction(types.SESSION_ERROR, 'error');

const sessionRestore = createActionThunk((_, dispatch) => {
  dispatch(sessionRestoring());

  const unsubscribe = firebaseService
    .auth()
    .onAuthStateChanged(user => {
      if (user) {
        dispatch(sessionSuccess(user));
      } else {
        dispatch(sessionLogout());
      }

      unsubscribe();
    })

});

const loginUser = createActionThunk((user, dispatch) => {
  dispatch(sessionLoading());

  firebaseService
    .auth()
    .signInWithEmailAndPassword(user.email, user.password)
    .catch(err => {
      let keyMessage = 'serverError';

      if (err.code === "auth/user-not-found") {
        keyMessage = 'wrongEmail';
      } else if (err.code === "auth/wrong-password") {
        keyMessage = 'wrongpassword';
      } else if (err.code === "auth/invalid-email") {
        keyMessage = 'InvalidEmail';
      } else if (err.code === "auth/too-many-requests") {
        keyMessage = 'limittrylogin';
      }

      dispatch(sessionError(keyMessage));
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

const signupUser = createActionThunk((user, dispatch) => {
  dispatch(sessionLoading())

  firebaseService.auth()
    .createUserWithEmailAndPassword(user.email, user.password)
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

const logout = createActionThunk((_, dispatch) => {
  dispatch(sessionError);

  firebaseService
    .auth()
    .signOut()
    .then(() => {
      dispatch(sessionLogout());
    })
    .catch(err => {
      dispatch(sessionError(err.message))
    })

});

const thunkTest = createActionThunk((_, dispatch) => {
  console.log('test');
});


export { signupUser, loginUser }