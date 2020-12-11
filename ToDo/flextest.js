import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

function Flextest(){

    const style = StyleSheet.create({
        container:{
            backgroundColor: '#ddd',
            paddingTop:38,
            flex:0.5,
            flexDirection:'row',
            alignItems:'stretch'
        },
        boxOne:{
            
            backgroundColor: 'red',
        },
        boxTwo:{
            backgroundColor: 'yellow',
        },
        innerContainer:{
            flex:1,
            flexDirection:'row',
            backgroundColor:'#f0f'
        }
    });


    return (

        <View style={style.container}>
            <Text style={style.boxOne}>Box One</Text>
            <Text style={style.boxTwo}>Box Two</Text>
            <View style={style.innerContainer}>
            
            <Text>mouse</Text>
            </View>
        </View>

    )

}

export default  Flextest;