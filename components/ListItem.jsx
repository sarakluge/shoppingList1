import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const ListItem = (props) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.listRow}>
                <Text style={styles.text}>{props.item.name}</Text>
                <Icon name="delete" size={20} color="#b8d9d7" />
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

    text: {
        fontSize: 20,
    },

})

export default ListItem;