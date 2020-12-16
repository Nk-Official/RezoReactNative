/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';
import IntroScreenNavigator from './Screens/Intro/IntroScreenNavigator.js';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import HomeScreen from './Screens/Home/homeScreen';
import Splash from "./Screens/Splash/Splash";
// import {SafeAreaView} from 'react-native-safe-area-view'; //https://github.com/react-navigation/react-native-safe-area-view

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaProvider>
      <Splash></Splash>
        {/* <IntroScreenNavigator /> */}
        {/* <HomeScreen></HomeScreen> */}
      </SafeAreaProvider>
    </>
  );
};

export default App;
