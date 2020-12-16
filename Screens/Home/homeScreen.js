import React from 'react';
import {
  View,
  Image,
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
    flex: 0.4,
    // height:'100%',
  },
  list: {
    // position: 'absolute',
    marginTop: 200,
    // left: '30%',
    // zIndex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 200 - 100,
    // flex: 1,
  },
});

export default HomeScreen;
