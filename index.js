/**
 * @format
 */
import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

const AppWithGesture = () => (
  <GestureHandlerRootView>
    <App />
  </GestureHandlerRootView>
);

AppRegistry.registerComponent(appName, () => AppWithGesture);
