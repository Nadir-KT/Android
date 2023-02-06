import React,{Component} from "react" // import React from react components
import {View, StyleSheet, ImageBackground, Image, Text, TextInput, TouchableHighlight} from 'react-native' // import View from react-native components

export default class Register extends Component  // Register = child class name (programmer defined), Component = parent class
{
  render()
  { 
    return (
    <View style={{flex: 1}}>
        <Image source={require('../Assets/logo.png')} style= {{height: 100, width: 450, marginTop: 144, alignSelf: 'center'}}></Image>
        <Text style={{fontSize: 24, fontWeight: 'bold', color:'black', alignSelf: 'center'}}>Enter your mobile number</Text>
        <Text style={{fontSize: 16, fontWeight: 'bold', color:'grey', alignSelf: 'center'}}>We will send you an OTP to verify.</Text>
        <View style={{backgroundColor: '#002333', alignItems: 'center', height: 195, width: '100%', position:'absolute', bottom:0}}>
            <View style={{flexDirection: "row"}}>
                <Text style= {{fontSize:16,height:55,borderWidth:1,backgroundColor:'#062E40',marginTop:32,borderRadius:8,borderColor:'#062E40',width:59,color:'white',justifyContent:'center'}}>+91</Text>
                <TextInput style= {{fontSize:16,height:55,borderWidth:1,borderColor:'#062E40',backgroundColor:'#062E40',marginTop:32,marginLeft:8,borderRadius:8, width:244, textAlign:'justify'}} 
                placeholder= 'Mobile number' placeholderTextColor={'white'}></TextInput>
            </View>
            <TouchableHighlight style= {{width:311, height: 56, backgroundColor: 'green', borderRadius: 8, alignItems: 'center', justifyContent: 'center', marginTop:16}}
             underlayColor='red'>
                <Text style={{fontSize: 22, fontWeight: 'bold', color:'white'}}>Register</Text>
            </TouchableHighlight>
        </View>
    </View>
    )
  } 
}