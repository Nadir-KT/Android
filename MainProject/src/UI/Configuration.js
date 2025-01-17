import React, { Component, useState } from "react" // import React from react components
import { View, Image, Text, TextInput, TouchableHighlight } from 'react-native' // import View from react-native components

import DropDownPicker from 'react-native-dropdown-picker';

export default function Configuration({ navigation }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Kerala', value: '1' },
    { label: 'Tamilnadu', value: '2' },
    { label: 'Karnataka', value: '3' }
  ]);
  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState(null);
  const [items2, setItems2] = useState([
    { label: 'Trivandrum', value: '1' },
    { label: 'Cochin', value: '2' },
    { label: 'Calicut', value: '3' }
  ]);
  return (
    <View style={{ flex: 1 }}>
      <Image source={require('../Assets/logo.png')} style={{ height: 100, width: 450, position: 'absolute', bottom: 500, alignSelf: 'center' }}></Image>
      <View style={{ position: 'absolute', bottom: 318, alignSelf: 'center' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#002333' }}>Configuration</Text>
      </View>
      <View style={{ backgroundColor: '#002333', alignItems: 'center', height: 286, width: '100%', position: 'absolute', bottom: 0, borderTopLeftRadius: 18, borderTopRightRadius: 18 }}>
        {/* <TextInput style= {{width:311,height:51,marginTop:32,backgroundColor:'#062E40',borderColor:'#007345',borderWidth:1,borderRadius:8,fontSize:16}} 
                placeholder= 'Full name' placeholderTextColor={'#446270'}></TextInput> */}
        <View style={{ marginTop: 16, width: 311, height: 51 }}>
          <DropDownPicker style={{ backgroundColor: '#062E40', borderColor: '#007345', fontSize: 16, borderWidth: 1, borderRadius: 8 }}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}

            //theme="DARK"
            placeholder='Select state' placeholderTextColor={'#446270'}
          //multiple={true}
          //mode="BADGE"
          //badgeColors={'#446270'}
          //badgeDotColors={'#446270'}
          /></View>
        {/* <TextInput style= {{width:311,height:51,marginTop:16,backgroundColor:'#062E40',borderColor:'#007345',borderWidth:1,borderRadius:8,fontSize:16}} 
                placeholder= 'Email' placeholderTextColor={'#446270'}></TextInput> */}
        <View style={{ marginTop: 16, width: 311, height: 51 }}>
          <DropDownPicker style={{ backgroundColor: '#062E40', borderColor: '#007345', fontSize: 16, borderWidth: 1, borderRadius: 8 }}
            open={open2}
            value={value2}
            items={items2}
            setOpen={setOpen2}
            setValue={setValue2}
            setItems={setItems2}

            //theme="DARK"
            placeholder='Select district' placeholderTextColor={'#446270'}
          //multiple={true}
          //mode="BADGE"
          //badgeColors={'#446270'}
          //badgeDotColors={'#446270'}
          /></View>
        <TouchableHighlight style={{ width: 311, height: 56, backgroundColor: '#00C458', borderRadius: 8, alignItems: 'center', justifyContent: 'center', marginTop: 40 }}
          underlayColor='red'
          onPress={() => navigation.navigate('App_tour')}
          >
          <Text style={{ fontSize: 18, fontWeight: 'normal', color: 'white' }}>Continue</Text>
        </TouchableHighlight>
      </View>
    </View>
  )

}