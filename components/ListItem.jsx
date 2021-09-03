import React from 'react';
import { useState } from 'react';
import { TouchableOpacity, View, StyleSheet, Text, CheckBox } from 'react-native';
//import Icon from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ListItem = ({item, deleteItem, handleQtyIncrease, handleQtyDecrease}) => {

    const [isDone, setIsDone] = useState(false);

    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.listRow}>
                <View style={styles.leftItems}>
                    <CheckBox 
                    style={styles.checkBox}
                    value={isDone}
                    onValueChange={setIsDone} />
                    <Text style={styles.text}>{item.name}</Text>
                </View>
                <View style={styles.rightItems}>
                    <View style={styles.qtyContainer}>
                        <Icon 
                        name="chevron-left"
                        size={30}
                        color="#16827b" 
                        onPress={() => handleQtyDecrease(item.id)}/>
                        <Text>{item.qty}</Text>
                        <Icon 
                        name="chevron-right"
                        size={30}
                        color="#16827b" 
                        onPress={() => handleQtyIncrease(item.id)}/>
                    </View>
                    <Icon 
                    name="delete-forever" 
                    size={30} 
                    color="#b8d9d7"
                    onPress={() => deleteItem(item.id)} />
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 5,
        borderBottomWidth: 1,
        borderColor: '#b8d9d7',
    },

    listRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    leftItems: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    rightItems: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    qtyContainer: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-evenly',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#b8d9d7',
        borderRadius: 5,
        width: 70,

    },

    checkBox: {
        height: 20,
        width: 20,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#16827b',
        borderRadius: 5,
        marginRight: 15,
    },

    text: {
        fontSize: 20,
    },

})

export default ListItem;