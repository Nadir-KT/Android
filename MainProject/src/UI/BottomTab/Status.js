import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, Button } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default class Status extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#002333' }}>
                <View style={{ marginTop: 40, flexDirection: 'row', marginLeft: 160 }}>
                    <Text style={{ fontSize: 20, color: '#FFFFFF', marginTop: 4 }}>Profile</Text>
                    <AntDesign name="bells" size={20} color={'#00C458'} style={{ marginTop: 4, marginLeft: 70 }} />
                    <TouchableOpacity style={{ width: 32, height: 32, borderColor: '#D5D5D5', borderRadius: 4, borderWidth: 1, alignItems: 'center', justifyContent: 'center', marginLeft: 19 }}
                        underlayColor='red'
                        onPress={() => navigation.navigate('Course')}
                    >
                        <MaterialIcons name="crop-free" size={16} color={'#00C458'} style={{}} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginHorizontal: 24, marginTop: 10, backgroundColor: '#FFFFFF', borderColor: '#EEEEEE', borderRadius: 8, borderWidth: 1 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ height: 45, width: 45, backgroundColor: 'black', marginLeft: 16, marginTop: 16, borderColor: '#19BD9B', borderRadius: 50, borderWidth: 2 }}>
                            <Image style={{ height: '100%', width: '100%', borderRadius: 50 }} source={require('../Assets/Crown.png')}></Image>
                        </View>
                        <Text style={{
                            fontSize: 14, color: '#4D4D4D', fontWeight: 'bold', marginLeft: 16,//marginTop: 20,marginBottom: 5
                        }}>
                            Aaron Swartz</Text>
                        <Text style={{ fontSize: 10, color: '#4D4D4D', marginLeft: -85, marginTop: 30 }}>ID: 1234</Text>
                    </View>
                    <View style={{ height: 66, borderBottomWidth: 1, borderColor: '#EEEEEE' }}>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#4D4D4D', marginTop: 24, marginLeft: 16 }} >Personal Info</Text>
                    </View>
                    <View style={{ height: 47, borderBottomWidth: 1, marginHorizontal: 16, flexDirection: 'row', borderColor: '#EEEEEE' }}>
                        <Text style={{ fontSize: 12, marginTop: 17, color: '#4D4D4D' }}>Account Settings</Text>
                        <Text style={{ fontSize: 12, marginTop: 17, color: '#4D4D4D', fontWeight: 'bold', marginLeft: 24 }}>Aaron Taylor</Text>
                    </View>
                    <View style={{ height: 47, borderBottomWidth: 1, marginHorizontal: 16, flexDirection: 'row', borderColor: '#EEEEEE' }}>
                        <Text style={{ fontSize: 12, marginTop: 17, color: '#4D4D4D' }}>Email</Text>
                        <Text style={{ fontSize: 12, marginTop: 17, color: '#4D4D4D', fontWeight: 'bold', marginLeft: 24 }}>emaidid123@server.com</Text>
                    </View>
                    <View style={{ height: 47, borderBottomWidth: 1, marginHorizontal: 16, flexDirection: 'row', borderColor: '#EEEEEE' }}>
                        <Text style={{ fontSize: 12, marginTop: 17, color: '#4D4D4D' }}>Number</Text>
                        <Text style={{ fontSize: 12, marginTop: 17, color: '#4D4D4D', fontWeight: 'bold', marginLeft: 24 }}>+91 9876543210</Text>
                    </View>
                    <View style={{ height: 66, borderBottomWidth: 1, borderColor: '#EEEEEE' }}>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#4D4D4D', marginTop: 24, marginLeft: 16 }} >Insurance Info</Text>
                    </View>
                    <View style={{ height: 47, borderBottomWidth: 1, marginHorizontal: 16, flexDirection: 'row', borderColor: '#EEEEEE' }}>
                        <Text style={{ fontSize: 12, marginTop: 17, color: '#4D4D4D' }}>Expiry Date</Text>
                        <Text style={{ fontSize: 12, marginTop: 17, color: '#4D4D4D', fontWeight: 'bold', marginLeft: 24 }}>Soon</Text>
                    </View>
                    <View style={{ height: 47, borderBottomWidth: 1, marginHorizontal: 16, flexDirection: 'row', borderColor: '#EEEEEE' }}>
                        <Text style={{ fontSize: 12, marginTop: 17, color: '#4D4D4D' }}>Payment Status</Text>
                        <Text style={{ fontSize: 12, marginTop: 17, color: '#4D4D4D', fontWeight: 'bold', marginLeft: 24 }}>Free</Text>
                    </View>
                    <View style={{ height: 47, borderBottomWidth: 1, marginHorizontal: 16, flexDirection: 'row', borderColor: '#EEEEEE' }}>
                        <Text style={{ fontSize: 12, marginTop: 17, color: '#4D4D4D' }}>Center</Text>
                        <Text style={{ fontSize: 12, marginTop: 17, color: '#4D4D4D', fontWeight: 'bold', marginLeft: 24 }}>GMC</Text>
                    </View>
                </View>
                <View style={{ marginHorizontal: 24, marginTop: 80}}>
                <Button title="Custom Payment"/>
                </View>
            </View>
        )
    }
}