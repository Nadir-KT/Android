/**
 * @format
 */

// import { registerRootComponent } from 'expo';
// import App from './App';
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
// registerRootComponent(App);

import {AppRegistry} from 'react-native'; // import AppRegistry from react-native components

import App from './App'; // import App.js file in same folder
import Flexbox from './src/flexbox';
import Webview from './src/Webview';
//import Register from './src/Register';
import Login from './src/Login';
import State from './src/Fun/State';
import State_Effect from './src/Fun/State_Effect';
import Contest from './src/Fun/Contest';
import Reducer from './src/Fun/Reducer';
import Async from './src/Async';
import Realm_App from './src/Realm/Realm_App';
import Map from './src/Maps/Maps';
import UI from './src/UI';
import Register from './src/UI/0.Register';
import OTP from './src/UI/OTP';
import Details from './src/UI/Details';
import Configuration from './src/UI/Configuration';
import Drop from './src/UI/Drop';
import App_tour from './src/UI/App tour';
import UI_App from './src/UI/UI_App';
//import Firebase_Msg from './src/Firebase/Firebase_Msg';
//import Firebase_Data from './src/Firebase/Firebase_Data';

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Redux from './src/Redux/Redux'
import Redux_fun from './src/Redux/Redux_fun'
const store = configureStore();
const RNRedux = () => (
    <Provider store={store}>
        <Redux_fun/>
    </Provider>
)

import 'react-native-gesture-handler';

import {name as appName} from './app.json'; // import app.json file in same folder// take name mentioned in app.json as appName
AppRegistry.registerComponent(appName, () => Redux_fun); // Select main source code to run & fletch appName to it.