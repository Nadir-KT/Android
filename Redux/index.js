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
import UI from './src/UI'

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

import {name as appName} from './app.json'; // import app.json file in same folder// take name mentioned in app.json as appName
AppRegistry.registerComponent(appName, () => UI); // Select main source code to run & fletch appName to it.