import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';
import HomeList from './homeList';
const HomeScreen = () => {
  return (
    <View style={style.container}>
      <ImageBackground
        source={require('../../Assets/Home/client_home_background.png')}
        style={style.imagestyle}>
        <View style={style.list}>
          <HomeList />
        </View>
      </ImageBackground>
    </View>
  );
};

const style = StyleSheet.create({
  container: {flex: 1, position: 'relative', backgroundColor: 'white'},
  imagestyle: {
    width: '100%', //Dimensions.get('window').width,
    // resizeMode: 'cover',
    flex: 1,
    height: '35%',
  },
  list: {
    // position: 'absolute',
    marginTop: '40%',
    backgroundColor: 'transparent',
  },
});

export default HomeScreen;
