import * as firebase from 'firebase';
import { firebaseConfig } from '../../../_conf/firebase';

import { isNull } from '../helpers/validationUtil';

let instance = null;

class FirebaseService {
  constructor() {
    if (isNull(instance)) {
      instance = this;
      instance.app = firebase.initializeApp(firebaseConfig);
    }

    return instance;
  }
}

const firebaseService = new FirebaseService().app;
export default firebaseService;
