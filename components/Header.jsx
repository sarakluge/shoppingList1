import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const Header = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create ({
    container: {
        height: 60,
        padding: 15,
        backgroundColor: '#16827b'
    },
    text: {
        fontSize: 30,
        textAlign: 'center',
        color: '#ffffff',
    },
})

export default Header;