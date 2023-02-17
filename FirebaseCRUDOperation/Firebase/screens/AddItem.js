import React, { useState } from 'react';
import { View, Text, TextInput, TouchableHighlight, Alert } from 'react-native';
import database from '@react-native-firebase/database'

let addItem = item => {
    database().ref('/Items').push({
        name: item
    })
}

export default function AddItem() {
    const [name, setName] = useState('');
    const handlesubmit = () => {
        addItem(name);
        setName('');
        Alert.alert('Item Saved Sucessfully');
    }
    return (
        <View style={{ flex: 1, padding: 30, flexDirection: 'column', justifyContent: 'center', backgroundColor: '#6565fc' }}>
            <Text style={{ marginBottom: 20, fontSize: 25, textAlign: 'center' }}>Add Item</Text>
            <TextInput style={{ height: 50, padding: 4, marginRight: 5, fontSize: 23, borderWidth: 1, borderColor: 'white', borderRadius: 8, color: 'white' }}
                onChangeText={text => setName(text)}
                value={name}
            />
            <TouchableHighlight
                style={{ height: 45, flexDirection: 'row', backgroundColor: '#fff', borderColor: '#fff', borderWidth: 1, borderRadius: 8, marginBottom: 10, marginTop: 10, alignSelf: 'stretch', justifyContent: 'center' }}
                onPress={handlesubmit}>
                <Text style={{ fontSize: 18, color: '#111', alignSelf: 'center' }}>Add</Text>
            </TouchableHighlight>
        </View>
    )
}