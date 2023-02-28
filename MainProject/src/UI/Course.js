import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default function Course({ navigation }) {
    const [data] = useState([
        { name: 'Biology' },
        { name: 'Physics' },
        { name: 'Chemistry' },
        { name: 'Technology' },
        { name: 'Engineering' },
        { name: 'Mathematics' },
    ]);
    return (
        <View style={{ flex: 1, height: '100%' }}>
            <View style={{ backgroundColor: '#00202F', height: 238 }}>
                <View style={{ marginTop: 40, marginHorizontal: 32 }}>
                    <TouchableHighlight style={{ width: 32, height: 32, borderColor: '#D5D5D5', borderRadius: 4, borderWidth: 1, alignItems: 'center', justifyContent: 'center' }}
                        underlayColor='red'
                        onPress={() => navigation.navigate('')}
                    >
                        <MaterialIcons name="chevron-left" size={25} color={'#00C458'} />
                    </TouchableHighlight>
                    <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#FFFFFF', marginTop: 48 }}>Biology</Text>
                    <View style={{ flexDirection: 'row', marginTop: 8, alignItems: 'center' }}>
                        <MaterialIcons name="circle" size={12} color={'#00C458'} style={{}} />
                        <Text style={{ fontSize: 10, fontWeight: 'normal', color: '#00C458', marginLeft: 6 }}>12 Chapters</Text>
                        <MaterialIcons name="circle" size={12} color={'#00C458'} style={{ marginLeft: 27 }} />
                        <Text style={{ fontSize: 10, fontWeight: 'normal', color: '#00C458', marginLeft: 6 }}>124 hours</Text>
                    </View>
                </View>
            </View>
            <View style={{ top: 220, width: '100%', bottom: 0, position: 'absolute' }}>
                <FlatList
                    data={data}
                    renderItem={({ item }) =>
                        <TouchableOpacity style={{ height: 115, marginHorizontal: 24, borderColor: '#000000D9', borderRadius: 2, borderWidth: 1, justifyContent: 'center', marginVertical: 8 }}
                            underlayColor='red'
                            onPress={() => navigation.navigate('Tab')}
                        >
                            <Text style={{ marginLeft: 20 }}>{item.name}</Text>
                            <View style={{ flexDirection: 'row', marginTop: 16, alignItems: 'center', marginLeft: 20 }}>
                                <MaterialIcons name="circle" size={12} color={'#00C458'} style={{}} />
                                <Text style={{ fontSize: 10, fontWeight: 'normal', color: '#00C458', marginLeft: 6 }}>12 Chapters</Text>
                                <MaterialIcons name="circle" size={12} color={'#00C458'} style={{ marginLeft: 24 }} />
                                <Text style={{ fontSize: 10, fontWeight: 'normal', color: '#00C458', marginLeft: 6 }}>124 hours</Text>
                            </View>
                        </TouchableOpacity>}
                />
            </View>
        </View>
    )
}