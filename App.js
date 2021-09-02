import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import { v4 as uuid_v4 } from "uuid";
import AddItemInput from './components/AddItemInput';
import Header from './components/Header';
import ListItem from './components/ListItem';

export default function App() {

  const [items, setItems] = useState([
    {id: uuid_v4(), name: 'Tomato'},
    {id: uuid_v4(), name: 'Milk'},
    {id: uuid_v4(), name: 'Ham'},
    {id: uuid_v4(), name: 'Carrot'}
  ]);

  return (
    <View style={styles.container}>
      <Header title='Shopping list'/>
      <AddItemInput />
      <FlatList 
        data={items} 
        renderItem={({item}) => <ListItem item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0fffe',
    paddingTop: 60,
  },
  text: {
    color: 'blue',
    fontSize: 20,
  },
});
