import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Login from '../../screems/auth/login';
import SingUp from '../../screems/auth/signUp';

const Navigator = createStackNavigator({
  Login: Login,
  SingUp: SingUp,
},
  {
    initialRouteName: "Login"
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