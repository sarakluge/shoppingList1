import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import { set } from 'react-native-reanimated';
import { v4 as uuid_v4 } from "uuid";
import AddItemInput from './components/AddItemInput';
import Header from './components/Header';
import ListItem from './components/ListItem';

export default function App() {

  const [items, setItems] = useState([
    {id: uuid_v4(), name: 'Tomato', qty: 1},
    {id: uuid_v4(), name: 'Milk', qty: 1},
    {id: uuid_v4(), name: 'Ham', qty: 1},
    {id: uuid_v4(), name: 'Carrot', qty: 1}
  ]);

  const addItem = (item) => {
    setItems(prevItems =>{
      return [...prevItems, {id: uuid_v4(), name: item, qty: 1}]
    });
  };

  const deleteItem = (id) => {
    setItems(oldItems => {
      return oldItems.filter(item => item.id != id);
    });
  };

  const handleQtyIncrease = (id) => {
    
    const index = items.findIndex(item => item.id === id);

    //copy of items
    var newItems = [...items]

    //Update item qty property.
    newItems[index].qty = newItems[index].qty + 1

    setItems(newItems);
  };

  const handleQtyDecrease = (id) => {

    const index = items.findIndex(item => item.id === id);

    //copy of items
    var newItems = [...items]

    //Update item qty property.
    if (newItems[index].qty > 1) {
      newItems[index].qty = newItems[index].qty - 1
    }
    
    setItems(newItems);

  };

  return (
    <View style={styles.container}>
      <Header title='Shopping list'/>
      <AddItemInput addItem={addItem} />
      <FlatList 
        data={items} 
        renderItem={({item}) => 
        <ListItem 
          item={item} 
          deleteItem={deleteItem} 
          handleQtyIncrease={handleQtyIncrease}
          handleQtyDecrease={handleQtyDecrease} 
        />}
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
