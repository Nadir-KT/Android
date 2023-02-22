import { StatusBar } from 'expo-status-bar';
import React, { Component, useEffect, useState, useContext, useRef, useReducer } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function fun()
{
    const [count,setCount] = useState(0)
    //useEffect(()=>{setInterval(()=>{},interval);});
    useEffect(()=>{setInterval(()=>{setCount(count+10)},10000);});
    const onPress=()=>setCount(count=>count+1)
    return(
        <View style={{flex:1,backgroundColor:'#fff',alignItems:'center',justifyContent:'center'}}>
            <Text>Count: {count}</Text>
            <TouchableOpacity onPress={onPress}>
                <Text>Press!</Text>
            </TouchableOpacity>
            <StatusBar style="auto"/>
        </View>
    );
}