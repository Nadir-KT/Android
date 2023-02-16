import React,{Component} from "react" // import React from react components
import {View, Image, Text, TextInput, TouchableHighlight} from 'react-native' // import View from react-native components

export default class App_tour extends Component  // Register = child class name (programmer defined), Component = parent class
{
  render()
  { 
    return (
    <View style={{flex: 1}}>
        <Image source={require('../Assets/logo.png')} style= {{height: 100, width: 450, position:'absolute', bottom:415, alignSelf: 'center'}}></Image>
        <View style={{position:'absolute', bottom: 180, alignSelf:'center'}}>
        <Text style={{fontSize: 24, fontWeight: 'bold', color:'#002333'}}>App tour title</Text>
        </View>
        <View style={{position:'absolute', bottom: 160, alignSelf:'center'}}>
        <Text style={{fontSize: 16, fontWeight: 'normal', color:'#9F9F9F'}}>The app tour description goes here.</Text>
        </View>
        <View style={{width:72,height:72,position:'absolute', bottom:40,alignSelf:'center',borderTopRightColor:'#00C458',borderWidth:1,borderRadius:8,alignItems: 'center',justifyContent: 'center'}}>
            <TouchableHighlight style= {{width:56, height: 56, backgroundColor: '#00C458', borderRadius: 6, alignItems: 'center', justifyContent: 'center'}}
             underlayColor='red'>
                <Text style={{fontSize: 18, fontWeight: 'normal', color:'white'}}>-></Text>
            </TouchableHighlight>
        </View>
    </View>
    )
  } 
}