import React,{Component} from "react" // import React from react components
import {View, Image, Text, TextInput, TouchableHighlight} from 'react-native' // import View from react-native components

export default class Configuration extends Component  // Register = child class name (programmer defined), Component = parent class
{
  render()
  { 
    return (
    <View style={{flex: 1}}>
        <Image source={require('../Assets/logo.png')} style= {{height: 100, width: 450, position:'absolute', bottom:500, alignSelf: 'center'}}></Image>
        <View style={{position:'absolute', bottom: 318, alignSelf:'center'}}>
        <Text style={{fontSize: 24, fontWeight: 'bold', color:'#002333'}}>Configuration</Text>
        </View>
        <View style={{backgroundColor: '#002333', alignItems: 'center', height: 286, width: '100%', position:'absolute', bottom:0, borderTopLeftRadius: 18, borderTopRightRadius: 18}}>
                <TextInput style= {{width:311,height:51,marginTop:32,backgroundColor:'#062E40',borderColor:'#007345',borderWidth:1,borderRadius:8,fontSize:16}} 
                placeholder= 'Full name' placeholderTextColor={'#446270'}></TextInput>
                <TextInput style= {{width:311,height:51,marginTop:16,backgroundColor:'#062E40',borderColor:'#007345',borderWidth:1,borderRadius:8,fontSize:16}} 
                placeholder= 'Email' placeholderTextColor={'#446270'}></TextInput>
            <TouchableHighlight style= {{width:311, height: 56, backgroundColor: '#00C458', borderRadius: 8, alignItems: 'center', justifyContent: 'center', marginTop:40}}
             underlayColor='red'>
                <Text style={{fontSize: 18, fontWeight: 'normal', color:'white'}}>Continue</Text>
            </TouchableHighlight>
        </View>
    </View>
    )
  } 
}