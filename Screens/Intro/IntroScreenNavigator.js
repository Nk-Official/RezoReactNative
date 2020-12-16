import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Color} from '../../Helper/Color/color';
import TabBarRezo from '../TabBar/tabBarRezo';
import IntroScreenPager from './introScreenPager';

const Stack = createStackNavigator();

const IntroScreenNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="IntroFirst"
          component={IntroScreenPager}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="tabbarRezo"
          component={TabBarRezo}
          options={{
            headerShown: true,
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: Color.theme,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default IntroScreenNavigator;
