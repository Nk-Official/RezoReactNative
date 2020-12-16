import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Home/homeScreen';
import {Color} from '../../Helper/Color/color';

const Tab = createBottomTabNavigator();
//https://reactnavigation.org/docs/tab-based-navigation/
const TabBarRezo = () => {
  return (
    <Tab.Navigator
      //   screenOptions={({route}) => ({
      //     tabBarIcon: ({focused, color, size}) => {
      //       let iconName;

      //       if (route.name === 'Home') {
      //         iconName = focused
      //           ? 'ios-information-circle'
      //           : 'ios-information-circle-outline';
      //       } else if (route.name === 'Settings') {
      //         iconName = focused ? 'ios-list-box' : 'ios-list';
      //       }

      //       // You can return any component that you like here!
      //       return <Ionicons name={iconName} size={size} color={color} />;
      //     },
      //   })}
      tabBarOptions={{
        activeTintColor: Color.tabBarSelectedColor,
        inactiveTintColor: Color.tabBarUnselectedColor,
        style: {
          backgroundColor: Color.theme,
        },
      }}>
      <Tab.Screen name="Favorites" component={HomeScreen} />
      <Tab.Screen name="Near Me" component={HomeScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Notifications" component={HomeScreen} />
      <Tab.Screen name="Settings" component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default TabBarRezo;
