/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Razorpay from './src/razorpay';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Razorpay);
