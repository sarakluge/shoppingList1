import React from 'react';
import { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

const AddItemInput = ({addItem}) => {

    const [text, setText] = useState("");

    const onChange = (input) => setText(input);

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} 
            placeholder="Write a item here"
            onChangeText={onChange}></TextInput>
            <TouchableOpacity style={styles.button}
            onPress={() => addItem(text)}>
                <Icon name="add" size={20} color="white" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 8, 
        borderWidth: 1,
        borderColor: '#16827b',
    },

    input: {
        fontSize: 20,
        padding: 5,
    },

    button: {
        backgroundColor: '#16827b',
        borderRadius: 50,
        padding: 5,
    },

})

export default AddItemInput;