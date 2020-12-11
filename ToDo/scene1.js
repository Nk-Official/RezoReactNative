import  React, {useState} from "react";
import { SafeAreaView, View, Text, StyleSheet , FlatList, ScrollView, Alert, TouchableWithoutFeedback, Keyboard} from "react-native";
import HeaderSceneOne from './Header.js'
import Scene1ListItem from './scene1ListItem.js'
import TextButtonView from "./TextButtonView.js";
import Flextest from './flextest.js'


let count = 6;

function SceneOne(){

    const [todos,setTodods] = useState([
        {text:'buy coffee',key:"1"},
        {text:'create an app',key:"2"},
        {text:'play on the switch',key:"3"},
        
    ]);


    
    const style = StyleSheet.create({
        list:{
            paddingTop:100
        }
    });

    const onPresshandle = (item)=>{
        
        setTodods((prevState)=>{
            return prevState.filter((val)=>(val.key != item.key))}
        )
        // Both are same thing

        // setTodods((prevState)=>(
        //      prevState.filter((val)=>(val.key != item.key)))
        // )
    }

    function saveBtnClickHandle(item){
        if (item.length < 3){
            Alert.alert('Oops!!','To do must be over 3 char long')
            return
        }
        let length = todos.length+1;
        count = count+1;
        const itemDict = {text:item,key:count.toString()}
        console.log(itemDict);  
        // setTodods((prevState)=> prevState+[itemDict] )
        setTodods([itemDict,...todos])
    }
    

    return (
        // <Flextest></Flextest>

        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss()
        }}>
            <SafeAreaView>
            {/* headerof screen */}
                <HeaderSceneOne title={'ToDo\'s'}>
                </HeaderSceneOne>
                <TextButtonView onSavePress = {saveBtnClickHandle}></TextButtonView>
                {/* <ScrollView>
                {jsh.map((user)=>{
                    console.log(user)
                    return (
                    <View  key = {user.id}>
                        <Text>User name is {user.text} and his age is </Text>
                    </View>)}
                )}
                </ScrollView> */}

                {/* List */}
                <FlatList  data={todos}
                renderItem={({ item }) => (
                    
                    <Scene1ListItem item={item} onPress={onPresshandle}></Scene1ListItem>
                    
                )}>
                
                </FlatList>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )


   
}

export default SceneOne;