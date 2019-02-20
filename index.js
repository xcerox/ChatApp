/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './_conf/app.json';

AppRegistry.registerComponent(appName, () => App);
