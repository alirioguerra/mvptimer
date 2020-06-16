import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './navigation';
import { StatusBar } from 'react-native';

if (__DEV__) {
  import('../ReactotronConfig').then(() =>
    console.log('Reactotron Configured'),
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" hidden />
      <Navigation />
    </NavigationContainer>
  );
};

export default App;
