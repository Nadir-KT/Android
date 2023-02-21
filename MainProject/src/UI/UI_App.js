import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import Register from './0.Register';
import OTP from './OTP';
import Details from './Details';
import Configuration from './Configuration';
import App_tour from './App tour';
import Course from './Course';
import Login from './Login'
import Flexbox from './flexbox'
import DrawerContent from './Drawer/DrawerContent'
import Home from './Drawer/Home'
import Profile from './Drawer/Profile'
import WalletBalance from './Drawer/Wallet'
import Records from './Drawer/Records'
import RefundPolicies from './Drawer/Policies'
import Settings from './Drawer/Settings'
import AboutUs from './Drawer/About'
import Help from './Drawer/Help'
import Videos from './Tab/Videos'
import Chapter from './Tab/Chapter'
import Resources from './Tab/Resources'
import QN_Bank from './Tab/QN Bank'
import Calls from './BottomTab/Calls'
import Chats from './BottomTab/Chats'
import Status from './BottomTab/Status'

const Stack = createStackNavigator() // Actions & Operations of constructor is stored in a variable named Stack
const Drawer = createDrawerNavigator()
const Tab = createMaterialTopTabNavigator()
const BottomTab = createBottomTabNavigator()

export default function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Register'
          component={Register}
          options={{ headerShown: false }} // Hide Navigation Bar
        />
        <Stack.Screen
          name='OTP'
          component={OTP} />
        <Stack.Screen
          name='Details'
          component={Details} />
        <Stack.Screen
          name='Configuration'
          component={Configuration} />
        <Stack.Screen
          name='App_tour'
          component={App_tour} />
        <Stack.Screen
          name='Drawer'
          component={MyDrawer}
          options={{ headerShown: false }} // Hide Navigation Bar
        />
        <Stack.Screen
          name='Course'
          component={Course} />
        <Stack.Screen
          name='Tab'
          component={MyTab}
          options={{ headerShown: false }} // Hide Navigation Bar
        />
        <Stack.Screen
          name='BottomTab'
          component={MyBottomTab}
          options={{ headerShown: false }} // Hide Navigation Bar
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

function MyBottomTab() {
  return ( // Adjust Tab fontSize
    <BottomTab.Navigator
      screenOptions={{
        //tabBarLabelStyle: { fontSize: 8 },
        //tabBarItemStyle: { flexDirection:'row' },
        //tabBarStyle: { alignSelf:'center', height:74, position: 'absolute', marginBottom:131 , marginHorizontal: 16,borderColor:'#EEEEEE',borderWidth:1,borderRadius:8},
        tabBarStyle: { position: 'absolute', bottom: 25, left: 20, right: 20, elevation: 1, backgroundColor: 'white', borderRadius: 10, borderWidth: 1, height: 50, paddingTop:10},
      }}>
      <Tab.Screen
        options={{
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'grey',
          tabBarIcon: ({ focused }) =>
            focused ? <MaterialIcons name='call' size={8} color='red' /> : <MaterialIcons name='call' size={24} color='grey' />
        }} 
        name='Home'
        component={Home}
        />
      <Tab.Screen
        options={{
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'grey',
          tabBarIcon: ({ focused }) =>
            focused ? <MaterialIcons name='call' size={24} color='red' /> : <MaterialIcons name='call' size={24} color='grey' />
        }} 
        name='Calls'
        component={Calls}
        />
      <Tab.Screen
        name='Chats'
        component={Chats}
        options={{
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'grey',
          tabBarIcon: ({ focused }) =>
            focused ? <MaterialIcons name='chat' size={24} color='red' /> : <MaterialIcons name='chat' size={24} color='grey' />
        }} />
      <Tab.Screen
        name='Status'
        component={Status}
        options={{
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'grey',
          tabBarIcon: ({ focused }) =>
            focused ? <MaterialIcons name='timelapse' size={24} color='red' /> : <MaterialIcons name='timelapse' size={24} color='grey' />
        }} />
        <Tab.Screen
        name='Contacts'
        component={Status}
        options={{
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'grey',
          tabBarIcon: ({ focused }) =>
            focused ? <MaterialIcons name='timelapse' size={24} color='red' /> : <MaterialIcons name='timelapse' size={24} color='grey' />
        }} />
    </BottomTab.Navigator>
  )
}

function MyDrawer() {
  return (
    //drawerContent={(props)=><DrawerContent{...props}/>} // passing props to DrawerContent
    //<Drawer.Navigator>
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent{...props} />}>
      <Tab.Screen
        name='BottomTab'
        component={MyBottomTab}
        options={{ headerShown: false }} // Hide Navigation Bar
         />
      <Drawer.Screen
        name='Profile'
        component={Profile} />
      <Drawer.Screen
        name='Wallet Balance'
        component={WalletBalance} />
      <Drawer.Screen
        name='Records'
        component={Records} />
      <Drawer.Screen
        name='Refund and Policies'
        component={RefundPolicies} />
      <Drawer.Screen
        name='Settings'
        component={Settings} />
      <Drawer.Screen
        name='About Us'
        component={AboutUs} />
      <Drawer.Screen
        name='Help'
        component={Help} />
    </Drawer.Navigator>
  )
}

function MyTab() {
  return ( // Adjust Tab fontSize
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <MyComponent />
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
          name='Videos'
          component={Videos}
          options={{
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: 'grey',
            // tabBarIcon: ({focused})=> 
            // focused ? <MaterialIcons name= 'video-label' size={24} color= 'red'/> : <MaterialIcons name= 'video-label' size={24} color= 'grey'/> 
          }} />
        <Tab.Screen
          name='Chapter'
          component={Chapter}
          options={{
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: 'grey',
            // tabBarIcon: ({focused})=> 
            // focused ? <MaterialIcons name= 'menu-book' size={24} color= 'red'/> : <MaterialIcons name= 'menu-book' size={24} color= 'grey'/> 
          }} />
        <Tab.Screen
          name='Resources'
          component={Resources}
          options={{
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: 'grey',
            // tabBarIcon: ({focused})=>
            // focused ? <MaterialIcons name= 'category' size={24} color= 'red'/> : <MaterialIcons name= 'category' size={24} color= 'grey'/> 
          }} />
        <Tab.Screen
          name='QN Bank'
          component={QN_Bank}
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

const MyComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar style={{ backgroundColor: 'white', borderRadius: 10, marginVertical: 5, marginHorizontal: 5 }}
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};