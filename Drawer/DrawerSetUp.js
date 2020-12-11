import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeStack from './DrawerHome';
import DrawerSettings from './DrawerSettings';

const Drawer = createDrawerNavigator();

const DrawerSetUp = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="Settings" component={DrawerSettings} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default DrawerSetUp;
