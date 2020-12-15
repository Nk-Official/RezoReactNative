/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
// import IntroScreenPager from './Screens/Intro/IntroScreenNavigator';

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
      <SafeAreaView style={{backgroundColor: 'pink'}}>
        {/* <IntroScreenPager></IntroScreenPager> */}
        <View style={{flex:1, backgroundColor: 'red'}} />
      </SafeAreaView>
    </>
  );
};

export default App;
