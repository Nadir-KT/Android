import React,{Component} from "react" // import React from react components
import {View, Image, Text, TextInput, TouchableHighlight} from 'react-native' // import View from react-native components

export default class OTP extends Component  // Register = child class name (programmer defined), Component = parent class
{
  render()
  { 
    return (
    <View style={{flex: 1}}>
        <Image source={require('../Assets/logo.png')} style= {{height: 100, width: 450, position:'absolute',bottom:500, alignSelf: 'center'}}></Image>
        <View style={{position:'absolute', bottom: 367, alignSelf:'center'}}>
        <Text style={{fontSize: 24, fontWeight: 'bold', color:'#002333'}}>Enter your mobile number</Text>
        </View>
        <View style={{position:'absolute', bottom: 347, alignSelf:'center'}}>
        <Text style={{fontSize: 16, fontWeight: 'normal', color:'#9F9F9F'}}>We will send you an OTP to verify.</Text>
        </View>
        <View style={{position:'absolute', bottom: 299, alignSelf:'center'}}>
        <Text style={{fontSize: 16, fontWeight: 'normal', color:'#002333'}}>1800 911</Text>
        </View>
        <View style={{backgroundColor: '#002333', alignItems: 'center', height: 267, width: '100%', position:'absolute', bottom:0, borderTopLeftRadius: 18, borderTopRightRadius: 18}}>
            <View style={{flexDirection: "row"}}>
                <TextInput style= {{fontSize:16,height:45,width:45,borderWidth:1,backgroundColor:'#062E40',borderColor:'#13394A',marginTop:32,borderRadius:8,textAlign:'justify'}} 
                placeholderTextColor={'#446270'}></TextInput>
                <TextInput style= {{fontSize:16,height:45,width:45,borderWidth:1,backgroundColor:'#062E40',borderColor:'#13394A',marginTop:32,borderRadius:8,marginLeft:8,textAlign:'justify'}} 
                placeholderTextColor={'#446270'}></TextInput>
                <TextInput style= {{fontSize:16,height:45,width:45,borderWidth:1,backgroundColor:'#062E40',borderColor:'#13394A',marginTop:32,borderRadius:8,marginLeft:8,textAlign:'justify'}} 
                placeholderTextColor={'#446270'}></TextInput>
                <TextInput style= {{fontSize:16,height:45,width:45,borderWidth:1,backgroundColor:'#062E40',borderColor:'#13394A',marginTop:32,borderRadius:8,marginLeft:8,textAlign:'justify'}} 
                placeholderTextColor={'#446270'}></TextInput>
                <TextInput style= {{fontSize:16,height:45,width:45,borderWidth:1,backgroundColor:'#062E40',borderColor:'#13394A',marginTop:32,borderRadius:8,marginLeft:8,textAlign:'justify'}} 
                placeholderTextColor={'#446270'}></TextInput>
                <TextInput style= {{fontSize:16,height:45,width:45,borderWidth:1,backgroundColor:'#062E40',borderColor:'#13394A',marginTop:32,borderRadius:8,marginLeft:8,textAlign:'justify'}} 
                placeholderTextColor={'#446270'}></TextInput>
            </View>
            <TouchableHighlight style= {{width:311, height: 56, backgroundColor: '#00C458', borderRadius: 8, alignItems: 'center', justifyContent: 'center', marginTop:16}}
             underlayColor='red'
             onPress={()=> this.props.navigation.navigate('Details')}
             >
                <Text style={{fontSize: 18, fontWeight: 'bold', color:'white'}}>Resend OTP</Text>
            </TouchableHighlight>
            <Text style={{fontSize: 12, fontWeight: 'normal', color:'#446270', marginTop:8}}>Resend after 28s</Text>
            <Text style={{fontSize: 18, fontWeight: 'bold', color:'#00C458', marginTop:38}}>Contact Us</Text>
        </View>
    </View>
    )
  } 
}