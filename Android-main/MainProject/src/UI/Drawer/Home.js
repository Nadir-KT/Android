import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, FlatList, ScrollView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default function Home({ navigation }) {
    const [open2, setOpen2] = useState(false);
    const [value2, setValue2] = useState(null);
    const [items2, setItems2] = useState([
        { label: 'Trivandrum', value: '1' },
        { label: 'Cochin', value: '2' },
        { label: 'Calicut', value: '3' }
    ]);
    const [data] = useState([
        { name: 'Biology' },
        { name: 'Physics' },
        { name: 'Chemistry' },
        { name: 'Technology' },
        { name: 'Engineering' },
        { name: 'Mathematics' },
    ]);
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', marginTop: 40, marginHorizontal: 32, justifyContent: 'space-between' }}>
                <TouchableHighlight style={{ width: 32, height: 32, borderColor: '#D5D5D5', borderRadius: 4, borderWidth: 1, alignItems: 'center', justifyContent: 'center' }}
                    underlayColor='red'
                    onPress={() => navigation.navigate('Course')}
                >
                    <Text style={{ fontSize: 18, fontWeight: 'normal', color: '#00C458' }}></Text>
                </TouchableHighlight>
                <TouchableHighlight style={{ width: 75, height: 32, borderColor: '#00C458', borderRadius: 4, borderWidth: 1, alignItems: 'center', justifyContent: 'center' }}
                    underlayColor='red'
                    badgeDotColors={'#446270'}
                    onPress={() => navigation.navigate('Course')}
                >
                    <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#00C458' }}>Classes</Text>
                </TouchableHighlight>
            </View>
            <View style={{ marginTop: 53, marginHorizontal: 32 }}>
                <Text style={{ fontSize: 12, fontWeight: 'normal', color: '#002333' }}>Goodmorning</Text>
                <Text style={{ fontSize: 24, fontWeight: 'normal', color: '#002333', marginTop: 2 }}>Aaron Taylor</Text>
                <DropDownPicker style={{ height: 64, marginTop: 37, backgroundColor: '#062E40', borderColor: '#007345', fontSize: 16, borderWidth: 1, borderRadius: 8 }}
                    open={open2}
                    value={value2}
                    items={items2}
                    setOpen={setOpen2}
                    setValue={setValue2}
                    setItems={setItems2}

                    //theme="DARK"
                    placeholder='Select district' placeholderTextColor={'#446270'}
                //multiple={true}
                //mode="BADGE"
                //badgeColors={'#446270'}
                //badgeDotColors={'#446270'}
                />
            </View>
            <View style={{ marginTop: 24, marginLeft: 24 }}>
                <FlatList horizontal={true}
                    data={data}
                    renderItem={({ item }) => <TouchableHighlight style={{ height: 39, borderColor: '#00C458', borderRadius: 4, borderWidth: 1, alignItems: 'center', justifyContent: 'center', marginHorizontal: 8 }}
                    underlayColor='red'
                            badgeDotColors={'#446270'}
                            onPress={() => navigation.navigate('Course')}
                            >
                        <Text style={{ marginHorizontal: 8 }}>{item.name}</Text>
                        </TouchableHighlight>}
                />
            </View>
            <Text style={{ marginTop: 24, marginLeft: 32, fontSize: 12, fontWeight: 'normal', color: '#002333' }}>Recent courses</Text>
            <View style={{ marginTop: 24, marginLeft: 24 }}>
                <FlatList horizontal={true}
                    data={data}
                    renderItem={({ item }) =>
                        <TouchableHighlight style={{ height: 121, width: 213, borderColor: '#000000D9', borderRadius: 2, borderWidth: 1, alignItems: 'center', justifyContent: 'center', marginHorizontal: 8 }}>
                            <Text style={{ marginHorizontal: 8 }}>{item.name}</Text>
                        </TouchableHighlight>}
                />
            </View>
            <View style={{ flex: 1, marginTop: 24, marginLeft: 24, marginBottom: 32 }}>
                <FlatList horizontal={true}
                    data={data}
                    renderItem={({ item }) => <View style={{ width: 238, height: '100%', borderColor: '#000000D9', borderRadius: 2, borderWidth: 1, alignItems: 'center', justifyContent: 'center', marginHorizontal: 8 }}>
                        <Text style={{ marginHorizontal: 8 }}>{item.name}</Text>
                    </View>}
                />
            </View>
        </View>
    )
}