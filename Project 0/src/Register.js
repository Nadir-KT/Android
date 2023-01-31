import React,{Component} from "react" // import React from react components
import {View, StyleSheet, ImageBackground, Image, Text, TextInput, TouchableHighlight} from 'react-native' // import View from react-native components
// class component
class RegisterContent extends Component 
{
    render()
    {
        return(<View>
            <Text style={styles.textView}>Please enter details to {this.props.name}</Text>
            </View>)
    }
}
export default class Register extends Component  // Register = child class name (programmer defined), Component = parent class
{
    constructor()
    {
        super();
        this.state= 
        {
            main_text: 'Please verify your email',
        }
    }
    updateText()
    {
        console.log('update method clicked')
        this.setState({main_text: 'Email verification successful'})
    }
  render()
  { 
    return ( // <css StyleSheet component open> // </css StyleSheet component close> // black clour = 'black' (or) hex code = '#000000'
    // <View style= {{height: '100%',width: '100%',backgroundColor: '#c21051'}}>
    <View style= {styles.container}>
      <ImageBackground source= {require('./Assets/bg.png')} style= {styles.BackGroundImage}>
        <Image source={require('./Assets/logo.png')} style= {styles.logo}></Image>
        <RegisterContent name= 'register'></RegisterContent>
        <TextInput style= {styles.inputView} placeholder= 'Name' placeholderTextColor={'green'} maxLength={10}></TextInput>
        <TextInput style= {styles.inputView} placeholder= 'Email' placeholderTextColor={'green'}></TextInput>
        <View style={styles.row}>
        <TextInput style= {styles.inputViewSmall} placeholder= 'Country code' placeholderTextColor={'green'}></TextInput>
        <TextInput style= {styles.inputViewMedium} placeholder= 'Mobile number' placeholderTextColor={'green'}></TextInput>
        </View>
        <TextInput style= {styles.inputView} placeholder= 'Password' placeholderTextColor={'green'}secureTextEntry={true}></TextInput>
        <Text style= {styles.textView}>{this.state.main_text}</Text>
        <TouchableHighlight style= {styles.buttonView} underlayColor='red' onPress={()=> this.updateText()}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableHighlight>
      </ImageBackground>
    </View>
    )
  } 
}
const styles = StyleSheet.create({
  container:{height: '100%', width: '100%', backgroundColor: 'black',},
  BackGroundImage:
  {
    height: '100%', width: '100%', 
    alignItems: 'center', // align child items to centre (align logo to centre - width)
    justifyContent: 'center' // align child content to centre (align logo to centre - height)
  },
  logo: {height: 100, width: 450, marginBottom: 80},
  textView: 
  {
    fontSize: 20, fontWeight: 'bold', color:'black'
    // marginTop: 20  // Top margin of 20 pixels
  },
  row: {
    flexDirection: "row"
  },
  inputView: {width:'80%', height:55, borderWidth: 1, borderColor: 'green', marginTop: 5, backgroundColor: 'white'},
  inputViewSmall: {width:'24%', height:55, borderWidth: 1, borderColor: 'green', marginTop: 5, backgroundColor: 'white'},
  inputViewMedium: {width:'55%', height:55, borderWidth: 1, borderColor: 'green', marginTop: 5, backgroundColor: 'white', marginLeft: 5},
  buttonView: {width:'60%', height: 55, backgroundColor: 'green', marginTop: 30, borderRadius: 8, alignItems: 'center', justifyContent: 'center'},
  buttonText: {fontSize: 22, fontWeight: 'bold', color:'white'}
})
// functional component