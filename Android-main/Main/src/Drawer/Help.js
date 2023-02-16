import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Help extends Component 
{
    render(){return(
        <View style={styles.container}>
            <Text style={styles.text}>Hi this is Help page</Text>
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