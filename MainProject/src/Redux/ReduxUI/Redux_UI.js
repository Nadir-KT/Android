import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import Home from './ReduxTab/Home'
import Cart from './ReduxTab/Cart'

const Stack = createStackNavigator() // Actions & Operations of constructor is stored in a variable named Stack
const Tab = createMaterialTopTabNavigator()

export default function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Tab'
          component={MyTab}
          options={{ headerShown: false }} // Hide Navigation Bar
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

function MyTab() {
  return ( // Adjust Tab fontSize
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 12 },
          tabBarItemStyle: { width: 100 },
          tabBarStyle: { backgroundColor: 'white' },
          tabBarIndicatorStyle: { backgroundColor: 'red', height: 2 }
        }}
      // tabBarOptions={{indicatorStyle: {backgroundColor: 'red', height : 2}}}
      >
        <Tab.Screen
          name='Home'
          component={Home}
          options={{
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: 'grey',
            // tabBarIcon: ({focused})=> 
            // focused ? <MaterialIcons name= 'video-label' size={24} color= 'red'/> : <MaterialIcons name= 'video-label' size={24} color= 'grey'/> 
          }} />
        <Tab.Screen
          name='Cart'
          component={Cart}
          options={{
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: 'grey',
            // tabBarIcon: ({focused})=>
            // focused ? <MaterialIcons name= 'question-answer' size={24} color= 'red'/> : <MaterialIcons name= 'question-answer' size={24} color= 'grey'/> 
          }} />
      </Tab.Navigator>
    </View>
  )
}