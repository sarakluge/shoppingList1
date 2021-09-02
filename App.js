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

  const addItem = (item) => {
    setItems(oldItems =>{
      return [...oldItems, {id: uuid_v4(), name: item}]
    });
  };

  const deleteItem = (id) => {
    setItems(oldItems => {
      return oldItems.filter(item => item.id != id);
    });
  }

  return (
    <View style={styles.container}>
      <Header title='Shopping list'/>
      <AddItemInput addItem={addItem} />
      <FlatList 
        data={items} 
        renderItem={({item}) => 
        <ListItem item={item} deleteItem={deleteItem} />}
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
