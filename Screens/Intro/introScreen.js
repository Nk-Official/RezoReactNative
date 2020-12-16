import 'react-native-gesture-handler';
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const IntroScreen = ({onSkipAction}) => {
  return (
    <View style={style.container}>
      <CustomSkipButton onPress={onSkipAction} />
      <ImageView />
      <TextView />
    </View>
  );
};

const CustomSkipButton = ({onPress}) => {
  return (
    <View style={style.skipButtonView}>
      <TouchableOpacity onPress={onPress}>
        <Text style={style.skipText}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
};
const ImageView = () => {
  return (
    <View style={style.imageContainer}>
      <Image
        style={style.imagestyle}
        source={require('../../Assets/Intro/img_intro_one.png')}
      />
    </View>
  );
};
const TextView = () => {
  return (
    <View style={style.textView}>
      <Text style={style.welcomeText}>WELCOME TO REZO</Text>
      <Text style={style.welcomeText}>
        Platform designed to allow service providers to showcase their services
        and clients to look for a particular service provider.
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    // justifyContent: 'center',
    paddingTop: 50,
  },
  skipButtonView: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    paddingRight: 20,
  },
  skipText: {
    fontSize: 15,
    color: 'gray',
    textDecorationLine: 'underline',
  },
  imagestyle: {
    width: Dimensions.get('window').width,
    flex: 1,
  },
  imageContainer: {
    height: Dimensions.get('window').height / 2,
    // alignItems: 'center',
    padding: 0,
    // justifyContent: 'center',
  },
  textView: {
    // flexDirection:'column',
    // bottom: -100
    alignSelf: 'stretch',
    // top:200
  },
  welcomeText: {
    alignItems: 'center',
    padding: 20,
    textAlign: 'center',
    bottom: 20,
  },
});

export default IntroScreen;
