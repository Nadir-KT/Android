import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

export default class Status extends Component 
{
    render(){return(
        <View style={{flex: 1,backgroundColor: '#002333'}}>
            <TouchableOpacity style= {{width:32, height: 32, borderRadius: 6, borderColor: 'white', borderWidth: 2,
            alignItems:'center',justifyContent:'center',marginLeft:32,marginTop:40}}
            onPress={()=> this.props.navigation.navigate('BottomTab')}
            >
                <Text style={{fontSize:18,fontWeight:'normal',color:'white'}}>-></Text>
            </TouchableOpacity>
            <View style={{flexDirection:'row'}}>
                <View style={{height:60,width:60,backgroundColor:'white',marginLeft:32,marginTop:40,borderRadius:50}}>
                    {/* <Image style={{height:'100%',width:'100%',borderRadius:50}} source={require('../Assets/Crown.png')}></Image> */}
                </View>
                    <Text style={{fontSize: 18,color: '#FFFFFF',fontWeight: 'bold',marginLeft: 16,//marginTop: 20,marginBottom: 5
                }}>
                        Aaron Swartz</Text>
                    <Text style={{fontSize: 18, color: 'white',marginLeft:-80, marginTop:20}}>ID: 1234</Text>
            </View>
            <View style={{marginTop: 50 ,height: 50, borderBottomWidth:1}}>
            <Text style={{fontSize: 18, marginTop: 10,marginLeft: 10,color: 'black'}} onPress={()=> this.props.navigation.navigate('BottomTab')}>Home</Text>
            </View>
            <View style={{height: 50, borderBottomWidth:1}}>
            <Text style={{fontSize: 18, marginTop: 10,marginLeft: 10,color: 'black'}} onPress={()=> this.props.navigation.navigate('Profile')}>Profile</Text>
            </View>
            <View style={{height: 50, borderBottomWidth:1}}>
            <Text style={{fontSize: 18, marginTop: 10,marginLeft: 10,color: 'black'}} onPress={()=> this.props.navigation.navigate('Wallet Balance')}>Wallet Balance</Text>
            </View>
            <View style={{height: 50, borderBottomWidth:1}}>
            <Text style={{fontSize: 18, marginTop: 10,marginLeft: 10,color: 'black'}} onPress={()=> this.props.navigation.navigate('Records')}>Records</Text>
            </View>
            <View style={{height: 50, borderBottomWidth:1}}>
            <Text style={{fontSize: 18, marginTop: 10,marginLeft: 10,color: 'black'}} onPress={()=> this.props.navigation.navigate('Refund and Policies')}>Refund and Policies</Text>
            </View>
            <View style={{height: 50, borderBottomWidth:1}}>
            <Text style={{fontSize: 18, marginTop: 10,marginLeft: 10,color: 'black'}} onPress={()=> this.props.navigation.navigate('Settings')}>Settings</Text>
            </View>
            <View style={{height: 50, borderBottomWidth:1}}>
            <Text style={{fontSize: 18, marginTop: 10,marginLeft: 10,color: 'black'}} onPress={()=> this.props.navigation.navigate('About Us')}>About Us</Text>
            </View>
            <View style={{height: 50, borderBottomWidth:1}}>
            <Text style={{fontSize: 18, marginTop: 10,marginLeft: 10,color: 'black'}} onPress={()=> this.props.navigation.navigate('Help')}>Help</Text>
            </View>
            <Text style={{fontSize:18,color:'black',marginTop:90,marginLeft:100}}>Logout</Text>
        </View>
    )}
}