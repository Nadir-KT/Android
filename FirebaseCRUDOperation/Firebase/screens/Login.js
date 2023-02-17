import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import auth from '@react-native-firebase/auth';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signup = () => {
            auth().createUser(email, password).then((res)=>{
                console.log("response",res)
            })
            .catch((error)=>{
                console.log("error",error)
            })
        }
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 21, marginBottom: 20 }}>Login</Text>
            <TextInput style={{ width: 300, borderRadius: 6, borderWidth: 2, borderColor: '#6d69c3', marginVertical: 10, padding: 15 }}
                value={email}
                onChangeText={setEmail}
                keyboardType='email-address'
                placeholder='Email' />
            <TextInput style={{ width: 300, borderRadius: 6, borderWidth: 2, borderColor: '#6d69c3', marginVertical: 10, padding: 15 }}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                placeholder='Password' />
            <View style={{ width: 150, marginTop: 30, flexDirection: 'row', justifyContent: 'space-around' }}>
                <Button 
                onPress={signup}
                title="Signup"/>
                <Button title="Login" />
            </View>
        </View>
    )
}