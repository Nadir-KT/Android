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
        <View style={{  }}>
            <TextInput style={{ width: 311, height: 51, marginTop: 32, backgroundColor: '#062E40', borderColor: '#007345', borderWidth: 1, borderRadius: 8, fontSize: 16 }}
          placeholder='Full name' placeholderTextColor={'#446270'}></TextInput>
        </View>
    )
}