import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';

function Test1() {
  const [name, setName] = useState('Namrata');
  const [person, setPerson] = useState({name: 'Harjot', age: 24});

  const clickHandler = () => {
    let newname = name == 'Namrata' ? 'Abhishek' : 'Namrata';
    setName(newname);
  };

  const okClickHandler = () => {
    setPerson({name: 'dfsd', age: 24});
    // person.name = "Harjot"
    // let newname = 'Your friend name is \n ' + person.name + '\n and his age is \n' + person.age
  };

  const textinput = () => {
    return (
      <View>
        <TextInput />
      </View>
    );
  };

  return (
    <View style={style.container}>
      <View>
        <Text>Enter your name</Text>
        <TextInput
          style={style.textInput}
          multiline
          placeholder="name"
          onChangeText={(text) => {
            // setPerson({name:text,age:24})
          }}
        />
      </View>

      <Text style={{padding: 20}}>Confirm Your name</Text>
      <View style={style.body}>
        <Text style={{alignItems: 'center'}}>
          Your friend name is {person.name} and his age is {person.age}
        </Text>
      </View>
      <View style={style.okbuttonStyle}>
        <Button title="Yes its my name" onPress={okClickHandler}></Button>
      </View>
      <View style={style.declinebuttonStyle}>
        <Button title="No its not my name " onPress={clickHandler}></Button>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 2,
    // backgroundColor: 'red',
    // paddingTop: 300,
    // padding: (200,29,20,20) ,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    padding: 20,
    backgroundColor: 'pink',
    alignItems: 'center',
  },
  okbuttonStyle: {
    backgroundColor: 'green',
    alignItems: 'center',
    margin: 8,
  },
  declinebuttonStyle: {
    backgroundColor: 'red',
  },
  textInput: {
    borderColor: 'grey',
    borderWidth: 1,
    // height:30,
    margin: 8,
  },
});
export default Test1;
