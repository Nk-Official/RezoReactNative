import React from 'react';
import { View,Text, Button, Image, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';

const DrawerSettings = ()=>{
    return (<View style={
        {
            flex:1,
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:'blue'}
        }>
        <Text style={{textAlign:'center'} } > I am Drawer Settings </Text>
        </View>
        )
}
export default DrawerSettings;