import { createBottomTabNavigator } from 'react-navigation'

import Login from './login';
import SignUp from './signUp';

const TabNavigator = createBottomTabNavigator({
  Login: Login,
  SignUp: SignUp
});


export default TabNavigator;