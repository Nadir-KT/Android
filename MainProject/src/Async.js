import axios from 'axios';
import React, { useState } from 'react';
import { AsyncStorage, Button, Text, TextInput, View, SafeAreaView } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Async() {
    const [data, setData] = useState("");
    const [textInputValue, setTextInputValue] = useState('');
    const [users, setUsers] = useState([]);
    const saveValueFunction = () => {
        //function to save the value in AsyncStorage
        if (textInputValue) {
            //To check the input not empty
            AsyncStorage.setItem('note', textInputValue);
            //Setting a data to a AsyncStorage with respect to a key
            setTextInputValue('');
            //Resetting the TextInput
            alert('Data Saved');
            //alert to confirm
        } else {
            alert('Please fill data');
            //alert for the empty InputText
        }
    };
    const add = async () => {
        try { await AsyncStorage.setItem('note', "TODO"); }
        catch (e) { console.error(e); }
    }
    const fetchData = () => {
        axios.get("https://jsonplaceholder.typicode.com/users").then(response => setUsers(response.data))
    }
    loop = () => {
        console.log(users)
        for (let user of users){
            let value = user;
            console.log("test",value)
        }
    }
    const get = async () => {
        try {
            const value = await AsyncStorage.getItem('note');
            if (value != null) { setData(value); }
        }
        catch (e) { console.error(e); }
    }
    return (
        <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 40, marginBottom: 30 }}>
                {data}
            </Text>
            <TextInput style={{ textAlign: 'center', height: 40, width: 250, borderWidth: 1, borderColor: 'green', }}
                placeholder="Enter Some Text here" placeholderTextColor={'#446270'}
                value={textInputValue}
                onChangeText={(a) => setTextInputValue(a)}
            />
            <View style={{ margin: 20, width: 250 }}>
                <Button
                    title="add"
                    onPress={saveValueFunction} />
            </View>
            <View style={{ margin: 20, width: 250 }}>
                <Button
                    title="get"
                    onPress={get} />
            </View>
            <View style={{ margin: 20, width: 250 }}>
                <Button
                    title="Fetch API"
                    onPress={() => fetchData()} />
            </View>
            <View style={{ margin: 20, width: 250 }}>
                <Button
                    title="Loop"
                    onPress={() => loop()} />
            </View>
        </View>
    );
}