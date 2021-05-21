import React, { useEffect } from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './src/views/Home'

const Drawer = createDrawerNavigator()
const App = () => {

  useEffect(() => {
    async function changeScreenOrientation() {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
    }
    changeScreenOrientation()
  })

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" screenOptions={{ gestureEnabled: false }}>
        <Drawer.Screen name="Home" component={Home} />
      </Drawer.Navigator>
    </NavigationContainer>
  );

}

export default App