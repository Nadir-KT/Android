import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, FlatList, ScrollView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default function Course({navigation}) {
    const [data] = useState([
        { name: 'Biology' },
        { name: 'Physics' },
        { name: 'Chemistry' },
        { name: 'Technology' },
        { name: 'Engineering' },
        { name: 'Mathematics' },
    ]);
    return (
        <View style={{ flex: 1, }}>
            <View style={{ backgroundColor: '#00202F' }}>
                <View style={{ marginTop: 40, marginHorizontal: 32 }}>
                    <TouchableHighlight style={{ width: 32, height: 32, borderColor: '#D5D5D5', borderRadius: 4, borderWidth: 1, alignItems: 'center', justifyContent: 'center' }}
                        underlayColor='red'
                        onPress={() => navigation.navigate('')}
                    >
                        <Text style={{ fontSize: 18, fontWeight: 'normal', color: '#00C458' }}></Text>
                    </TouchableHighlight>
                    <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#FFFFFF', marginTop: 48 }}>Biology</Text>
                    <Text style={{ fontSize: 10, fontWeight: 'normal', color: '#00C458', marginTop: 8 }}>12 Chapters</Text>
                    <Text style={{ fontSize: 10, fontWeight: 'normal', color: '#00C458', marginTop: 8 }}>124 hours</Text>
                </View>
            </View>
            <View style={{ flex: 1, marginTop: 24, marginHorizontal: 24 }}>
                <FlatList
                    data={data}
                    renderItem={({ item }) =>
                        <TouchableHighlight style={{ height: 115, borderColor: '#000000D9', borderRadius: 2, borderWidth: 1, alignItems: 'center', justifyContent: 'center', marginVertical: 8 }}
                            underlayColor='red'
                            badgeDotColors={'#446270'}
                            onPress={() => navigation.navigate('Tab')}
                        >
                            <Text style={{ marginHorizontal: 8 }}>{item.name}</Text>
                        </TouchableHighlight>}
                />
            </View>
        </View>
    )
}