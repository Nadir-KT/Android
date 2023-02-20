import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class QN_Bank extends Component 
{
    render(){return(
        <View style={styles.container}>
            <Text style={styles.text}>QN Bank</Text>
        </View>
    )}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue'
    },
    text: {fontSize: 24, fontWeight: 'bold', color: 'white'}
})