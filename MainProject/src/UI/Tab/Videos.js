import React, { Component, useState } from 'react';
import { StyleSheet, Text, Image, View, FlatList, TouchableOpacity, ScrollView, Button } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default function Videos({ navigation }) {
    const [data] = useState([
        { name: 'Biology' },
        { name: 'Physics' },
        { name: 'Chemistry' },
        { name: 'Technology' },
        { name: 'Engineering' },
        { name: 'Mathematics' },
    ]);
    return (
        <View style={{ top: 10, width: '100%', bottom: 0, position: 'absolute' }}>
            <ScrollView>
                <View>
                    {data.map((data1) => {
                        return(
                        <View style={{ height: 324, marginHorizontal: 24, borderColor: '#000000D9', borderRadius: 2, borderWidth: 1, marginVertical: 8 }}>
                            <Image source={require('../Assets/Crown.png')} style={{ height: 200, width: '100%' }}></Image>
                            <View style={{ position: 'absolute', right: 21, top: 150 }}>
                                <Button title={data1.name} 
                                onPress={()=> navigation.navigate('VideoHelp')}/>
                            </View>
                            <Text style={{ marginLeft: 20, marginTop: 30 }}>{data1.name}</Text>
                            <View style={{ flexDirection: 'row', marginTop: 16, alignItems: 'center', marginLeft: 20 }}>
                                <MaterialIcons name="circle" size={12} color={'#00C458'} style={{}} />
                                <Text style={{ fontSize: 10, fontWeight: 'normal', color: '#00C458', marginLeft: 6 }}>12 Chapters</Text>
                                <MaterialIcons name="circle" size={12} color={'#00C458'} style={{ marginLeft: 24 }} />
                                <Text style={{ fontSize: 10, fontWeight: 'normal', color: '#00C458', marginLeft: 6 }}>124 hours</Text>
                            </View>
                        </View>
                        );
                    })}</View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue'
    },
    text: { fontSize: 24, fontWeight: 'bold', color: 'white' }
})