import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Login from '../../screens/auth/login';
import SingUp from '../../screens/auth/signUp';;

const Navigator = createStackNavigator({
  Login,
  SingUp,
},
  {
    initialRouteName: "Login"
  }
);

export default Navigator;