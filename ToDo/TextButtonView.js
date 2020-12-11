import React, {useState} from "react";
import {View, TextInput, Button, StyleSheet,Keyboard, Image} from 'react-native';

function TextButtonView({onSavePress}){

    const [text, setText] = useState('');
    const [textInputValue, setTextInputValue] = useState('');

    const style = StyleSheet.create({
        outerView:{
            padding:20,
            margin:16,
        },
        textView:{
            padding:15,
            borderBottomColor:'#bbb',
            borderBottomWidth:1,
        },
        buttonView:
        {
            backgroundColor:'orange',
            marginTop:20,
            flexDirection:"row",
            alignItems:'center',
            justifyContent:"center"
        }   
        ,
        noodleIcon:{
            width:30,
            height:30,
            marginLeft:12
        },
        buttonStyle:{
            backgroundColor: '#FF0000'
        }
    });


    return (
        <View style={style.outerView}>

        <TextInput
        style={style.textView}
        onChangeText={(text)=>setText(text)}
        placeholder='Type here'
        value={text}
        >
        </TextInput>
        <View style={style.buttonView}>
        <Image 
        source={require('../Icons/nodles.png')}
        style={style.noodleIcon}
        color='red'
        ></Image>
        <Button 
        title='Add ToDo' 
        color='white'
        onPress={
        ()=>{
            Keyboard.dismiss()
            onSavePress(text)
            setText('')
        }
        
        }
    >
    </Button>
        </View>
    
        </View>


    )

}



export default  TextButtonView;