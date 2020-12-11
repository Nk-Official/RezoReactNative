import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, Button, Image, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import { createAppContainer } from '@react-navigation/native';

import ReviewHomeScreen from './ReviewHomeScreen.js';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Review"
          component={ReviewHomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          initialParam={{title: 'ABCD'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({route, navigation}) => {
  const {title} = route.params;
  return (
    <Button
      title={title}
      onPress={
        () => navigation.goBack() //navigation.push('Review')//for multiple push on same screen
      }
    />
  );
};

// export default createAppContainer(createStackNavigator(screens))
export default MyStack;
