import 'react-native-gesture-handler';
import React from 'react';
import {View, StyleSheet, Button, Image, Dimensions} from 'react-native';

const ChooseLoginUserType = () => {
  return (
    <View>
      <View>
        <Button title="Service Provider" />
        <Button title="Client" />
      </View>
    </View>
  );
};

export default ChooseLoginUserType;
