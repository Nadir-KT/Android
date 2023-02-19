import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home'
import AddItem from './screens/AddItem'
import List from './screens/List'
import Login from './screens/Login'
import MobileLogin from './screens/MobileLogin';

const Stack = createStackNavigator();

export default function Firebase_Data() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="MobileLogin" component={MobileLogin} />
                {/* <Stack.Screen name="Login" component={Login} /> */}
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="AddItem" component={AddItem} />
                <Stack.Screen name="List" component={List} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}