import firebaseService from '../../utils/services/firebaseService'
import Firebase from 'firebase'
import { isEmpty } from 'lodash'

const connectedRef = firebaseService.database().ref(".info/connected");
let userRef = null

export function updateUserStatus(state) {
  const currentUser = firebaseService.auth().currentUser;
  if (!isEmpty(currentUser)) {
    userRef = firebaseService.database().ref('users').child(currentUser.uid);

    connectedRef.on(
      'value', status => {
        if (status.val()) {
          userRef.onDisconnect().cancel(error => {
            if (!error) {
              userRef.onDisconnect().update({
                state: 'Offline',
                last_update: Firebase.database.ServerValue.TIMESTAMP
              })
            }
          });

          userRef.update({
            state: state,
            last_update: Firebase.database.ServerValue.TIMESTAMP
          });
        }
      }
    )
  }
}