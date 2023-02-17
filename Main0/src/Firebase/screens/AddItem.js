import React, { useState } from 'react';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import database from '@react-native-firebase/database'

let addItem = item => {
    database().ref('/Items').push({
        name: item
    })
}

export default function AddItem(){
    const [name, setName] = useState('');
    const handlesubmit = () => {
        addItem(name);
    }
    return(
        <View>
            <Text>Add Item</Text>
            <TextInput onChangeText={text=>setName(text)}/>
            <TouchableHighlight
            onPress={handlesubmit}>
                <Text>Add</Text>
            </TouchableHighlight>
        </View>
    )
}