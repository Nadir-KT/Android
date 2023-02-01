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

//AppRegistry.registerComponent(appName, () => State); // Select main source code to run & fletch appName to it.

import { registerRootComponent } from 'expo';

//import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
// registerRootComponent(App);

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Redux from './src/Redux/Redux'
const store = configureStore();
const RNRedux = () => (
    <Provider store={store}>
        <Redux/>
    </Provider>
)

//AppRegistry.registerComponent('main', () => State);
AppRegistry.registerComponent(appName, () => Redux); // Select main source code to run & fletch appName to it.