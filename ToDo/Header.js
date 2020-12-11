import  React, {useState} from "react";
import { View, Text, StyleSheet } from "react-native";

function HeaderSceneOne({title}){

    const style = StyleSheet.create({
        header:{
            alignItems:'center',
            backgroundColor: 'orange',
            // paddingTop:38,
            height:60
            // marginTop:40
        },
        title:{
            // alignSelf:'center',
            // alignContent:'center',
            fontSize:20,
            fontWeight:'bold',
            color:'white',
            textAlign:'center',
            paddingTop:20
        }
    });

    return (

        <View>
        {/* headerof screen */}
        <View style={style.header}>
        <Text style={style.title}>
        {title}
        </Text>
        </View>
        
        </View>

    )

}

export default HeaderSceneOne;