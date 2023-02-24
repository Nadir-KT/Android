import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default class DrawerContent extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#002333' }}>
                <TouchableOpacity style={{
                    width: 32, height: 32, borderRadius: 6, borderColor: 'white', borderWidth: 1,
                    alignItems: 'center', justifyContent: 'center', marginLeft: 32, marginTop: 40
                }}
                    onPress={() => this.props.navigation.closeDrawer()}
                >
                    <MaterialIcons name="close" size={25} color={'#00C458'} />
                </TouchableOpacity>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ height: 60, width: 60, backgroundColor: 'white', marginLeft: 32, marginTop: 40, borderRadius: 50 }}>
                        <Image style={{ height: '100%', width: '100%', borderRadius: 50, borderWidth: 3, borderColor: '#00C458' }} source={require('./Assets/Crown.png')}></Image>
                    </View>
                    <Text style={{ fontSize: 14, color: '#FFFFFF', fontWeight: 'bold', marginLeft: 16, marginTop: 52 }}>Aaron Swartz</Text>
                    <Text style={{ fontSize: 14, color: 'white', marginLeft: -85, marginTop: 72 }}>ID: 1234</Text>
                    <MaterialIcons name="chevron-right" size={25} color={'#00C458'} style={{ marginLeft: 60, marginTop: 60 }} />
                </View>
                <View style={{ flexDirection: 'row', marginTop: 42, height: 47, borderBottomWidth: 1, marginHorizontal: 32, alignContent: 'center', borderColor: '#243C47' }}>
                    <TouchableOpacity style={{ width: 30, height: 30, borderRadius: 6, borderColor: '#00C458', borderWidth: 1, }}
                        onPress={() => this.props.navigation.navigate('BottomTab')} />
                    <Text style={{ fontSize: 14, marginTop: 5, marginLeft: 10, color: '#FFFFFF' }} onPress={() => this.props.navigation.navigate('BottomTab')}>Home</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 16, height: 47, borderBottomWidth: 1, marginHorizontal: 32, alignContent: 'center', borderColor: '#243C47' }}>
                    <TouchableOpacity style={{ width: 30, height: 30, borderRadius: 6, borderColor: '#00C458', borderWidth: 1, }}
                        onPress={() => this.props.navigation.navigate('Profile')} />
                    <Text style={{ fontSize: 14, marginTop: 5, marginLeft: 10, color: '#FFFFFF' }} onPress={() => this.props.navigation.navigate('Profile')}>Profile</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 16, height: 47, borderBottomWidth: 1, marginHorizontal: 32, alignContent: 'center', borderColor: '#243C47' }}>
                    <TouchableOpacity style={{ width: 30, height: 30, borderRadius: 6, borderColor: '#00C458', borderWidth: 1, }}
                        onPress={() => this.props.navigation.navigate('Profile')} />
                    <Text style={{ fontSize: 14, marginTop: 5, marginLeft: 10, color: '#FFFFFF' }} onPress={() => this.props.navigation.navigate('Wallet Balance')}>Wallet Balance</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 16, height: 47, borderBottomWidth: 1, marginHorizontal: 32, alignContent: 'center', borderColor: '#243C47' }}>
                    <TouchableOpacity style={{ width: 30, height: 30, borderRadius: 6, borderColor: '#00C458', borderWidth: 1, }}
                        onPress={() => this.props.navigation.navigate('Profile')} />
                    <Text style={{ fontSize: 14, marginTop: 5, marginLeft: 10, color: '#FFFFFF' }} onPress={() => this.props.navigation.navigate('Records')}>Downloads</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 16, height: 47, borderBottomWidth: 1, marginHorizontal: 32, alignContent: 'center', borderColor: '#243C47' }}>
                    <TouchableOpacity style={{ width: 30, height: 30, borderRadius: 6, borderColor: '#00C458', borderWidth: 1, }}
                        onPress={() => this.props.navigation.navigate('Profile')} />
                    <Text style={{ fontSize: 14, marginTop: 5, marginLeft: 10, color: '#FFFFFF' }} onPress={() => this.props.navigation.navigate('Refund and Policies')}>Notifications</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 16, height: 47, borderBottomWidth: 1, marginHorizontal: 32, alignContent: 'center', borderColor: '#243C47' }}>
                    <TouchableOpacity style={{ width: 30, height: 30, borderRadius: 6, borderColor: '#00C458', borderWidth: 1, }}
                        onPress={() => this.props.navigation.navigate('Profile')} />
                    <Text style={{ fontSize: 14, marginTop: 5, marginLeft: 10, color: '#FFFFFF' }} onPress={() => this.props.navigation.navigate('Settings')}>Settings</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 16, height: 47, borderBottomWidth: 1, marginHorizontal: 32, alignContent: 'center', borderColor: '#243C47' }}>
                    <TouchableOpacity style={{ width: 30, height: 30, borderRadius: 6, borderColor: '#00C458', borderWidth: 1, }}
                        onPress={() => this.props.navigation.navigate('Profile')} />
                    <Text style={{ fontSize: 14, marginTop: 5, marginLeft: 10, color: '#FFFFFF' }} onPress={() => this.props.navigation.navigate('About Us')}>About Us</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 16, height: 47, marginHorizontal: 32, alignContent: 'center', borderColor: '#243C47' }}>
                    <TouchableOpacity style={{ width: 30, height: 30, borderRadius: 6, borderColor: '#00C458', borderWidth: 1, }}
                        onPress={() => this.props.navigation.navigate('Profile')} />
                    <Text style={{ fontSize: 14, marginTop: 5, marginLeft: 10, color: '#FFFFFF' }} onPress={() => this.props.navigation.navigate('Help')}>Help</Text>
                </View>
                <TouchableOpacity style={{ height: 40, borderRadius: 8, alignItems: 'center', justifyContent: 'center', borderColor: '#00C458', borderWidth: 1, marginHorizontal: 32 }}
                    underlayColor='red'
                    onPress={() => this.props.navigation.navigate('OTP')}
                >
                    <Text style={{ fontSize: 18, fontWeight: 'normal', color: 'white' }}>Logout</Text>
                </TouchableOpacity>
            </View>
        )
    }
}