import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class About extends Component 
{
    render(){return(
        <View style={styles.container}>
            <Text style={styles.text}>Hi this is About Us page</Text>
        </View>
    )}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellow'
    },
    text: {fontSize: 24, fontWeight: 'bold', color: 'white'}
})