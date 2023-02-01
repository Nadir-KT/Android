/**
 * @format
 */

import {AppRegistry} from 'react-native'; // import AppRegistry from react-native components
import App from './App'; // import App.js file in same folder
import Flexbox from './src/flexbox';
import Webview from './src/Webview';
import Register from './src/Register';
import Login from './src/Login';
import State from './src/Fun/State';
import State_Effect from './src/Fun/State_Effect';
import Contest from './src/Fun/Contest';
import Reducer from './src/Fun/Reducer';
import {name as appName} from './app.json'; // import app.json file in same folder// take name mentioned in app.json as appName

AppRegistry.registerComponent(appName, () => State); // Select main source code to run & fletch appName to it.