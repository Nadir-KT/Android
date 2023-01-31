import { StatusBar } from 'expo-status-bar';
import React, { Component, useEffect, useState, useContext, useRef, useReducer } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const themes = {
    light:{color:'red',size:20},
    dark:{color:'yellow',size:20}
};
const ThemeContest = React.createContext(themes.light);
function Toolbar(props){
    return(
        <View>
            <ThemedButton/>
        </View>
    );
}
function ThemedButton(){
    const theme = useContext(ThemeContest);
    return(
        <View style={styles.container}>
            <Text style={{fontSize:theme.size,color:theme.color}}>
                I'm styled by theme context!
            </Text>
            <StatusBar style="auto"/>
        </View>
    );
}
export default function fun()
{
    return(
        <View style={styles.container}>
            <ThemeContest.Provider value={themes.light}>
                <Toolbar/>
            </ThemeContest.Provider>
            <StatusBar style="auto"/>
        </View>
    );
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
    }
});