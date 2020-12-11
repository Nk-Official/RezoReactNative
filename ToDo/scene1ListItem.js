import React from 'react';
import {View,StyleSheet,Text,TouchableOpacity} from 'react-native';


const style = StyleSheet.create({
    cell:{
        padding:20,
        borderColor:'#bbb',
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:10,
        margin:16,
    }
});

const Scene1ListItem = ({item,onPress})=>{
    return (
        <TouchableOpacity onPress={()=>{
            onPress(item)}} >
        <View style={style.cell}>
            <Text>{item.text}</Text>
        </View>
        </TouchableOpacity>
    )
}

export default  Scene1ListItem;

