import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default function MyComponent({navigation}) {

    return (
      <View style={{height: 238, }}>
        <View style={{ backgroundColor: '#00202F', height: 238 }}>
          <View style={{ marginTop: 40, marginHorizontal: 32 }}>
            <TouchableHighlight style={{ width: 32, height: 32, borderColor: '#D5D5D5', borderRadius: 4, borderWidth: 1, alignItems: 'center', justifyContent: 'center' }}
              underlayColor='red'
              onPress={()=> navigation.navigate('Course')}
            >
              <MaterialIcons name="chevron-left" size={25} color={'#00C458'} />
            </TouchableHighlight>
            <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#FFFFFF', marginTop: 48 }}>Biology</Text>
            <View style={{ flexDirection: 'row', marginTop: 8, alignItems: 'center' }}>
              <MaterialIcons name="circle" size={12} color={'#00C458'} style={{}} />
              <Text style={{ fontSize: 10, fontWeight: 'normal', color: '#00C458', marginLeft: 6 }}>12 Chapters</Text>
              <MaterialIcons name="circle" size={12} color={'#00C458'} style={{ marginLeft: 27 }} />
              <Text style={{ fontSize: 10, fontWeight: 'normal', color: '#00C458', marginLeft: 6 }}>124 hours</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };