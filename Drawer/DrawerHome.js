import React from 'react';
import {View, Text, Button, Image, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerSettings from './DrawerSettings';

const DrawerHome = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink',
      }}>
      <Text style={{textAlign: 'center'}}> I am Drawer Home </Text>
      <Text>mbdmvbnbdnbbvmndbvnmbm</Text>
      <Button title="press me" onPress={() => navigation.push('Settings')} />
    </View>
  );
};

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={DrawerHome} />
      <Stack.Screen name="Settings" component={DrawerSettings} />
    </Stack.Navigator>
  );
};

export default HomeStack;
