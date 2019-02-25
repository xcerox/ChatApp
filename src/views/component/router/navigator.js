import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Login from '../../screems/auth/login';
import SingUp from '../../screems/auth/signUp';
import Chat from '../../screems/chat/chat';

const Navigator = createStackNavigator({
  Login,
  SingUp,
  Chat,
},
  {
    initialRouteName: "Chat"
  }
);

// const map = ({session}) => ({
//   restoring: session.restoring,
//   logged: session.user != null,
// })
// ChatAppContainer.propTypes = {
//   restoring: PropTypes.bool.isRequired,
//   logged: PropTypes.bool.isRequired,
//   restore: PropTypes.func.isRequired
// }
// / { restore: restoreSession }

export default Navigator;