import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import IntroScreen from './introScreen';
import ViewPager from '@react-native-community/viewpager';
import {HomeScreen} from '../Home/homeScreen';

const Stack = createStackNavigator();

// const IntroScreenNavigator = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Intro" component={IntroScreenPager} />
//         <Stack.Screen name="Home" component={HomeScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

const IntroScreenPager = () => {
  return (
    <View style={{flex: 1}}>
      <ViewPager style={styles.viewPager} initialPage={0}>
        {/* <View style={styles.page} key="1">
          <Text>First page</Text>
          <Text>Swipe ➡️</Text>
        </View> */}
        <IntroScreen key="1" />
        <IntroScreen key="2" />
        <IntroScreen key="3" />
      </ViewPager>
    </View>
  );
};

const styles = StyleSheet.create({
  viewPager: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default IntroScreenPager;
// export default IntroScreenNavigator;
