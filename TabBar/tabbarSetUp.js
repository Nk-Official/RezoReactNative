import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeStackScreen from './homeTabBar';
import AboutTabBar from './AboutTabBar';

const Tab = createBottomTabNavigator();

export default function TabbarSetUp() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({route}) => {}}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="About" component={AboutTabBar} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
