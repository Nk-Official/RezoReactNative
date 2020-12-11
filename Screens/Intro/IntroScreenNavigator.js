import React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
// import {createStackNavigator} from '@react-navigation/stack';
import IntroScreen from './introScreen';
import ViewPager from '@react-native-community/viewpager';

// const Stack = createStackNavigator();

// const IntroScreenNavigator = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="IntroFirst" component={IntroScreen} />
//       <Stack.Screen name="IntroSecond" component={IntroScreen} />
//       <Stack.Screen name="IntroThird" component={IntroScreen} />
//     </Stack.Navigator>
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
