import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Records extends Component 
{
    render(){return(
        <View style={styles.container}>
            <Text style={styles.text}>Hi this is Records page</Text>
        </View>
    )}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#123'
    },
    text: {fontSize: 24, fontWeight: 'bold', color: 'white'}
})