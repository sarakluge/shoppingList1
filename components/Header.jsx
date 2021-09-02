import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';


const Header = (props) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: 'https://static-00.iconduck.com/assets.00/cart-shopping-list-icon-493x512-fh2rzzxm.png',}}/>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create ({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 60,
        padding: 15,
        backgroundColor: '#16827b'
    },

    image: {
        height: 50,
        width: 50,
        marginRight: 20,
    },
    text: {
        fontSize: 30,
        textAlign: 'center',
        color: '#ffffff',
    },
})

export default Header;