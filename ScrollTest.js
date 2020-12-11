import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const scrollTest = () => {
  var [users, setUsers] = useState([
    {key: '1', name: 'Namrata', age: 24},
    {key: '2', name: 'Harjot', age: 24},
    {key: '3', name: 'Namrata', age: 24},
    {key: '5', name: 'Chuzzaa', age: 24},
    {key: '6', name: 'Chuppaa', age: 24},
    {key: '4', name: 'Honey', age: 24},
    {key: '7', name: 'babuu', age: 24},
    {key: '8', name: 'nonaa', age: 24},
  ]);

  const style = StyleSheet.create({
    listStyle: {
      marginTop: 100,
      marginLeft: 20,
      marginRight: 20,
    },
    cellStyle: {
      padding: 50,
      margin: 5,
      backgroundColor: 'green',
    },
  });

  return (
    <View>
      <FlatList
        // numColumns={2}
        data={users}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              setUsers((prevperson) => {
                console.log(prevperson);
                console.log(item);
                prevperson.filter(
                  // console.log(item.name)
                  (person) => person.name != item.name,
                );
                console.log(prevperson);
              });
            }}>
            <View style={style.cellStyle}>
              <Text>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
    // <ScrollView style={style.listStyle}>
    // {users.map((user)=>{
    //     return (
    //     <View  key = {user.id} style={style.cellStyle}>
    //         <Text style={{color:'white'}}>User name is {user.name} and his age is {user.age}
    //         </Text>
    //     </View>)}
    // )}
    // </ScrollView>
  );
};

export default scrollTest;
