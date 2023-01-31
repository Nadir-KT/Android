import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Profile extends Component 
{
    render(){return(
        <View style={styles.container}>
            <Text style={styles.profileText}>Hi this is profile page</Text>
        </View>
    )}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green'
    },
    profileText: {fontSize: 24, fontWeight: 'bold', color: 'white'}
})