import React,{Component} from "react" // import React from react components
import {View, StyleSheet, ImageBackground, Image, Text, TextInput, TouchableHighlight} from 'react-native' // import View from react-native components
// class component
export default class Login extends Component  // Login = child class name (programmer defined), Component = parent class
{
  constructor(){
    super();
    this.state= {name: null}
  }
  updateValue(username)
  {
    console.log(username)
    this.setState({name: username}) // setState is used for updating variables
  }
  render()
  { 
    return ( // <css StyleSheet component open> // </css StyleSheet component close> // black clour = 'black' (or) hex code = '#000000'
    // <View style= {{height: '100%',width: '100%',backgroundColor: '#c21051'}}>
    <View style= {styles.container}>
      <ImageBackground source= {require('./Assets/bg.png')} style= {styles.BackGroundImage}>
        <Image source={require('./Assets/logo.png')} style= {styles.logo}></Image>
        <Text style= {styles.textView}>Telematics</Text>
        <TextInput style= {styles.inputView} placeholder= 'User ID' placeholderTextColor={'green'} maxLength={10} 
        onChangeText={(username)=> this.updateValue(username)}>
        </TextInput>
        <TextInput style= {styles.inputView} placeholder= 'Password' placeholderTextColor={'green'}secureTextEntry={true}></TextInput>
        <TouchableHighlight style= {styles.buttonView} underlayColor='red' onPress={()=> this.props.navigation.navigate('Flexbox',{username: this.state.name})}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableHighlight>
      </ImageBackground>
    </View>
    )
  } 
}
const styles = StyleSheet.create({
  container:{height: '100%', width: '100%', backgroundColor: 'black'},
  BackGroundImage:
  {
    height: '100%', width: '100%', 
    alignItems: 'center', // align child items to centre (align logo to centre - width)
    justifyContent: 'center' // align child content to centre (align logo to centre - height)
  },
  logo: {height: 100, width: 450, marginBottom: 80},
  textView: 
  {
    fontSize: 30, fontWeight: 'bold', color:'black',
    // marginTop: 20  // Top margin of 20 pixels
  },
  inputView: {width:'80%', height:55, borderWidth: 1, borderColor: 'green', marginTop: 50, paddingLeft: 130, backgroundColor: 'white'},
  buttonView: {width:'60%', height: 55, backgroundColor: 'green', marginTop: 30, borderRadius: 8, alignItems: 'center', justifyContent: 'center'},
  buttonText: {fontSize: 22, fontWeight: 'bold', color:'white'}
})
// functional component