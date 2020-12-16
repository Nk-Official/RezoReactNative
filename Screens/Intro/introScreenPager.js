import 'react-native-gesture-handler';
import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import IntroScreen from './introScreen';
import ViewPager from '@react-native-community/viewpager';
// import {useNavigation} from '@react-navigation/native';
import {StackActions, NavigationActions} from '@react-navigation/native';

const IntroScreenPager = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ViewPager style={styles.viewPager} initialPage={0}>
        {/* <View style={styles.page} key="1">
          <Text>First page</Text>
          <Text>Swipe ➡️</Text>
        </View> */}
        <IntroScreen
          key="1"
          onSkipAction={() => {
            navigation.navigate('tabbarRezo');
            navigation.reset({
              index: 0,
              routes: [{name: 'tabbarRezo'}],
            });
          }}
        />
        <IntroScreen
          key="2"
          onSkipAction={() => {
            navigation.navigate('tabbarRezo');
            navigation.reset({
              index: 0,
              routes: [{name: 'tabbarRezo'}],
            });
          }}
        />
        <IntroScreen
          key="3"
          onSkipAction={() => {
            navigation.navigate('tabbarRezo');
            navigation.reset({
              index: 0,
              routes: [{name: 'tabbarRezo'}],
            });
          }}
        />
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
