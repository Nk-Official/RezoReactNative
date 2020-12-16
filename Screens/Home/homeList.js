import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

const DATA = [
  {
    title: 'Main dishes',
    key: 1,
  },
  {
    title: 'Sides',
    key: 2,
  },
  {
    title: 'Drinks',
    key: 3,
  },
  {
    title: 'Desserts',
    key: 4,
  },
  {
    title: 'Main dishes',
    key: 5,
  },
  {
    title: 'Sides',
    key: 6,
  },
  {
    title: 'Drinks',
    key: 7,
  },
  {
    title: 'Desserts',
    key: 8,
  },
];

const Cell = ({item}) => (
  <View style={style.cell}>
    <TouchableOpacity>
      <View style={style.cellContentView}>
        <Image
          style={style.cellImage}
          source={require('../../Assets/Home/Appliance_Repair.png')}
        />
        <Text style={style.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  </View>
);

const HomeList = () => (
  <View style={style.container}>
    <ListOfCategories />
    {/* <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => <Cell item={item} />}
      //   renderSectionHeader={({ section: { title } }) => (
      //     <Text style={styles.header}>{title}</Text>
      //   )}
    /> */}
  </View>
);

const ListOfCategories = () => {
  return (
    <FlatList
      data={DATA}
      numColumns={2}
      renderItem={({item}) => <Cell item={item} />}
      columnWrapperStyle={style.flatlist}
    />
  );
};

const style = StyleSheet.create({
  container: {
    // flex: 1,
    // marginTop: Constants.statusBarHeight,
    marginHorizontal: 16,
    width: Dimensions.get('window').width,
    backgroundColor: 'transparent',
  },
  cell: {
    backgroundColor: 'white',
    // marginVertical: 8,
    borderRadius: 16,
    shadowColor: '#000', //'transparent',
    shadowOffset: {
      width: 0,
      height: 1,
    },

    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    aspectRatio: 1,
    flex: 0.45,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
  flatlist: {
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
  },
  cellContentView: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cellImage: {
    width: 40,
    height: 40,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// const Aview = ()=>{
//     return  (
//         <View style={{width: Dimensions.get('window').width,}}>
//             <Text>dbjhjhsdfhkhdkkjfdkjksjdkdfsk</Text>
//         </View>
//     )
// }

export default HomeList;