import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text, Button} from 'react-native';
import AboutTabBar from './AboutTabBar';

function HomeTabBar({navigation}) {
  return (
    <View style={{marginTop: 40}}>
      <Text>Hey I am Tab bar home</Text>
      <Button title="Press me" onPress={() => navigation.push('abouts')} />
    </View>
  );
}

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeTabBar} />
      <HomeStack.Screen name="abouts" component={AboutTabBar} />
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;
