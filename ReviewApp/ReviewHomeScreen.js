import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, Button, Image, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from './NavigationStackReviewApp';

const ReviewHomeScreen = ({navigation}) => {
  const style = StyleSheet.create({
    outerView: {
      padding: 20,
      margin: 16,
    },
    detailNavButton: {
      margin: 20,
    },
  });
  return (
    // <NavigationContainer>

    <View style={{marginTop: 40}}>
      <Text>Home screen</Text>
      <Button
        style={style.detailNavButton}
        title="Details"
        onPress={() =>
          navigation.navigate('Home', {
            title: 'Namrata khanduri',
          })
        }
      />
    </View>

    // </NavigationContainer>
  );
};

export default ReviewHomeScreen;
