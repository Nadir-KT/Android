/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Firebase_Msg from './Firebase/Firebase_Msg';
import RNF from './Firebase/RNF';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Firebase_Msg);
