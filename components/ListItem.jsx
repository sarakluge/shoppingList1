import React from 'react';
import { useState } from 'react';
import { TouchableOpacity, View, StyleSheet, Text, CheckBox } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const ListItem = ({item, deleteItem}) => {

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
                <Icon 
                name="delete" 
                size={20} 
                color="#b8d9d7"
                onPress={() => deleteItem(item.id)} />
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