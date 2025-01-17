import React, { useState } from 'react';
import { Text, TouchableHighlight } from 'react-native';
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
import MyComponent from './Drawer/MyComponent';
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
import VideoHelp from './Tab/Video_Help';
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
          component={OTP} 
          options={{ headerShown: false }} // Hide Navigation Bar
          />
        <Stack.Screen
          name='Details'
          component={Details} 
          options={{ headerShown: false }}
          />
        <Stack.Screen
          name='Configuration'
          component={Configuration} 
          options={{ headerShown: false }}/>
        <Stack.Screen
          name='App_tour'
          component={App_tour}
          options={{ headerShown: false }} />
        <Stack.Screen
          name='Drawer'
          component={MyDrawer}
          options={{ headerShown: false }} // Hide Navigation Bar
        />
        <Stack.Screen
          name='Course'
          component={Course} 
          options={{ headerShown: false }} 
          />
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
        <Stack.Screen
          name='VideoHelp'
          component={VideoHelp}
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
        //tabBarStyle: { position: 'absolute', alignSelf: 'center', backgroundColor: 'white', height: 74, bottom: 131, left: 16, right: 16, borderColor: '#EEEEEE', borderWidth: 1, borderRadius: 8},
        tabBarStyle: { position: 'absolute', elevation: 10, paddingTop: 10, height: 74, marginBottom: 131, marginHorizontal: 16, borderColor: '#EEEEEE', borderWidth: 1, borderRadius: 8 },
      }}>
      <Tab.Screen
        options={{
          tabBarLabel: '',
          headerShown: false,
          //tabBarActiveTintColor: 'red',
          //tabBarInactiveTintColor: 'grey',
          //   tabBarIcon: ({ focused }) =>
          //     focused ? <MaterialIcons name='call' size={8} color='red' />: <MaterialIcons name='call' size={24} color='grey' />
          // }} 
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View style={{}}>
                <MaterialIcons name="home" size={30} color={'#00C458'} />
              </View>
            ) : (
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <MaterialIcons name="home" size={25} color={'#C2C2C2'} />
                <Text style={{ color: '#C2C2C2', fontSize: 8, marginLeft: 4, fontWeight: 'bold' }}>Home</Text>
              </View>
            )
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarLabel: '',
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View style={{}}>
                <MaterialIcons name="play-arrow" size={30} color={'#00C458'} />
              </View>
            ) : (
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <MaterialIcons name="play-arrow" size={25} color={'#C2C2C2'} />
                <Text style={{ color: '#C2C2C2', fontSize: 8, marginLeft: 4, fontWeight: 'bold' }}>Recent</Text>
              </View>
            )
        }}
        name='Calls'
        component={Calls}
      />
      <Tab.Screen
        name='Chats'
        component={Chats}
        options={{
          tabBarLabel: '',
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View style={{}}>
                <MaterialIcons name="sticky-note-2" size={30} color={'#00C458'} />
              </View>
            ) : (
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <MaterialIcons name="sticky-note-2" size={25} color={'#C2C2C2'} />
                <Text style={{ color: '#C2C2C2', fontSize: 8, marginLeft: 4, fontWeight: 'bold' }}>Exams</Text>
              </View>
            )
        }} />
      <Tab.Screen
        name='Status'
        component={Status}
        options={{
          tabBarLabel: '',
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View style={{}}>
                <MaterialIcons name="account-circle" size={30} color={'#00C458'} />
              </View>
            ) : (
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <MaterialIcons name="account-circle" size={25} color={'#C2C2C2'} />
                <Text style={{ color: '#C2C2C2', fontSize: 8, marginLeft: 4, fontWeight: 'bold' }}>Profile</Text>
              </View>
            )
        }} />
      <Tab.Screen
        name='Contacts'
        component={Status}
        options={{
          tabBarLabel: '',
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View style={{}}>
                <MaterialIcons name="mail-outline" size={30} color={'#00C458'} />
              </View>
            ) : (
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <MaterialIcons name="mail-outline" size={25} color={'#C2C2C2'} />
                <Text style={{ color: '#C2C2C2', fontSize: 8, marginLeft: 4, fontWeight: 'bold' }}>Contact</Text>
              </View>
            )
        }} />
    </BottomTab.Navigator>
  )
}

function MyDrawer() {
  return (
    //drawerContent={(props)=><DrawerContent{...props}/>} // passing props to DrawerContent
    //<Drawer.Navigator>
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: { width: 257 }
      }}
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

function MyTab({ navigation }) {
  return ( // Adjust Tab fontSize
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <MyComponent navigation={navigation} />
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 12 },
          tabBarItemStyle: { width: 100 },
          tabBarStyle: { backgroundColor: '#00202F' },
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

// function MyComponent(props,{navigation}) {

//   return (
//     <View style={{height: 238, }}>
//       <View style={{ backgroundColor: '#00202F', height: 238 }}>
//         <View style={{ marginTop: 40, marginHorizontal: 32 }}>
//           <TouchableHighlight style={{ width: 32, height: 32, borderColor: '#D5D5D5', borderRadius: 4, borderWidth: 1, alignItems: 'center', justifyContent: 'center' }}
//             underlayColor='red'
//             onPress={()=> props.navigation.navigate('Course')}
//           >
//             <MaterialIcons name="chevron-left" size={25} color={'#00C458'} />
//           </TouchableHighlight>
//           <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#FFFFFF', marginTop: 48 }}>Biology</Text>
//           <View style={{ flexDirection: 'row', marginTop: 8, alignItems: 'center' }}>
//             <MaterialIcons name="circle" size={12} color={'#00C458'} style={{}} />
//             <Text style={{ fontSize: 10, fontWeight: 'normal', color: '#00C458', marginLeft: 6 }}>12 Chapters</Text>
//             <MaterialIcons name="circle" size={12} color={'#00C458'} style={{ marginLeft: 27 }} />
//             <Text style={{ fontSize: 10, fontWeight: 'normal', color: '#00C458', marginLeft: 6 }}>124 hours</Text>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };