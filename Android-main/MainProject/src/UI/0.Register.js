import React,{Component} from "react" // import React from react components
import {View, Image, Text, TextInput, TouchableHighlight} from 'react-native' // import View from react-native components

export default class Register extends Component  // Register = child class name (programmer defined), Component = parent class
{
  render()
  { 
    return (
    <View style={{flex: 1}}>
        <Image source={require('../Assets/logo.png')} style= {{height: 100, width: 450, position:'absolute', bottom:415, alignSelf: 'center'}}></Image>
        <View style={{position:'absolute', bottom: 247, alignSelf:'center'}}>
        <Text style={{fontSize: 24, fontWeight: 'bold', color:'#002333'}}>Enter your mobile number</Text>
        </View>
        <View style={{position:'absolute', bottom: 227, alignSelf:'center'}}>
        <Text style={{fontSize: 16, fontWeight: 'normal', color:'#9F9F9F'}}>We will send you an OTP to verify.</Text>
        </View>
        <View style={{backgroundColor: '#002333', alignItems: 'center', height: 195, width: '100%', position:'absolute', bottom:0, borderTopLeftRadius: 18, borderTopRightRadius: 18}}>
            <View style={{flexDirection: "row"}}>
                <Text style= {{fontSize:16,height:55,borderWidth:1,backgroundColor:'#062E40',borderColor:'#13394A',marginTop:32,borderRadius:8,width:59,color:'white',textAlign:'center',textAlignVertical:'center'}}>+91</Text>
                <TextInput style= {{fontSize:16,height:55,borderWidth:1,backgroundColor:'#062E40',borderColor:'#13394A',marginTop:32,borderRadius:8,width:244,marginLeft:8,textAlign:'justify'}} 
                placeholder= 'Mobile number' placeholderTextColor={'#446270'}></TextInput>
            </View>
            <TouchableHighlight style= {{width:311, height: 56, backgroundColor: '#00C458', borderRadius: 8, alignItems: 'center', justifyContent: 'center', marginTop:16}}
             underlayColor='red'
             onPress={()=> this.props.navigation.navigate('OTP')}
             >
                <Text style={{fontSize: 18, fontWeight: 'normal', color:'white'}}>Continue</Text>
            </TouchableHighlight>
        </View>
    </View>
    )
  } 
}