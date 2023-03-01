import React, { Component, useState } from 'react';
import { StyleSheet, Text, Image, View, TextInput, TouchableOpacity, ScrollView, Button } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function VideoHelp({ navigation }) {
    return (
        <View style={{ flex: 1, }}>
            <View style={{ height: 235, width: '100%', alignSelf: 'center', justifyContent: 'center' }}>
                <Image source={require('../Assets/Crown.png')} style={{ height: 235, width: '100%' }}></Image>
                <View style={{ position: 'absolute', alignSelf: 'center', justifyContent: 'center' }}>
                    <MaterialIcons name="play-circle-outline" size={67} color={'white'} style={{}} />
                </View>
            </View>
            <View style={{ backgroundColor: '#00202F', height: '100%' }}>
                <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderColor: '#13394A', height: 76, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ marginLeft: 32, borderRightWidth: 1, borderColor: '#13394A' }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#FFFFFF', marginRight: 45, flexWrap: 'wrap', width:220 }}>Long Chapter Name can be here shown here</Text>
                    </View>
                        <MaterialIcons name="file-download" size={38} color={'#FFFFFF'} style={{ marginLeft: 23, marginRight:32 }} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderColor: '#13394A', height: 50 }}>
                    <MaterialIcons name="chevron-left" size={12} color={'#9F9F9F'} style={{ marginLeft: 32 }} />
                    <Text style={{ fontSize: 8, fontWeight: 'normal', color: '#9F9F9F', marginLeft: 6 }}>Previous</Text>
                    <View style={{ marginLeft: 88, flexDirection: 'row',alignSelf:'center' }}>
                        <MaterialIcons name="circle" size={12} color={'#00C458'} style={{}} />
                        <Text style={{ fontSize: 10, fontWeight: 'normal', color: '#00C458', marginLeft: 6 }}>Part1</Text>
                    </View>
                    <Text style={{ fontSize: 8, fontWeight: 'normal', color: '#FFFFFF', position: 'absolute', right: 50 }}>Next</Text>
                    <MaterialIcons name="chevron-right" size={12} color={'#FFFFFF'} style={{ position: 'absolute', right: 32 }} />
                </View>
                <View style={{ marginTop: 175, height: 60, marginHorizontal: 32, backgroundColor: '#000000', borderRadius: 4, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#00C458', marginLeft: 6 }}>Your sample question can be shown here no matter how long</Text>
                    <Image source={require('../Assets/Crown.png')} style={{ height: 30, width: 30, borderRadius: 50 }}></Image>
                </View>
                <View style={{ marginTop: 16, height: 48, marginHorizontal: 32, backgroundColor: '#062E40', borderColor: '#13394A', borderWidth: 1, borderRadius: 4, flexDirection: 'row' }}>
                    <TextInput
                        placeholder='Ask a question?' placeholderTextColor={'#446270'} style={{ fontSize: 12 }} ></TextInput>
                    <TouchableOpacity style={{ width: 52, height: 32, backgroundColor: 'white', alignSelf: 'center', backgroundColor: '#FFFFFF', borderWidth: 1, borderRadius: 4, position: 'absolute', right: 8, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'black', fontSize: 10 }}>Post</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 16, height: 56, marginHorizontal: 32, borderColor: '#00C458', borderWidth: 1, borderRadius: 4, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <FontAwesome name="whatsapp" size={16} color={'#00C458'} style={{ marginLeft: 24 }} />
                    <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#00C458', marginLeft: 6 }}>Chat with teacher</Text>
                </View>
            </View>
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