import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Stack from './navigators/main-navigator';
import { Provider } from 'react-redux';
import { store } from './root/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    </Provider>
  );
};
export default App;
