import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Home extends Component 
{
    render(){return(
        <View style={styles.container}>
            <Text style={styles.homeText}>Hi this is home page</Text>
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
    homeText: {fontSize: 24, fontWeight: 'bold', color: 'white'}
})