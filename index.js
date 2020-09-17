/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

const HeadlessTask = async () => {
  console.log('cuongtd');
};

AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerHeadlessTask('HeadlessBackground', () => HeadlessTask);
