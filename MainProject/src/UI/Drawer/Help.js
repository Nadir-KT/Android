import React, { Component, useState } from 'react';
import { TextInput, Text, View, FlatList, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default function Help ({ navigation }) {
    const [data] = useState([
        { name: 'Biology' },
        { name: 'Physics' },
        { name: 'Chemistry' },
        { name: 'Technology' },
        { name: 'Engineering' },
        { name: 'Mathematics' },
    ]);
    return (
        <View style={{ width: 311, height: 48, marginHorizontal: 32, backgroundColor: '#062E40', borderColor: '#13394A', borderWidth: 1, borderRadius: 4,  flexDirection:'row' }}>
            <TextInput 
          placeholder='Ask a question?' placeholderTextColor={'#446270'} style={{fontSize: 12}} ></TextInput>
          <TouchableOpacity style={{width: 52, height: 32, backgroundColor: 'white', alignSelf: 'center', backgroundColor: '#FFFFFF', borderWidth: 1, borderRadius: 4, position: 'absolute', right: 8, justifyContent:'center', alignItems:'center'}}>
            <Text style={{ color: 'black', fontSize:10}}>Post</Text>
          </TouchableOpacity>
        </View>
    )
}